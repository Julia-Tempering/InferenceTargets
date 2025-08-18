module InferenceTargetsPigeonsExt
using Pigeons, InferenceTargets

list_targetIds() = Any[
    Pigeons.ScaledPrecisionNormalPath(1000),
]

end