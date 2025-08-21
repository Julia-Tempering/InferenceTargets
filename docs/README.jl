# # `InferenceTargets.jl` － Benchmarknought

# <!-- Warning: make sure you edit the .jl file, not the .md file! The latter are generated and will get overwritten. -->

# ## Overview

# `InferenceTargets.jl` has two audiences in mind:

# 1. Researchers developing and benchmarking algorithms to approximate probability distributions ("targets", e.g., high-dimensional posterior distributions).
# 2. Users of these algorithms (e.g., Bayesian statisticians) that have encountered a challenging problem. 

# The goal of the package is to facilitate exchange between these two groups. 
# It has two main features. First, for audience (1), making it easy to pull sets of targets. 
# Second, for audience (2), registering one or several challenging targets. 
# We start with some terminology, then explain how to use the package for each of the two audiences. 

# ## Terminology 

# A `target` is an object encoding a probability distribution we seek to approximate. 
# For example, some targets might conform the [LogDensityProblems](https://github.com/tpapp/LogDensityProblems.jl) 
# interface if they are fully continous, but there are no restrictions on the type of targets.

# A `target collection` is a git repository containing a Julia Module specifying one or several targets. 
# Here is an example: 

# The `target registry` is a dictionary that lists several target collections. 

# A `targetId` is a `Symbol` identifier for a `target`. Within one collection, it should be unique, 
# but not necessarily across collections.


# ## Audience 1: Using `InferenceTargets.jl` to setup a benchmark




# ## Audience 2: Adding a benchmark problem

# We assume you have pushed to github a standard Julia package that incorporates the dependencies needed to run 
# your problem, but we do **not** assume your package is registered. 

# You do **not** need to add `InferenceTargets` as a dependency. We instead rely on a convention for function names. 
# There are two methods to declare targets: if you have one or a small list of targets 