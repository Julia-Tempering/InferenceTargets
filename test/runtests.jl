using InferenceTargets, Test, Pigeons 

pigeons_runs(target) = 
    pigeons(; target, n_rounds = 2, n_chains = 2, show_report = false) isa PT

@testset "InferenceTargets export" begin 
    # Avoid infinity loops
    @test !InferenceTargets.isa_collection(InferenceTargets)
end

module GoodDispatchExample
    using Pigeons
    provide_target(::Val{:some_id}) = toy_mvn_target(1)
end

module GoodListExample 
    using Pigeons 
    provide_targetIds() = [:some_id]
    function provide_target(symbol)
        @assert symbol == :some_id 
        return toy_mvn_target(1) 
    end
end

@testset "Intefaces" begin 
    for m in [GoodDispatchExample, GoodListExample]
        @test !isempty(find_targetIds(m))
        for id in find_targetIds(m) 
            @test pigeons_runs(load_target(m, id))
        end
        load_target(m, :some_id)
        load_target(m, Val(:some_id))
        load_target(m, "some_id")
    end
end

module Bad1
    provide_target() = nothing
end
@testset "Error handling" begin 
    @test_throws "Invalid targetId (should have single arg)" find_targetIds(Bad1) 
    @test_throws "Invalid targetId" load_target(GoodDispatchExample, 123)
end

module Bad2
    provide_target(::Symbol) = nothing
end
@testset "Error handling" begin 
    @test_throws "Invalid targetId (arg should be of type Val)" find_targetIds(Bad2) 
end

module Bad3
    provide_target(::Val{Int}) = nothing
end
@testset "Error handling" begin 
    @test_throws "Invalid targetId (arg should be of type Val{<:Symbol})" find_targetIds(Bad3) 
end