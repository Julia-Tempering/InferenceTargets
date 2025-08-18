module InferenceTargetsBridgeStanExt
import Pigeons: @auto
using InferenceTargets, Pigeons

struct StanExample 
    name::Symbol
    args::NamedTuple 
end

InferenceTargets.build_target(targetId::StanExample) = StanLogPotential(
        stan_example_path("$(string(targetId.name)).stan"),
        Pigeons.json(; targetId.args...)
    )

list_targetIds() = Any[
    StanExample(:funnel, (dim = 9, scale = 2.0))]

stan_example_path(name) =
    dirname(dirname(pathof(Pigeons))) * "/examples/stan/$name"

end