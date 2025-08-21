import{_ as i,c as t,o as a,aA as e}from"./chunks/framework.D7a-xEaM.js";const o=JSON.parse('{"title":"BlangTargets － Targets collection","description":"","frontmatter":{},"headers":[],"relativePath":"generated/BlangTargets.md","filePath":"generated/BlangTargets.md","lastUpdated":null}'),n={name:"generated/BlangTargets.md"};function l(h,s,r,g,d,p){return a(),t("div",null,[...s[0]||(s[0]=[e(`<h1 id="BlangTargets-－-Targets-collection" tabindex="-1"><code>BlangTargets</code> － Targets collection <a class="header-anchor" href="#BlangTargets-－-Targets-collection" aria-label="Permalink to &quot;\`BlangTargets\` － Targets collection {#BlangTargets-－-Targets-collection}&quot;">​</a></h1><h2 id="Setup-instructions" tabindex="-1">Setup instructions <a class="header-anchor" href="#Setup-instructions" aria-label="Permalink to &quot;Setup instructions {#Setup-instructions}&quot;">​</a></h2><p>To setup <code>BlangTargets</code>:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> InferenceTargets, Pkg</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">package_spec </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> InferenceTargets</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">registry[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:BlangTargets</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Pkg</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(package_spec)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> BlangTargets</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#28a745;--shiki-light-font-weight:bold;--shiki-dark:#34d058;--shiki-dark-font-weight:bold;">   Resolving</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;"> package versions...</span></span>
<span class="line"><span style="--shiki-light:#28a745;--shiki-light-font-weight:bold;--shiki-dark:#34d058;--shiki-dark-font-weight:bold;">  No Changes</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;"> to \`~/work/InferenceTargets/InferenceTargets/docs/Project.toml\`</span></span>
<span class="line"><span style="--shiki-light:#28a745;--shiki-light-font-weight:bold;--shiki-dark:#34d058;--shiki-dark-font-weight:bold;">  No Changes</span><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;"> to \`~/work/InferenceTargets/InferenceTargets/docs/Manifest.toml\`</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">Precompiling project...</span></span>
<span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">   7626.3 ms  ? BlangTargets</span></span></code></pre></div><h2 id="Repository-information" tabindex="-1">Repository information <a class="header-anchor" href="#Repository-information" aria-label="Permalink to &quot;Repository information {#Repository-information}&quot;">​</a></h2><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">package_spec</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;">PackageSpec(</span></span>
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
</div>`,27)])])}const c=i(n,[["render",l]]);export{o as __pageData,c as default};
