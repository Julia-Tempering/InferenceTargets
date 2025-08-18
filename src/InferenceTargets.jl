#=



Simplified protocol!

- each module export Dict{Symbol, Any}
- TargetId = (Module, Symbol)

- utility returns Dict{Module, Symbol, Any}
- no need for registration / import -> just use sub-repos (add http://github.com/user/repo#rev:path/to/subfolder)

Next steps:

oh no, extension super ackward; ext package should not export stuff
maybe the id is concrete TargetId(:collection, :id, args...)

maybe remove the requirement of self-descriptive names; just use dictionaries instead??

what about families of target?
    put into the build_target?

todo
- move to Turing 
- finish lists 
- create test case they load correctly 
- move to ldp_ad (change name)
- prelim doc
- run through some people
- separate (sub-?)package for Posterior DB
- separate (sub-?)package for Blang models 

- go back to simple list_targetIds
    - only way to precisely query specific module 
    - just loop over all modules (except IntererenceTargets)
- for where to put the actual target...
    - try ext first?
        - ext for [Pigeons] provides logdensityproblem_ad(), blang
        - ext for [Pigeons, BridgeStan] - or maybe that should be in Pigeons?
        - ext for [Pigeons, DynamicPPL]
- documentation
    - instructions for benchmarkers
        - pulling a single target
        - converting it to various format
        - pulling a list of currently loaded target
        - link to a TargetCatalogue (part of the doc, much quicker than InferHub, InferHub will pull from it, could cross link later) 
        - getting the catalogue as a 
            - first catalogue: various libraries: modules and Dataframe, time to load, number of targets offered
            - second catalogue: (id, type, supports ldp_ad?, what module it came from, number of dims, for a couple of backends: time per eval, time to load, memory requirement, same for package)

    - instruction to add to benchmark, CI should update the catalogue
    - talk about the interfaces, how pigeons' more flexible, etc.; conventions for dim, etc



- What package organizations for downstream?

    - Could be just simple 

- Catalogue -> InferHub? NO, just do it here! (InferHub is about Inferences, this is just target)
    - CSV: github
    - to start with, no need to run everything, just named + how to grab it with potentially basic meta info
    - InferHub would have a list of repos
    - Each repo should have Module.target_ids() ? 
    - Then, just use my_target_id()
    - This repo is just some utilities to keep catalogue of repos

Simplified interface

=#

# struct TargetId{collection_name}
#     collection::Val{collection_name}
#     args 
# end

"""
`InferenceTargets` is a protocol for sharing targets to benchmark approximation algorithms. 
"""
module InferenceTargets

# """
# In the following, the terminology "targetId" an identifier for a probability distribution that we seek to approximate. Instantiation of targetIds should 
# be O(1) cost (i.e., no data loaded, etc). They should also have the property that the string print out 
# can be pasted to REPL to instantiate it. 
# """
# abstract type TargetId end 

function list_targetIds() 
    result = Dict{Module,Any}()
    for m in values(Base.loaded_modules)
        if m != InferenceTargets # avoid infinite loop!
            if isdefined(m, :list_targetIds)
                result[m] = call(m, :list_targetIds)
            end
        end 
    end 
    return result
end

function call(m::Module, function_name::Symbol, args...)
    f = getfield(m, function_name)
    return f(args...)
end


"""
    build_target(targetId)

Build the given `targetId` to return at `target`. This may involve loading data or other costly operations. 
We do not impose a constraint on the return type of `build_target`, but we will use the convention to call `target` any 
example of what is returned by `build_target`. 
"""
build_target(targetId) = targetId

"""
    ldp_ad(target, suggested_backend) 

Convert (if needed), the provided `target` (usually created with `build_target`), into an 
object conforming the [`LogDensityProblemsAD`](https://github.com/tpapp/LogDensityProblemsAD.jl). 

This may result in an object that is not thread safe (even if the original target was), since 
the AD object may contain AD buffers. 

The `suggested_backend` (see [`LogDensityProblemsAD`](https://github.com/tpapp/LogDensityProblemsAD.jl)) may or 
may not get used, e.g. for Stan targets it would be ignored.
"""
function lpd_ad end 


export build_target, lpd_ad


# """
# Look up all the subtypes of `TargetId` recursively, and calls [`targetIds`](@ref) 
# on all those to enumerate the known targetIds.  
# """
# function targetIds() 
#     result = Vector{TargetId}() 
#     targetIds!(result, TargetId)
#     return result
# end
# function targetIds!(result, T)
#     append!(result, list(T)) 
#     for S in subtype(T) 
#         targetIds!(result, S)
#     end
# end

end
