# # `InferenceTargets`

# ## Overview

# `InferenceTargets` has two audiences in mind:

# 1. Researchers developing and benchmarking algorithms to approximate probability distributions (or *targets*, e.g., high-dimensional posterior distributions).
# 2. Users of these algorithms (e.g., Bayesian statisticians) that have encountered a challenging problem that they would like to share. 

# The goal of the package is to facilitate exchange between these two groups. 
# It has two main features. First, for audience (1), making it easy to pull sets of targets. 
# Second, for audience (2), registering one or several challenging targets. 
# We start with some terminology, then explain how to use the package for each of the two audiences. 

# ## Terminology 

# A *target* is an object encoding a probability distribution we seek to approximate. 
# For example, some targets might conform the [LogDensityProblems](https://github.com/tpapp/LogDensityProblems.jl) 
# interface, but `InferenceTargets` does not impose any restrictions on the targets' Type.

# A *target collection* is a git repository containing a Julia Module specifying one or several targets. 

# The *target registry* is a database in  several target collections. 

# A *targetId* is a `Symbol` identifier for a target. The id should be unique within one collection, 
# but not necessarily across collections.


# ## Audience 1: Using `InferenceTargets` to benchmark an algorithm on many targets

# First, browse the targets registry to the collection of your choice: follow 
# this [link](https://julia-tempering.github.io/InferenceTargets/dev/generated/PosteriorDBTargets) to see 
# an example of a collection in the registry, and from that page, the navigation panel shows other such collections. 

# Each target collection's page has a documentation page with all the information you need to use the targets 
# in that collection. 

# The interface to access all these targets is unified: see the [Reference page](https://julia-tempering.github.io/InferenceTargets/dev/reference). 


# ## Audience 2: Adding a benchmark problem

# We assume you have pushed to github a standard Julia package that incorporates the dependencies needed to run 
# your problem. Your package does not have to be registered. 

# You do not need to add `InferenceTargets` as a dependency. We instead rely on simple function name conventions. 
# There are two methods to declare targets: (a) if you have one target or a small set of targets, use the *dispatch style* 
# convention; (b) if you have a large set of targets, use the *provided ids style*. You should pick only one of 
# these two styles.

# ### Small collections (dispatch style)

# We will define a function named `provide_target`. Each dispatch should take an argument of type `Val{:my_target_id}` 
# and return the target. For example:


provide_target(::Val{:my_target_id}) = some_code() # my code constructing a target
nothing #hide

# Once you are done, skip to section **Addding your collection to the registry**.

# ### Large collections (provided ids style)

# Define a function called `provide_targetIds()` which should return an iterable over `Symbol`s:

provide_targetIds() = [:first_id, :second_id] # would typically lookup in a database
nothing #hide

# Then, define a function called `provide_target` that takes a `Symbol` and returns the target:

function provide_target(targetId::Symbol)
    return some_code() # load from a database, construct target
end
nothing #hide

# ### Adding your collection to the registry 

# Commit and push your changes. Then, create a PR adding one line pointing to your repo in this 
# [file](https://github.com/Julia-Tempering/InferenceTargets/blob/main/src/targets_registry.jl).

# After your PR is  merged, the registry documentation page will automatically be generated for your collection. 