using InferenceTargets, Test, Pigeons 

pigeons_runs(target) = 
    pigeons(; target, n_rounds = 2, n_chains = 2, show_report = false) isa PT

@testset "InferenceTargets export" begin 
    # Avoid infinity loops
    @test !InferenceTargets.is_targets_collection(InferenceTargets)
end

module GoodDispatchExample
    using Pigeons
    build_target(::Val{:some_identifier}) = toy_mvn_target(1000)
end

module GoodListExample 
    using Pigeons 
    targetIds() = [:some_id]
    function build_target(symbol)
        @assert symbol == :some_id 
        return toy_mvn_target(1000) 
    end
end

@testset "Intefaces" begin 
    for m in [GoodDispatchExample, GoodListExample]
        @test !isempty(find_targetIds(m))
        for id in find_targetIds(m) 
            @test pigeons_runs(build_target_from_module(m, id))
        end
    end
end

module Bad1
    build_target() = nothing
end
@testset "Error handling" begin 
    @test_throws "Invalid targetId (should have single arg)" find_targetIds(Bad1) 
end

module Bad2
    build_target(::Symbol) = nothing
end
@testset "Error handling" begin 
    @test_throws "Invalid targetId (arg should be of type Val)" find_targetIds(Bad2) 
end

module Bad3
    build_target(::Val{Int}) = nothing
end
@testset "Error handling" begin 
    @test_throws "Invalid targetId (arg should be of type Val{<:Symbol})" find_targetIds(Bad3) 
end