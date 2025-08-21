work_dir = @__DIR__ 

using Pkg 
Pkg.activate(work_dir)

using Documenter 
using DocumenterVitepress
using InferenceTargets 
using Literate

using PrettyTables


function build(for_preview::Bool = false)

    generated = "$work_dir/src/generated"
    if isdir(generated)
        rm(generated; recursive=true)
    end
    mkpath(generated)

    Literate.markdown(
        "$work_dir/README.jl", generated; 
        flavor = Literate.DocumenterFlavor())
    mv("$generated/README.md", "$work_dir/src/index.md")

    registry_pages = generate_registry_pages()

    makedocs_args_for_preview = for_preview ? 
        (; clean = false) :
        (;)

    repo = "github.com/Julia-Tempering/InferenceTargets" 

    makedocs(;
        modules = [InferenceTargets], 
        sitename = "InferenceTargets.jl",
        warnonly = true,
        format = for_preview ? 
            DocumenterVitepress.MarkdownVitepress(;
                repo,
                md_output_path = ".",
                build_vitepress = false, ) : 
            DocumenterVitepress.MarkdownVitepress(;
                repo
            )
        ,
        pages=[
            "Overview" => "index.md",
            "Reference" => "reference.md",
            "Registry" => collect(registry_pages)
        ],
        makedocs_args_for_preview...
    )

    if !for_preview 
        DocumenterVitepress.deploydocs(;
            repo,
            devbranch = "main",
            push_preview = true
        )
    end

    # since it is generated, try to avoid leaving it around, someone could edit it and then lose their changes
    rm("$work_dir/src/index.md")

end

function clean_gensyms(str)
    replace(str, r"var\"##\d+\"\." => "")
end


function generate_registry_pages()
    result = Dict{String, String}() 
    for (package_symbol, specs) in pairs(InferenceTargets.registry)
        page_contents = generate_registry_page(package_symbol, specs) 
        write("$work_dir/src/generated/$package_symbol.md", page_contents)
        result[string(package_symbol)] = "generated/$package_symbol.md"
    end
    return result
end

function generate_registry_page(package::Symbol, specs)  
    return """
    # `$package` － Targets collection

    ```@setup $package
    # To debug CI progress
    @info "Processing documentation for $package"
    ```

    ## Setup instructions

    To setup `$package`:

    ```@example $package
    using InferenceTargets, Pkg 

    package_spec = InferenceTargets.registry[:$package]
    Pkg.add(package_spec)
    using $package 
    nothing #hide
    ```

    ## Repository information 

    ```@example $package
    package_spec
    ```


    ## Usage

    To access the list of `targetId`s available in `$package`:
    
    ```@example $package
    ids = find_targetIds($package) 
    length(ids)
    ```

    To load one target:

    ```@example $package
    some_id = ids[1]
    load_target($package, some_id)
    ```

    ## Summary
    
    ```@example $package 
    using Markdown, PrettyTables 
    success, errored = InferenceTargets.summary_table($package)
    nothing #hide
    ```

    ### Successfully loaded targets

    ```@example $package 
    length(success)
    ```

    ```@example $package 
    pretty_table(HTML, success; backend = Val(:html), show_subheader=false)
    ```

    ### Errored targets

    ```@example $package 
    length(errored)
    ```

    ```@example $package 
    pretty_table(HTML, errored; backend = Val(:html), show_subheader=false)
    ```
    
    """
end



