function call(m::Module, function_name::Symbol, args...)
    f = getfield(m, function_name)
    return f(args...)
end

function extract_targetIds_from_methods(m::Module)
    f = getfield(m, :build_target)
    result = Val[]
    for method in methods(f).ms
        sig = method.sig
        if length(sig.parameters) == 2
            argtype = sig.parameters[2]
            if argtype isa Type && argtype <: Val && length(argtype.parameters) == 1
                id = argtype.parameters[1]
                if id isa Symbol
                    push!(result, Val(id))
                else
                    error("Invalid targetId (arg should be of type Val{<:Symbol}): $method")
                end
            else
                error("Invalid targetId (arg should be of type Val): $method")
            end
        else
            error("Invalid targetId (should have single arg): $method")
        end
    end
    return result
end

is_targetId(::Type{Symbol}) = true 
is_targetId(::Type{Val{<:Symbol}}) = true 
is_targetId(_) = false 
