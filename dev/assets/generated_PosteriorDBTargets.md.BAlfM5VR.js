import{_ as n,c as e,o as i,aA as a}from"./chunks/framework.aUc3ouVe.js";const _=JSON.parse('{"title":"PosteriorDBTargets － Targets collection","description":"","frontmatter":{},"headers":[],"relativePath":"generated/PosteriorDBTargets.md","filePath":"generated/PosteriorDBTargets.md","lastUpdated":null}'),l={name:"generated/PosteriorDBTargets.md"};function s(r,t,d,g,o,h){return i(),e("div",null,t[0]||(t[0]=[a(`<h1 id="PosteriorDBTargets-－-Targets-collection" tabindex="-1"><code>PosteriorDBTargets</code> － Targets collection <a class="header-anchor" href="#PosteriorDBTargets-－-Targets-collection" aria-label="Permalink to &quot;\`PosteriorDBTargets\` － Targets collection {#PosteriorDBTargets-－-Targets-collection}&quot;">​</a></h1><h2 id="Setup-instructions" tabindex="-1">Setup instructions <a class="header-anchor" href="#Setup-instructions" aria-label="Permalink to &quot;Setup instructions {#Setup-instructions}&quot;">​</a></h2><p>To setup <code>PosteriorDBTargets</code>:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> InferenceTargets, Pkg</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">package_spec </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> InferenceTargets</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">registry[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:PosteriorDBTargets</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Pkg</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(package_spec)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PosteriorDBTargets</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">package_spec</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">PackageSpec(</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  url = https://github.com/Julia-Tempering/PosteriorDBTargets</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  rev = d72a77769391accbfd7c8d255cb26106b3a3ffc7</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">  version = *</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">)</span></span></code></pre></div><h2 id="Usage" tabindex="-1">Usage <a class="header-anchor" href="#Usage" aria-label="Permalink to &quot;Usage {#Usage}&quot;">​</a></h2><p>To access the list of <code>targetId</code>s available in <code>PosteriorDBTargets</code>:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ids </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> find_targetIds</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(PosteriorDBTargets)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">length</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ids)</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">147</span></span></code></pre></div><p>To load one target:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">some_id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ids[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">load_target</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(PosteriorDBTargets, some_id)</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">StanLogPotential(GLMM_Poisson_model_model)</span></span></code></pre></div><h2 id="Summary" tabindex="-1">Summary <a class="header-anchor" href="#Summary" aria-label="Permalink to &quot;Summary {#Summary}&quot;">​</a></h2><h3 id="Successfully-loaded" tabindex="-1">Successfully loaded <a class="header-anchor" href="#Successfully-loaded" aria-label="Permalink to &quot;Successfully loaded {#Successfully-loaded}&quot;">​</a></h3><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Markdown, PrettyTables</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">success, errored </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> InferenceTargets</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">summary_table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(PosteriorDBTargets)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">pretty_table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(HTML, success; backend </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Val</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), show_subheader</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div><table>
  <thead>
    <tr class = "header headerLastRow">
      <th style = "text-align: right;">targetId</th>
      <th style = "text-align: right;">type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style = "text-align: right;">GLMM_Poisson_data-GLMM_Poisson_model</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">GLMM_data-GLMM1_model</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">GLM_Binomial_data-GLM_Binomial_model</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">GLM_Poisson_Data-GLM_Poisson_model</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">M0_data-M0_model</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">Mb_data-Mb_model</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">Mh_data-Mh_model</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">Mt_data-Mt_model</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">Mtbh_data-Mtbh_model</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">Mth_data-Mth_model</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">Rate_1_data-Rate_1_model</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">Rate_2_data-Rate_2_model</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">Rate_3_data-Rate_3_model</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">Rate_4_data-Rate_4_model</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">Rate_5_data-Rate_5_model</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">Survey_data-Survey_model</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">arK-arK</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">arma-arma11</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">bball_drive_event_0-hmm_drive_0</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">bball_drive_event_1-hmm_drive_1</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">bones_data-bones_model</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">butterfly-multi_occupancy</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">diamonds-diamonds</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">dogs-dogs</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">dogs-dogs_hierarchical</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">dogs-dogs_log</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">dogs-dogs_nonhierarchical</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">dugongs_data-dugongs_model</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">earnings-earn_height</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">earnings-log10earn_height</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">earnings-logearn_height</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">earnings-logearn_height_male</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">earnings-logearn_interaction</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">earnings-logearn_interaction_z</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">earnings-logearn_logheight_male</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">ecdc0401-covid19imperial_v2</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">ecdc0401-covid19imperial_v3</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">ecdc0501-covid19imperial_v2</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">ecdc0501-covid19imperial_v3</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">eight_schools-eight_schools_centered</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">eight_schools-eight_schools_noncentered</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">election88-election88_full</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">fims_Aus_Jpn_irt-2pl_latent_reg_irt</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">garch-garch11</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">gp_pois_regr-gp_pois_regr</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">gp_pois_regr-gp_regr</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">hmm_example-hmm_example</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">hmm_gaussian_simulated-hmm_gaussian</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">hudson_lynx_hare-lotka_volterra</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">iohmm_reg_simulated-iohmm_reg</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">irt_2pl-irt_2pl</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">kidiq-kidscore_interaction</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">kidiq-kidscore_momhs</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">kidiq-kidscore_momhsiq</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">kidiq-kidscore_momiq</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">kidiq_with_mom_work-kidscore_interaction_c</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">kidiq_with_mom_work-kidscore_interaction_c2</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">kidiq_with_mom_work-kidscore_interaction_z</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">kidiq_with_mom_work-kidscore_mom_work</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">kilpisjarvi_mod-kilpisjarvi</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">loss_curves-losscurve_sislob</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">low_dim_gauss_mix-low_dim_gauss_mix</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">low_dim_gauss_mix_collapse-low_dim_gauss_mix_collapse</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">lsat_data-lsat_model</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">mcycle_gp-accel_gp</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">mcycle_splines-accel_splines</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">mesquite-logmesquite</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">mesquite-logmesquite_logva</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">mesquite-logmesquite_logvas</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">mesquite-logmesquite_logvash</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">mesquite-logmesquite_logvolume</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">mesquite-mesquite</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">mnist-nn_rbm1bJ100</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">mnist_100-nn_rbm1bJ10</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">nes1972-nes</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">nes1976-nes</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">nes1980-nes</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">nes1984-nes</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">nes1988-nes</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">nes1992-nes</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">nes1996-nes</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">nes2000-nes</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">nes_logit_data-nes_logit_model</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">normal_2-normal_mixture</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">normal_5-normal_mixture_k</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">one_comp_mm_elim_abs-one_comp_mm_elim_abs</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">ovarian-logistic_regression_rhs</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">pilots-pilots</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">prideprejudice_chapter-ldaK5</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">prideprejudice_paragraph-ldaK5</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">prostate-logistic_regression_rhs</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">radon_all-radon_county_intercept</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">radon_all-radon_hierarchical_intercept_centered</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">radon_all-radon_hierarchical_intercept_noncentered</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">radon_all-radon_partially_pooled_centered</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">radon_all-radon_partially_pooled_noncentered</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">radon_all-radon_pooled</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">radon_all-radon_variable_intercept_centered</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">radon_all-radon_variable_intercept_noncentered</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">radon_all-radon_variable_intercept_slope_centered</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">radon_all-radon_variable_intercept_slope_noncentered</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">radon_all-radon_variable_slope_centered</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">radon_all-radon_variable_slope_noncentered</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">radon_mn-radon_county_intercept</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">radon_mn-radon_hierarchical_intercept_centered</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">radon_mn-radon_hierarchical_intercept_noncentered</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">radon_mn-radon_partially_pooled_centered</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">radon_mn-radon_partially_pooled_noncentered</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">radon_mn-radon_pooled</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">radon_mn-radon_variable_intercept_centered</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">radon_mn-radon_variable_intercept_noncentered</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">radon_mn-radon_variable_intercept_slope_centered</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">radon_mn-radon_variable_intercept_slope_noncentered</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">radon_mn-radon_variable_slope_centered</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">radon_mn-radon_variable_slope_noncentered</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">radon_mod-radon_county</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">rats_data-rats_model</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">rstan_downloads-prophet</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">sat-hier_2pl</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">sblrc-blr</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">sblri-blr</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">science_irt-grsm_latent_reg_irt</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">seeds_data-seeds_centered_model</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">seeds_data-seeds_model</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">seeds_data-seeds_stanified_model</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">sesame_data-sesame_one_pred_a</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">soil_carbon-soil_incubation</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">state_wide_presidential_votes-hierarchical_gp</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">surgical_data-surgical_model</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">synthetic_grid_RBF_kernels-kronecker_gp</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">three_docs1200-ldaK2</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">three_men1-ldaK2</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">three_men2-ldaK2</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">three_men3-ldaK2</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">timssAusTwn_irt-gpcm_latent_reg_irt</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">traffic_accident_nyc-bym2_offset_only</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">uk_drivers-state_space_stochastic_level_stochastic_seasonal</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">wells_data-wells_daae_c_model</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">wells_data-wells_dae_c_model</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">wells_data-wells_dae_inter_model</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">wells_data-wells_dae_model</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">wells_data-wells_dist</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">wells_data-wells_dist100_model</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">wells_data-wells_dist100ars_model</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">wells_data-wells_interaction_c_model</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
    <tr>
      <td style = "text-align: right;">wells_data-wells_interaction_model</td>
      <td style = "text-align: right;">StanLogPotential{...}</td>
    </tr>
  </tbody>
</table>
</div><h3 id="Errored" tabindex="-1">Errored <a class="header-anchor" href="#Errored" aria-label="Permalink to &quot;Errored {#Errored}&quot;">​</a></h3><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">pretty_table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(HTML, errored; backend </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Val</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), show_subheader</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div><table>
  <thead>
    <tr class = "header headerLastRow">
      <th style = "text-align: right;">targetId</th>
      <th style = "text-align: right;">error</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style = "text-align: right;">sir-sir</td>
      <td style = "text-align: right;">ErrorException(&quot;log_density_gradient() failed with exception: Exception: sir_model_namespace::log_prob: y[6][4] is -1.82492e-07, but must be greater than or equal to 0.000000 (in &apos;/home/runner/.pigeons/posteriordb/posterior_database/models/stan/sir.stan&apos;, line 43, column 2 to column 32)\\n&quot;)</td>
    </tr>
  </tbody>
</table>
</div>`,19)]))}const p=n(l,[["render",s]]);export{_ as __pageData,p as default};
