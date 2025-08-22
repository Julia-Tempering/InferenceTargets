const registry = Dict{Symbol, PackageSpec}(
    :PosteriorDBTargets         => PackageSpec(url = "https://github.com/Julia-Tempering/PosteriorDBTargets", rev = "d72a77769391accbfd7c8d255cb26106b3a3ffc7"),
    :TuringPigeonsExamples      => PackageSpec(url = "https://github.com/Julia-Tempering/TuringPigeonsExamples", rev = "0b09109682db72a1283c886d2855c9e8a4e4cce9"),
    :PigeonsExamples            => PackageSpec(url = "https://github.com/Julia-Tempering/PigeonsExamples", rev = "4ec988cf6568b4fb045bac328a76699f034aec10"),
    #:BlangTargets               => PackageSpec(url = "https://github.com/Julia-Tempering/BlangTargets", rev = "8c279e01b7d83e4d6bf4f108e7a05f24e4a903c2"), # CI is stalling intermit'ly ?
    
    # PRs welcome:  just add to this dictionary. 
    #               The key should be the module name (as a symbol). 
    #               Use a fixed commit or version.
)
