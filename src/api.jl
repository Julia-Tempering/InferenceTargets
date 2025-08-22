abstract type CollectionType end 

# See README for documentation on the "dispatch style" and "provided ids style"
struct DispatchedIds <: CollectionType end 
struct ProvidedIds <: CollectionType end 
isa_collection(m::Module) = isdefined(m, :provide_target)
function collection_type(m::Module) 
    @assert isa_collection(m)
    return isdefined(m, :provide_targetIds) ? ProvidedIds() : DispatchedIds()
end

"""
    find_targetIds(m::Module)

Return the targetIds provided by the given module as a `Vector{Symbol}`. 

An exception will be thrown if the module is not a target collection.
"""
find_targetIds(m::Module) = as_symbol.(collect(find_targetIds(m, collection_type(m))))
find_targetIds(m::Module, ::DispatchedIds) =  extract_targetIds_from_methods(m) 
function find_targetIds(m::Module, ::ProvidedIds) 
    result = call(m, :provide_targetIds)
    @assert is_targetId(eltype(result)) "Not a valid targetId: $(eltype(result)), $(is_targetId(eltype(result)))"
    return result
end

"""
    find_targetIds() 

Query all loaded modules. Create a dictionary, 
where each key is a modules `m` that is a target collections, 
and the corresponding value is the result of `find_targetIds(m)`. 
"""
function find_targetIds()
    result = Dict{Module, Any}()
    for m in values(Base.loaded_modules)
        if isa_collection(m)
            result[m] = find_targetIds(m)
        end
    end 
    return result
end 

""" 
    load_target(m::Module, targetId) 

Load the target corresponding to the provided targetId. 
The targetId can be encoded as a `String`, `Symbol`, or `Val{:symbol}` 
and will be automatically converted to the appropriate representation 
used in the target collection. 

An exception will be thrown if the module is not a target collection.
"""
function load_target(m::Module, targetId)
    @assert isa_collection(m) "$m is not a targets collection"
    targetId_symbol::Symbol = as_symbol(targetId) 
    load_target(m, targetId_symbol, collection_type(m))
end
load_target(m::Module, targetId::Symbol, ::ProvidedIds) = call(m, :provide_target, targetId) 
load_target(m::Module, targetId::Symbol, ::DispatchedIds) = call(m, :provide_target, Val(targetId)) 

as_symbol(symbol::Symbol) = symbol 
function as_symbol(::Val{symbol}) where {symbol} 
    @assert symbol isa Symbol
    return symbol
end 
as_symbol(string::AbstractString) = Symbol(string)
as_symbol(arg) = error("Invalid targetId: $arg")

""" 
    summary_table(m::Module)

Create a `Tables` providing information on the targets in the 
given collection. 

An exception will be thrown if the module is not a target collection.
"""
function summary_table(m::Module)
    success = [] 
    errored = []
    for id in find_targetIds(m)
        try
            target = load_target(m, id)
            push!(success, (;
                targetId = as_symbol(id), 
                type = string(typeof(target))
            ))
        catch e 
            push!(errored, (;
                targetId = as_symbol(id), 
                error = string(e)
            ))
        end
    end
    return Tables.columntable(success), Tables.columntable(errored)
end