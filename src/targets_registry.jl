const registry = Dict{Symbol, PackageSpec}(
    :PosteriorDBTargets         => PackageSpec(url = "https://github.com/Julia-Tempering/PosteriorDBTargets", rev = "4823a1c9b55263ee9464dcda5357a51b308e62f8"),
    :TuringPigeonsExamples      => PackageSpec(url = "https://github.com/Julia-Tempering/TuringPigeonsExamples", rev = "0b09109682db72a1283c886d2855c9e8a4e4cce9"),
    :PigeonsExamples            => PackageSpec(url = "https://github.com/Julia-Tempering/PigeonsExamples", rev = "4ec988cf6568b4fb045bac328a76699f034aec10"),
    :BlangTargets               => PackageSpec(url = "https://github.com/Julia-Tempering/BlangTargets", rev = "85fb820aaa05ea511b6f1ef40f0b5edcea31c3b6"), # CI is stalling intermit'ly ?
    
    # PRs welcome:  just add to this dictionary. 
    #               The key should be the module name (as a symbol). 
    #               Use a fixed commit or version.
)
