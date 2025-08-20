module InferenceTargets 

using Pkg, Tables

include("utils.jl")
include("api.jl")
include("targets_registry.jl")

export find_targetIds, build_target_from_module

end
