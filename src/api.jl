is_targets_collection(m::Module) = isdefined(m, :build_target)

find_targetIds(m::Module) =
    if isdefined(m, :targetIds)
        result = call(m, :targetIds)
        @assert is_targetId(eltype(result)) "Not a valid targetId: $(eltype(result)), $(is_targetId(eltype(result)))"
        result
    else
        extract_targetIds_from_methods(m)
    end

function find_targetIds()
    result = Dict{Module, Any}()
    for m in values(Base.loaded_modules)
        if is_targets_collection(m)
            result[m] = find_targetIds(m)
        end
    end 
    return result
end 

build_target_from_module(m::Module, targetId) = 
    call(m, :build_target, targetId)

function summary_table(m::Module)
    success = [] 
    errored = []
    for id in find_targetIds(m)
        try
            target = build_target_from_module(m, id)
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