using Pigeons, InferenceTargets, BridgeStan, DynamicPPL, Test

@testset "InferenceTargets.jl" begin
    dict = InferenceTargets.list_targetIds() 
    for module_key in keys(dict)
        @testset "Testing module $module_key" begin 
            target_ids = dict[module_key] 
            for id in target_ids
                target = build_target(id) 
                pt = pigeons(; target, n_rounds = 2, n_chains = 2, show_report = false) 
            end
        end
    end
end
