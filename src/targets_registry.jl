const registry = Dict{Symbol, PackageSpec}(
    :PosteriorDBTargets         => PackageSpec(url = "https://github.com/Julia-Tempering/PosteriorDBTargets", rev = "d72a77769391accbfd7c8d255cb26106b3a3ffc7"),
    :TuringPigeonsExamples      => PackageSpec(url = "https://github.com/Julia-Tempering/TuringPigeonsExamples", rev = "0b09109682db72a1283c886d2855c9e8a4e4cce9"),
    :PigeonsExamples            => PackageSpec(url = "https://github.com/Julia-Tempering/PigeonsExamples", rev = "8e02e87489843d8e0a4ae9782ceb2c0f784d7545"),
    
    # PRs welcome:  just add to this dictionary. 
    #               The key should be the module name (as a symbol). 
    #               Use a fixed commit or version.
)
