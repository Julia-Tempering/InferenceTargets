import{_ as i,c as a,o as n,aA as e}from"./chunks/framework.D7a-xEaM.js";const o=JSON.parse('{"title":"BlangTargets － Targets collection","description":"","frontmatter":{},"headers":[],"relativePath":"generated/BlangTargets.md","filePath":"generated/BlangTargets.md","lastUpdated":null}'),t={name:"generated/BlangTargets.md"};function l(h,s,p,d,k,r){return n(),a("div",null,[...s[0]||(s[0]=[e(`<h1 id="BlangTargets-－-Targets-collection" tabindex="-1"><code>BlangTargets</code> － Targets collection <a class="header-anchor" href="#BlangTargets-－-Targets-collection" aria-label="Permalink to &quot;\`BlangTargets\` － Targets collection {#BlangTargets-－-Targets-collection}&quot;">​</a></h1><h2 id="Setup-instructions" tabindex="-1">Setup instructions <a class="header-anchor" href="#Setup-instructions" aria-label="Permalink to &quot;Setup instructions {#Setup-instructions}&quot;">​</a></h2><p>To setup <code>BlangTargets</code>:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> InferenceTargets, Pkg</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">package_spec </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> InferenceTargets</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">registry[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:BlangTargets</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Pkg</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(package_spec)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> BlangTargets</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#28a745;--shiki-light-font-weight:bold;--shiki-dark:#34d058;--shiki-dark-font-weight:bold;">     Cloning</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;"> git-repo \`https://github.com/Julia-Tempering/BlangTargets\`</span></span>
<span class="line"><span style="--shiki-light:#28a745;--shiki-light-font-weight:bold;--shiki-dark:#34d058;--shiki-dark-font-weight:bold;">   Resolving</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;"> package versions...</span></span>
<span class="line"><span style="--shiki-light:#28a745;--shiki-light-font-weight:bold;--shiki-dark:#34d058;--shiki-dark-font-weight:bold;">    Updating</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;"> \`~/work/InferenceTargets/InferenceTargets/docs/Project.toml\`</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [e8acbe71] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ BlangTargets v0.1.0 \`https://github.com/Julia-Tempering/BlangTargets#8c279e0\`</span></span>
<span class="line"><span style="--shiki-light:#28a745;--shiki-light-font-weight:bold;--shiki-dark:#34d058;--shiki-dark-font-weight:bold;">    Updating</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;"> \`~/work/InferenceTargets/InferenceTargets/docs/Manifest.toml\`</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [47edcb42] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ ADTypes v1.17.0</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [7d9f7c33] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ Accessors v0.1.42</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [79e6a3ab] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ Adapt v4.3.0</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [66dad0bd] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ AliasTables v1.1.3</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [dce04be8] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ ArgCheck v2.5.0</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [ec485272] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ ArnoldiMethod v0.4.0</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [13072b0f] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ AxisAlgorithms v1.1.0</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [e8acbe71] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ BlangTargets v0.1.0 \`https://github.com/Julia-Tempering/BlangTargets#8c279e0\`</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [336ed68f] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ CSV v0.10.15</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [d360d2e6] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ ChainRulesCore v1.26.0</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [38540f10] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ CommonSolve v0.2.4</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [34da2185] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ Compat v4.18.0</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [a33af91c] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ CompositionsBase v0.1.2</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [187b0558] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ ConstructionBase v1.6.0</span></span>
<span class="line"><span style="--shiki-light:#28a745;--shiki-dark:#34d058;">⌃</span><span style="--shiki-light:#959da5;--shiki-dark:#959da5;"> [a93c6f00] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ DataFrames v1.5.0</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [864edb3b] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ DataStructures v0.19.0</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [31c24e10] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ Distributions v0.25.120</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [6a31a4e8] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ Expect v0.3.1</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [48062228] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ FilePathsBase v0.9.24</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [1a297f60] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ FillArrays v1.13.0</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [86223c79] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ Graphs v1.13.1</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [34004b35] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ HypergeometricFunctions v0.3.28</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [d25df0c9] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ Inflate v0.1.5</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [842dd82b] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ InlineStrings v1.4.4</span></span>
<span class="line"><span style="--shiki-light:#dbab09;--shiki-dark:#ffea7f;">⌅</span><span style="--shiki-light:#959da5;--shiki-dark:#959da5;"> [a98d9a8b] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ Interpolations v0.15.1</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [3587e190] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ InverseFunctions v0.1.17</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [41ab1584] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ InvertedIndices v1.3.1</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [92d709cd] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ IrrationalConstants v0.2.4</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [6fdf6af0] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ LogDensityProblems v2.1.2</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [996a588d] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ LogDensityProblemsAD v1.13.1</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [2ab3a3ac] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ LogExpFunctions v0.3.29</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [da04e1cc] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ MPI v0.20.23</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [3da0fdf6] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ MPIPreferences v0.1.11</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [1914dd2f] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ MacroTools v0.5.16</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [e1d29d7a] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ Missings v1.2.0</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [6fe1bfb0] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ OffsetArrays v1.17.0</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [925886fa] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ OnlineStatsBase v1.7.1</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [90014a1f] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ PDMats v0.11.35</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [0eb8d820] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ Pigeons v0.4.9</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [eebad327] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ PkgVersion v0.3.3</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [2dfb63ee] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ PooledArrays v1.4.3</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [43287f4e] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ PtrArrays v1.3.0</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [1fd47b50] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ QuadGK v2.11.2</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [c84ed2f1] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ Ratios v0.4.5</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [3cdcf5f2] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ RecipesBase v1.3.4</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [ae029012] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ Requires v1.3.1</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [79098fc4] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ Rmath v0.8.0</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [f2b01f46] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ Roots v2.2.10</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [91c51154] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ SentinelArrays v1.4.8</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [699a6c99] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ SimpleTraits v0.9.5</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [66db9d55] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ SnoopPrecompile v1.0.3</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [a2af1166] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ SortingAlgorithms v1.2.2</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [276daf66] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ SpecialFunctions v2.5.1</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [8efc31e9] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ SplittableRandoms v0.1.2</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [90137ffa] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ StaticArrays v1.9.14</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [1e83bf80] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ StaticArraysCore v1.4.3</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [10745b16] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ Statistics v1.11.1</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [82ae8749] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ StatsAPI v1.7.1</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [2913bbd2] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ StatsBase v0.34.6</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [4c63d2b9] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ StatsFuns v1.5.0</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [ea10d353] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ WeakRefStrings v1.4.2</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [efce3f68] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ WoodburyMatrices v1.0.0</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [76eceee3] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ WorkerUtilities v1.6.1</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [a5390f91] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ ZipFile v0.10.1</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [e33a78d0] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ Hwloc_jll v2.12.1+0</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [7cb0a576] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ MPICH_jll v4.3.1+0</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [f1f71cc9] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ MPItrampoline_jll v5.5.4+0</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [9237b28f] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ MicrosoftMPI_jll v10.1.4+3</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [fe0851c0] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ OpenMPI_jll v5.0.8+0</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [efe28fd5] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ OpenSpecFun_jll v0.5.6+0</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [f50d1b31] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ Rmath_jll v0.5.1+0</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [8ba89e20] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ Distributed v1.11.0</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [9fa8497b] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ Future v1.11.0</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [4af54fe1] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ LazyArtifacts v1.11.0</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [37e2e46d] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ LinearAlgebra v1.11.0</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [1a1011a3] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ SharedArrays v1.11.0</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [2f01184e] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ SparseArrays v1.11.0</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [4607b0f0] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ SuiteSparse</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [e66e0078] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ CompilerSupportLibraries_jll v1.1.1+0</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [4536629a] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ OpenBLAS_jll v0.3.27+1</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [05823500] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ OpenLibm_jll v0.8.5+0</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [bea87d4a] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ SuiteSparse_jll v7.7.0+0</span></span>
<span class="line"><span style="--shiki-light:#959da5;--shiki-dark:#959da5;">  [8e850b90] </span><span style="--shiki-light:#22863a;--shiki-dark:#85e89d;">+ libblastrampoline_jll v5.11.0+0</span></span>
<span class="line"><span style="--shiki-light:#1b7c83;--shiki-light-font-weight:bold;--shiki-dark:#39c5cf;--shiki-dark-font-weight:bold;">        Info</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;"> Packages marked with </span><span style="--shiki-light:#28a745;--shiki-dark:#34d058;">⌃</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;"> and </span><span style="--shiki-light:#dbab09;--shiki-dark:#ffea7f;">⌅</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;"> have new versions available. Those with </span><span style="--shiki-light:#28a745;--shiki-dark:#34d058;">⌃</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;"> may be upgradable, but those with </span><span style="--shiki-light:#dbab09;--shiki-dark:#ffea7f;">⌅</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;"> are restricted by compatibility constraints from upgrading. To see why use \`status --outdated -m\`</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">Precompiling project...</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  28083.9 ms  ? BlangTargets</span></span>
<span class="line"><span style="--shiki-light:#22863a;--shiki-light-font-weight:bold;--shiki-dark:#85e89d;--shiki-dark-font-weight:bold;">Precompiling</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;"> BlangTargets...</span></span>
<span class="line"><span style="--shiki-light:#1b7c83;--shiki-light-font-weight:bold;--shiki-dark:#39c5cf;--shiki-dark-font-weight:bold;">Info</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;"> Given BlangTargets was explicitly requested, output will be shown live \x1B[0K</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-light-font-weight:bold;--shiki-dark:#e1e4e8;--shiki-dark-font-weight:bold;">[ </span><span style="--shiki-light:#1b7c83;--shiki-light-font-weight:bold;--shiki-dark:#39c5cf;--shiki-dark-font-weight:bold;">Info: </span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">it seems setup_blang() was already ran for nowellpack; to force re-runing the setup for nowellpack, first remove the folder /home/runner/.pigeons/nowellpack</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-light-font-weight:bold;--shiki-dark:#e1e4e8;--shiki-dark-font-weight:bold;">[ </span><span style="--shiki-light:#1b7c83;--shiki-light-font-weight:bold;--shiki-dark:#39c5cf;--shiki-dark-font-weight:bold;">Info: </span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">it seems setup_blang() was already ran for blangDemos; to force re-runing the setup for blangDemos, first remove the folder /home/runner/.pigeons/blangDemos</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">ple(Pigeons.StreamState, Any) in module Pigeons at /home/runner/.julia/packages/Pigeons/AU55F/src/targets/StreamState.jl:23 overwritten in module BlangTargets at /home/runner/.julia/packages/BlangTargets/8gfdI/src/BlangTargets.jl:31.</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">itted during Module precompilation. Use \`__precompile__(false)\` to opt-out of precompilation.</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   7172.6 ms</span><span style="--shiki-light:#dbab09;--shiki-dark:#ffea7f;">  ? </span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">BlangTargets</span></span>
<span class="line"><span style="--shiki-light:#1b7c83;--shiki-light-font-weight:bold;--shiki-dark:#39c5cf;--shiki-dark-font-weight:bold;">[ </span><span style="--shiki-light:#1b7c83;--shiki-light-font-weight:bold;--shiki-dark:#39c5cf;--shiki-dark-font-weight:bold;">Info: </span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">it seems setup_blang() was already ran for nowellpack; to force re-runing the setup for nowellpack, first remove the folder /home/runner/.pigeons/nowellpack</span></span>
<span class="line"><span style="--shiki-light:#1b7c83;--shiki-light-font-weight:bold;--shiki-dark:#39c5cf;--shiki-dark-font-weight:bold;">[ </span><span style="--shiki-light:#1b7c83;--shiki-light-font-weight:bold;--shiki-dark:#39c5cf;--shiki-dark-font-weight:bold;">Info: </span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">it seems setup_blang() was already ran for blangDemos; to force re-runing the setup for blangDemos, first remove the folder /home/runner/.pigeons/blangDemos</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">WARNING: Method definition extract_sample(Pigeons.StreamState, Any) in module Pigeons at /home/runner/.julia/packages/Pigeons/AU55F/src/targets/StreamState.jl:23 overwritten in module BlangTargets at /home/runner/.julia/packages/BlangTargets/8gfdI/src/BlangTargets.jl:31.</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">ERROR: Method overwriting is not permitted during Module precompilation. Use \`__precompile__(false)\` to opt-out of precompilation.</span></span>
<span class="line"><span style="--shiki-light:#1b7c83;--shiki-light-font-weight:bold;--shiki-dark:#39c5cf;--shiki-dark-font-weight:bold;">[ </span><span style="--shiki-light:#1b7c83;--shiki-light-font-weight:bold;--shiki-dark:#39c5cf;--shiki-dark-font-weight:bold;">Info: </span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">it seems setup_blang() was already ran for nowellpack; to force re-runing the setup for nowellpack, first remove the folder /home/runner/.pigeons/nowellpack</span></span>
<span class="line"><span style="--shiki-light:#1b7c83;--shiki-light-font-weight:bold;--shiki-dark:#39c5cf;--shiki-dark-font-weight:bold;">[ </span><span style="--shiki-light:#1b7c83;--shiki-light-font-weight:bold;--shiki-dark:#39c5cf;--shiki-dark-font-weight:bold;">Info: </span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">it seems setup_blang() was already ran for blangDemos; to force re-runing the setup for blangDemos, first remove the folder /home/runner/.pigeons/blangDemos</span></span></code></pre></div><h2 id="Repository-information" tabindex="-1">Repository information <a class="header-anchor" href="#Repository-information" aria-label="Permalink to &quot;Repository information {#Repository-information}&quot;">​</a></h2><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">package_spec</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">PackageSpec(</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  url = https://github.com/Julia-Tempering/BlangTargets</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  rev = 8c279e01b7d83e4d6bf4f108e7a05f24e4a903c2</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  version = *</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">)</span></span></code></pre></div><h2 id="Usage" tabindex="-1">Usage <a class="header-anchor" href="#Usage" aria-label="Permalink to &quot;Usage {#Usage}&quot;">​</a></h2><p>To access the list of <code>targetId</code>s available in <code>BlangTargets</code>:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ids </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> find_targetIds</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(BlangTargets)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">length</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ids)</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">20</span></span></code></pre></div><p>To load one target:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">some_id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ids[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">load_target</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(BlangTargets, some_id)</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">Pigeons.BlangTarget(\`</span><span style="--shiki-light:#24292e;--shiki-light-text-decoration:underline;--shiki-dark:#e1e4e8;--shiki-dark-text-decoration:underline;">java</span><span style="--shiki-light:#24292e;--shiki-light-text-decoration:underline;--shiki-dark:#e1e4e8;--shiki-dark-text-decoration:underline;"> -cp</span><span style="--shiki-light:#24292e;--shiki-light-text-decoration:underline;--shiki-dark:#e1e4e8;--shiki-dark-text-decoration:underline;"> &#39;/home/runner/.pigeons/blangDemos/build/install/blangDemos/lib//*&#39;</span><span style="--shiki-light:#24292e;--shiki-light-text-decoration:underline;--shiki-dark:#e1e4e8;--shiki-dark-text-decoration:underline;"> blang.validation.internals.fixtures.Ising</span><span style="--shiki-light:#24292e;--shiki-light-text-decoration:underline;--shiki-dark:#e1e4e8;--shiki-dark-text-decoration:underline;"> --model.moment</span><span style="--shiki-light:#24292e;--shiki-light-text-decoration:underline;--shiki-dark:#e1e4e8;--shiki-dark-text-decoration:underline;"> 0.1</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">\`)</span></span></code></pre></div><h2 id="Summary" tabindex="-1">Summary <a class="header-anchor" href="#Summary" aria-label="Permalink to &quot;Summary {#Summary}&quot;">​</a></h2><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Markdown, PrettyTables</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">success, errored </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> InferenceTargets</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">summary_table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(BlangTargets)</span></span></code></pre></div><h3 id="Successfully-loaded-targets" tabindex="-1">Successfully loaded targets <a class="header-anchor" href="#Successfully-loaded-targets" aria-label="Permalink to &quot;Successfully loaded targets {#Successfully-loaded-targets}&quot;">​</a></h3><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">length</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(success)</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">2</span></span></code></pre></div><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">pretty_table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(HTML, success; backend </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Val</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), show_subheader</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div><table>
  <thead>
    <tr class = "header headerLastRow">
      <th style = "text-align: right;">targetId</th>
      <th style = "text-align: right;">type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style = "text-align: right;">magnetic</td>
      <td style = "text-align: right;">Pigeons.BlangTarget</td>
    </tr>
    <tr>
      <td style = "text-align: right;">rockets</td>
      <td style = "text-align: right;">Pigeons.BlangTarget</td>
    </tr>
    <tr>
      <td style = "text-align: right;">toymix</td>
      <td style = "text-align: right;">Pigeons.BlangTarget</td>
    </tr>
    <tr>
      <td style = "text-align: right;">chromobreak</td>
      <td style = "text-align: right;">Pigeons.BlangTarget</td>
    </tr>
    <tr>
      <td style = "text-align: right;">simple-mix</td>
      <td style = "text-align: right;">Pigeons.BlangTarget</td>
    </tr>
    <tr>
      <td style = "text-align: right;">Wright-Fisher</td>
      <td style = "text-align: right;">Pigeons.BlangTarget</td>
    </tr>
    <tr>
      <td style = "text-align: right;">transfection</td>
      <td style = "text-align: right;">Pigeons.BlangTarget</td>
    </tr>
    <tr>
      <td style = "text-align: right;">sitka</td>
      <td style = "text-align: right;">Pigeons.BlangTarget</td>
    </tr>
    <tr>
      <td style = "text-align: right;">xy</td>
      <td style = "text-align: right;">Pigeons.BlangTarget</td>
    </tr>
    <tr>
      <td style = "text-align: right;">ariane</td>
      <td style = "text-align: right;">Pigeons.BlangTarget</td>
    </tr>
    <tr>
      <td style = "text-align: right;">Ising-critical</td>
      <td style = "text-align: right;">Pigeons.BlangTarget</td>
    </tr>
    <tr>
      <td style = "text-align: right;">PhylogeneticTree</td>
      <td style = "text-align: right;">Pigeons.BlangTarget</td>
    </tr>
    <tr>
      <td style = "text-align: right;">simple-mix-150</td>
      <td style = "text-align: right;">Pigeons.BlangTarget</td>
    </tr>
    <tr>
      <td style = "text-align: right;">product</td>
      <td style = "text-align: right;">Pigeons.BlangTarget</td>
    </tr>
    <tr>
      <td style = "text-align: right;">discrete</td>
      <td style = "text-align: right;">Pigeons.BlangTarget</td>
    </tr>
    <tr>
      <td style = "text-align: right;">normal</td>
      <td style = "text-align: right;">Pigeons.BlangTarget</td>
    </tr>
    <tr>
      <td style = "text-align: right;">titanic</td>
      <td style = "text-align: right;">Pigeons.BlangTarget</td>
    </tr>
    <tr>
      <td style = "text-align: right;">PhylogeneticTreeLarger</td>
      <td style = "text-align: right;">Pigeons.BlangTarget</td>
    </tr>
    <tr>
      <td style = "text-align: right;">elliptic</td>
      <td style = "text-align: right;">Pigeons.BlangTarget</td>
    </tr>
    <tr>
      <td style = "text-align: right;">Ising-supercritical</td>
      <td style = "text-align: right;">Pigeons.BlangTarget</td>
    </tr>
  </tbody>
</table>
</div><h3 id="Errored-targets" tabindex="-1">Errored targets <a class="header-anchor" href="#Errored-targets" aria-label="Permalink to &quot;Errored targets {#Errored-targets}&quot;">​</a></h3><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">length</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(errored)</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">0</span></span></code></pre></div><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">pretty_table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(HTML, errored; backend </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Val</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), show_subheader</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div><table>
</table>
</div>`,27)])])}const c=i(t,[["render",l]]);export{o as __pageData,c as default};
