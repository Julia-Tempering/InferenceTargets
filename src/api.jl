abstract type CollectionType end 

struct DispatchedIds <: CollectionType end 
struct ProvidedIds <: CollectionType end 

isa_collection(m::Module) = isdefined(m, :provide_target)
function collection_type(m::Module) 
    @assert isa_collection(m)
    return isdefined(m, :provide_targetIds) ? ProvidedIds() : DispatchedIds()
end

find_targetIds(m::Module) =
    if isdefined(m, :provide_targetIds)
        result = call(m, :provide_targetIds)
        @assert is_targetId(eltype(result)) "Not a valid targetId: $(eltype(result)), $(is_targetId(eltype(result)))"
        result
    else
        extract_targetIds_from_methods(m)
    end

function find_targetIds()
    result = Dict{Module, Any}()
    for m in values(Base.loaded_modules)
        if isa_collection(m)
            result[m] = find_targetIds(m)
        end
    end 
    return result
end 

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

function summary_table(m::Module)
    success = [] 
    errored = []
    for id in find_targetIds(m)
        try
            target = load_target(m, id)
            push!(success, (;
                targetId = string(id), 
                type = string(typeof(target))
            ))
        catch e 
            push!(errored, (;
                targetId = string(id), 
                error = string(e)
            ))
        end
    end
    return Tables.columntable(success), Tables.columntable(errored)
end