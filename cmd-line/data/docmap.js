export const docmap = [
    {
        "folder": "posts",
        "docs": [
            {
                "url": "/posts/astro-data-object",
                "content": "---\n\nAstro provides two ways to collect document content:\n\n1. `Astro.glob`\n2. getCollection from Astro:content\n\nConfoundingly, each represents content data differently.\n\n## Astro.glob\n\nThe code below `Astro.glob` fetches the `posts` content collection. The argument passed to `Astro.glob` must a be string literal.\n\n```\nconst posts = await Astro.glob(\"../content/posts/*.mdx\");\n```\n\nThe code above fetches `.mdx` files, but you could get both Markdown and mdx files with the `*.md?` file selector.\n\n`Astro.glob` returns this object as one of the elements of the content data:\n\n```js\n{\n  frontmatter: [Getter],\n  getHeadings: [Getter],\n  __usesAstroImage: [Getter],\n  url: [Getter],\n  file: [Getter],\n  Content: [Getter],\n  default: [Function: Content] {\n    moduleId: 'C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/_template.mdx',\n    [Symbol(mdx-component)]: true,\n    [Symbol(astro.needsHeadRendering)]: false\n  },\n  [Symbol(Symbol.toStringTag)]: 'Module'\n}\n```\n\n## getCollection\n\nThe code below fetches a content collection with `getCollection.` It's a little more flexible than `Astro.glob` because\nit isn't location-specific, it fetches the content collection requested.\n\n```js\nimport { getCollection } from \"astro:content\";\nconst posts = await getCollection(\"posts\");\n```\n\n`getCollection` returns this as one of the elements of the content data:\n\n```js\n{\n  id: 'astro-notes.mdx',\n  slug: 'astro-notes',\n  body: '[body]',\n  collection: 'posts',\n  data: {\n    title: 'Astro notes',\n    description: 'Astro notes',\n    tags: [ 'astro' ],\n    date_published: 2023-04-16T00:00:00.000Z,\n    date_added: 2023-04-16T00:00:00.000Z,\n    date_updated: 2023-04-16T00:00:00.000Z,\n    draft: false\n  },\n  render: [AsyncFunction: render]\n}\n```\n\n##\n\nBecause these two methods return distinct object structures, helpers like content filters and queries must be object-specific.\nBoth are wrappers around Vite's `glob` function so their performance is similar.\n\nAlthough `getCollection` requires an import, I use it exclusively to fetch content collections. The helper function makes it easy\nto get all the data needed from the a content collection member to list it.\n\n```js\nexport function getContentData(obj) {\n  return {\n    title: obj.data.title,\n    description: obj.data.description,\n    date_published: obj.data.date_published || \"N/A\",\n    slug: `/${obj.collection}/${obj.slug}`,\n  };\n}\n```\n\nMy convention is that if `data_published` is `null`, then\nthe document is a draft otherwise it's been published. If it\nis a draft document `getContentData` returns \"N/A.\"\n\nThe example below shows an Astro component that emits the HTML needed to the content collection member in a list.\nIt receives a single post as a post as a property and then uses `getContentData` to get the values needed to list the document.\n\n```js\n---\nimport { getContentData } from \"$scripts/utils.js\";\n\nconst { post } = Astro.props;\nconst { title, description, date_published, slug } = getContentData(post);\n---\n\n<div class=\"post-detail\">\n  <a href={`${slug}`}>\n    {title}\n    <div class=\"post-description\">\n      {date_published == \"N/A\" && <span class=\"draft-post-tag\">Draft</span>}\n      {date_published != \"N/A\" && `${formatDate(date_published)}`}\n      {description}\n    </div>\n  </a>\n</div>\n```\n",
                "meta": {
                    "title": "Astro.glob versus getCollection",
                    "description": "Astro.glob provides two ways to collect document content. Pick one, don't mix 'n match.",
                    "tags": "astro"
                },
                "sub_results": [
                    {
                        "title": "Astro.glob provides two ways to collect document content. Pick one, don't mix 'n match.",
                        "url": "astro"
                    }
                ],
                "language": "en"
            },
            {
                "url": "/posts/astro-notes",
                "content": "---\n\n### Search a collection for a given set\n\n```js\nconst findBlogEntries = await getCollection(\"blog\", ({ data }) => {\n  return data.title == \"Toast notifications for .NET 6+ Windows apps\";\n});\n```\n\n### Get last four more recent posts\n\n```js\nconst top4 = posts\n  .sort((a, b) => a.data.dateAdded.valueOf() - b.data.dateAdded.valueOf())\n  //.slice(0,4)\n  .map(function (item) {\n    return {\n      title: item.data.title,\n      date: item.data.dateAdded,\n      tags: item.data.tags,\n      abstract: item.data.abstract,\n    };\n  });\n```\n\n### Get posts with glob\n\n```\n  const allPosts = await Astro.glob('../../posts/*.md');\n```\n\n### dynamic urls\n\nFirst page is blah the /1 is assumed\n\n```\n[...page].astro\n```\n\nFirst page is blah/1 the /1 needs to be explicit\n\n```\n[page].astro\n```\n\n### `c#` tag causes error on `npm run build`\n\nShould `#` in tags (or anywhere else, really) be converted to the entity for `#` which is `&#35;`\n\n### Embedding an Astro property into an HTML value attribute\n\nUse a JavaScript template literal as shown below.\n\n```html\nhref={`tags/${tag.name}`}\n```\n\nIf `tag.name` is `astro`, the result is:\n\n```html\nhref=\"tags/astro\"\n```\n\nAstro implicitly adds the double quotes around the template literal.\n",
                "meta": {
                    "title": "Astro notes",
                    "description": "Astro notes",
                    "tags": "astro"
                },
                "sub_results": [
                    {
                        "title": "Astro notes",
                        "url": "astro"
                    }
                ],
                "language": "en"
            },
            {
                "url": "/posts/better-anchor-title",
                "content": "---\n\nThis is some text\n\nasdfasdfasdf\n\n```css\na {\n  position: relative;\n  display: inline-block;\n  margin-top: 1rem;\n}\n```\n\nOther words here\n\n```css\na[data-title]:hover::after {\n  content: attr(data-title);\n  position: absolute;\n  background-color: black;\n  color: white;\n  top: -1.7rem;\n  left: -2rem;\n  padding: 0.1rem 0.4rem;\n  border-radius: 5px;\n}\n```\n",
                "meta": {
                    "title": "A better anchor title",
                    "description": "Display the title attribute of an anchor tag when the anchor is hovered.",
                    "tags": "html, css"
                },
                "sub_results": [
                    {
                        "title": "Display the title attribute of an anchor tag when the anchor is hovered.",
                        "url": "html, css"
                    }
                ],
                "language": "en"
            },
            {
                "url": "/posts/copy-code",
                "content": "---\n\nThis JavaScript was intended specifically for use with ASTRO, but with minimal effort the code could probably be modified to work with any Markdown-generated HTML.\n\n### Copy Asto-displayed fenced code to the clipboard\n\nThe JavaScript below adds a link in the code block to copy it to the clipboard, as shown below:\n\n![collateral/copy-astro-code-to-clipboard.png](https://rogerpence.dev/collateral/copy-astro-code-to-clipboard.png)\n\nAdd the JavaScript below to your Astro project's client-side JavaScript.\n\n```js\nconst copyToClipboard = (str) => {\n  if (navigator && navigator.clipboard && navigator.clipboard.writeText)\n    return navigator.clipboard.writeText(str);\n  return Promise.reject(\"The Clipboard API is not available.\");\n};\n\nconst preTags = document.querySelectorAll(\"pre\");\nlet counter = 1;\npreTags.forEach((tag) => {\n  const codeId = `id-${counter++}`;\n  tag.setAttribute(\"data-code-id\", codeId);\n  const insertCodeButton = `\n    <small class=\"copy-code-label\">    \n        <a data-code-id=\"${codeId}\"\n           title=\"Ctrl/Click to copy with line numbers\" \n           class=\"copy-code-button\" href=#>\n           <i class=\"copy-icon fa-light fa-copy\"></i> <span class=\"copy-text\">copy</span>\n        </a>\n    </small>`;\n  tag.insertAdjacentHTML(\"beforebegin\", insertCodeButton);\n});\n\nconst copyButtons = document.querySelectorAll(\".copy-code-button\");\ncopyButtons.forEach((button) => {\n  button.addEventListener(\"click\", (e) => {\n    e.preventDefault();\n\n    const codeId = e.currentTarget.getAttribute(\"data-code-id\");\n    const preTag = document.querySelector(`pre[data-code-id=\"${codeId}\"]`);\n    const codeTag = preTag.firstChild;\n\n    const faIconEl = button.querySelector(\".copy-icon\");\n    const textEl = e.currentTarget.querySelector('span[class=\"copy-text\"]');\n\n    textEl.innerText = \"copied\";\n    faIconEl.classList.remove(\"fa-light\", \"fa-copy\");\n    faIconEl.classList.add(\"fa-solid\", \"fa-thumbs-up\");\n    faIconEl.classList.add(\"fade-in\");\n\n    let source;\n    if (preTag.hasAttribute(\"data-source\"))\n      source = preTag.getAttribute(\"data-source\");\n    else source = codeTag.innerText;\n\n    copyToClipboard(source);\n\n    setTimeout(() => {\n      textEl.innerText = \"copy\";\n      faIconEl.classList.remove(\"fa-solid\", \"fa-thumbs-up\");\n      faIconEl.classList.add(\"fa-light\", \"fa-copy\");\n    }, 1000);\n  });\n});\n```\n\nAdd these three CSS selectors to your Astro project's global CSS:\n\n```css\n.copy-code-label {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 5px;\n  position: relative;\n}\n.copy-code-label a {\n  color: gray;\n  position: absolute;\n  top: 16px;\n  right: 10px;\n  text-decoration: none;\n}\n\n.copy-code-label a:after {\n  content: \"\";\n  height: 1px;\n  background: gray;\n  display: block;\n}\n```\n\n> This JavaScript uses FontAwesome icons.\n\n#### Show line numbers in Asto-displayed fenced code\n\nUse the JavaScript to add line numbers to fenced code blocks in Astro. To assign line numbers to a fenced code block, add a `<div class=\"number-code below\"></div> just above the markdown fence, leaving one blank line between the `div` tag and the fence (as shown below).\n\n```markdown\n<div class=\"number-code below\"></div\n\n\n    ... code to display here\n\n```\n\nAdd the Javascript `addLineNumbers` function to the Astro app's client-side JavaScript.\n\n```js\nconst addLineNumbers = () => {\n  const snippetInstances = document.querySelectorAll(\n    \"div.number-code-below + small +  pre > code\"\n  );\n\n  snippetInstances.forEach((snippetInstance) => {\n    //console.log(snippetInstance.parentElement.innerText)\n    snippetInstance.parentElement.setAttribute(\n      \"data-source\",\n      snippetInstance.parentElement.innerText\n    );\n\n    const lines = snippetInstance.querySelectorAll(\"span.line\");\n\n    let leadingSpacesCount = 2;\n    if (lines.length > 99) leadingSpacesCount = 3;\n    if (lines.length < 10) leadingSpacesCount = 1;\n\n    let counter = 1;\n    lines.forEach((line) => {\n      const lineNo = counter.toString().padStart(leadingSpacesCount, \" \");\n      line.insertAdjacentHTML(\n        \"afterbegin\",\n        `<span style=\"color: lightskyblue; border-right: 1px lightskyblue solid;padding-right: .2rem;margin-right: .5rem; \">${lineNo}</span>`\n      );\n      counter++;\n    });\n  });\n};\n```\n\nCall the addLineNumbers() function after the page loads.\n\n```js\naddLineNumbers();\n```\n",
                "meta": {
                    "title": "Copy code in Astro to clipboard",
                    "description": "How to copy code in Astro to clipboard",
                    "tags": "astro, javascript"
                },
                "sub_results": [
                    {
                        "title": "How to copy code in Astro to clipboard",
                        "url": "astro, javascript"
                    }
                ],
                "language": "en"
            },
            {
                "url": "/posts/css-relative-colors",
                "content": "---\n\n[Adam Argyle article](https://developer.chrome.com/blog/css-relative-color-syntax)\n\nLighten a color by 25%\n\n```css\n.lighten-by-25 {\n  background: oklch(from blue calc(l * 1.25) c h);\n}\n```\n\nDarken a color by 25%\n\n```css\n.darken-by-25 {\n  background: oklch(from blue calc(l * 0.75) c h);\n}\n```\n",
                "meta": {
                    "title": "CSS relative colors",
                    "description": "Using OKLCH to create relative colors",
                    "tags": "css"
                },
                "sub_results": [
                    {
                        "title": "Using OKLCH to create relative colors",
                        "url": "css"
                    }
                ],
                "language": "en"
            },
            {
                "url": "/posts/demo",
                "content": "---\n\nThis is an demo page used to tweak CSS for markdown documents. \n\n## H2 heading\n\n### H3 heading\n\n#### H4 heading\n\nThis is a paragraph <a href=\"https://asna.com\">with an anchor tag</a>. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. This is a paragraph <a href=\"https://asna.com\">with an anchor tag</a>. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\n- number one bullet\n- number two bullet\n- number three bullet\n\nThis is a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\n```js\nconst findBlogEntries = await getCollection(\"blog\", ({ data }) => {\n  return data.title == \"Toast notifcations for .NET 6+ Windows apps\";\n});\n```\n\nThis is a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n",
                "meta": {
                    "title": "Demo page for css",
                    "description": "Astro notes",
                    "tags": "astro, powershell, cs, css"
                },
                "sub_results": [
                    {
                        "title": "Astro notes",
                        "url": "astro, powershell, cs, css"
                    }
                ],
                "language": "en"
            },
            {
                "url": "/posts/jinja-custom-filter",
                "content": "---\n\nThe `exists_with_value` filer returns true if the token provided exists and is not empty.\n\n```python\ndef exists_with_value(token):\n    return token is not None and len(token) > 0\n```\n\nThe last line below adds the function to Jinja\n\n```python\ndef load_template(template_file):\n    full_template_path = os.path.join(DATA_PATH, TEMPLATES_PATH, template_file)\n    if not os.path.exists(full_template_path):\n        print_error(f'Template file not found: {template_file}')\n        sys.exit(1)\n\n    template_filename = os.path.basename(full_template_path)\n    template_path = os.path.dirname(full_template_path)\n    template_loader = jinja2.FileSystemLoader(searchpath=template_path, encoding=ENCODING)\n    template_env = jinja2.Environment(loader=template_loader, lstrip_blocks=True, trim_blocks=True)\n\n    template_env.filters['exists_with_value'] = exists_with_value\n```\n\nUse it like this:\n",
                "meta": {
                    "title": "Using custom filters with Jinja",
                    "description": "Using custom filters with Jinja",
                    "tags": "python"
                },
                "sub_results": [
                    {
                        "title": "Using custom filters with Jinja",
                        "url": "python"
                    }
                ],
                "language": "en"
            },
            {
                "url": "/posts/jinja-omit-last-comma",
                "content": "---\n\nJinja is a great Python template engine.This article explains how to omit the last comma in a series with Jinja.\n\nThe desired result is shown below--this is an argument list for an SQL stored procedure. Note that the Id column needs a zero default value and there cannot be a comma after the last column.\n\n```\n@Id int = 0,\n@Name nvarchar(100),\n@PrefixWithThe bit,\n@Added datetime,\n@Updated datetime\n```\n\nIn the Libretto SQL Server Json schema there is a columnSqlDeclarations column meta token that produces this:\n\n```\n@Id int,\n@Name nvarchar(100),\n@PrefixWithThe bit,\n@Added datetime,\n@Updated datetime,\n```\n\nThat's close, but no cigar. It doesn't assign the zero to the Id column and the trailing comma breaks things.\n\nAssigning a zero to the Id is a special case, so (in my case) its worth a little manual work force the zero assignment (note also that the test for the id column is case insensitive--just in case):\n\n```\n{% for col in columns %}\n{% if col.ColumnName.lower() == 'id' %}\n@{{col.ColumnName}} {{col.DDLType}} = 0\n{% else %}\n@{{col.ColumnName}} {{col.DDLType}}\n{% endif %}\n{% endfor %}\n```\n\nThat's close, but the trailing comma remains.\n\n```\nId int = 0,\n@Name nvarchar(100),\n@PrefixWithThe bit,\n@Added datetime,\n@Updated datetime,\n```\n\nTo get the desired result, the template needs omit the trailing comma on the last element in the series. This template:\n\n```\n{% for col in columns %}\n{% if col.ColumnName.lower() == 'id' %}\n@{{col.ColumnName}} {{col.DDLType}} = 0{% if not loop.last %},{% endif %}\n{% else %}\n@{{col.ColumnName}} {{col.DDLType}}{% if not loop.last %},{% endif %}\n{% endif %}\n{% endfor %}\n```\n\nproduces the correct results:\n\n```\n@Id int = 0,\n@Name nvarchar(100),\n@PrefixWithThe bit,\n@Added datetime,\n@Updated datetime\n```\n\nThe Jinja templating engine has a built-in variable that tracks a loop index. The loop.last value conditions when the template emits the comma.\n\n```\n{% if not loop.last %},{% endif %}\n\n```\n\nThis article is too long!\n\n```\n{% for column in columns -%}\n    {% if column.PrimaryKey == 'True' %}\n        {% if not loop.first %}, {% endif %}{{column.ColumnName}} = keyValue{{loop.index}}\n    {% endif %}\n{%- endfor %}\n```\n\nSee the [Jinja loop documentation](https://jinja.palletsprojects.com/en/3.0.x/templates/#list-of-control-structures) for more info.\n\nWhile it's not directly a part of this issue, knowing how Jinja [controls white space](https://jinja.palletsprojects.com/en/3.0.x/templates/#whitespace-control) is helpful.\n\nAlso, don't miss this Jinja tricks page in the [Jinja docs](https://jinja.palletsprojects.com/en/3.1.x/).\n",
                "meta": {
                    "title": "Omitting the last comma in a series in a Jinja template",
                    "description": "Omitting the last comma in a series in a Jinja template",
                    "tags": "python"
                },
                "sub_results": [
                    {
                        "title": "Omitting the last comma in a series in a Jinja template",
                        "url": "python"
                    }
                ],
                "language": "en"
            },
            {
                "url": "/posts/jinja-white-space",
                "content": "---\n\nThis provides a list without blanks lines between each element, but with no trailing commas:\n\n```sql\n{% for field in fields +%}\n[{{field.name}}] {{field.sqlservertype}} {{field.sqlservernull}}\n{% endfor %}\n```\n\nAdding `{% if not loop.last %},{% endif %}` adds a trailing comma to all but the last element but puts everything on line:\n\n```sql\n{% for field in fields %}\n[{{field.name}}] {{field.sqlservertype}} {{field.sqlservernull}}{% if not loop.last %},{% endif %}\n{% endfor %}\n```\n\nWierd, huh?\n\n**The code that works:**\n\nAdding a plus sign in the `for` clause `{% for field in fields +%}` disables Jinja3’s “trim_blocks” and renders the list without blank lines where each line but the last has a trailing comma:\n\n```sql\n{% for field in fields +%}\n[{{field.name}}] {{field.sqlservertype}} {{field.sqlservernull}}{% if not loop.last %},{% endif %}\n{% endfor %}\n```\n\nRead about “trim_blocks” here: https://jinja.palletsprojects.com/en/3.0.x/templates/#whitespace-control\n",
                "meta": {
                    "title": "Managing white space with Jinja3",
                    "description": "How to manage whitespace with the Jinja3 templating engine",
                    "tags": "python"
                },
                "sub_results": [
                    {
                        "title": "How to manage whitespace with the Jinja3 templating engine",
                        "url": "python"
                    }
                ],
                "language": "en"
            },
            {
                "url": "/posts/live-server",
                "content": "---\n\nI've had a lot of trouble with the VS Code LiveServer plugin lately—it frequently just stops working. So, instead use the NPM live-server module.\n\nInstall live-server globally\n\n```\nnpm install live-server -g\n```\n\nThen run it from with a project folder like\n\n```\nlive-server <folder name>\n```\n",
                "meta": {
                    "title": "Using NPM Live Server",
                    "description": "Using NPM Live Server",
                    "tags": "npm"
                },
                "sub_results": [
                    {
                        "title": "Using NPM Live Server",
                        "url": "npm"
                    }
                ],
                "language": "en"
            },
            {
                "url": "/posts/powershell-snippets",
                "content": "---\n\n#### Get file version\n\nGet the file version:\n\n```\n(get-item LutherBackup.exe).VersionInfo.FileVersion\n```\n\nList all VersionInfo attributes:\n\n```\n(get-item LutherBackup.exe).VersionInfo | format-list\n```\n\n#### Get a list of files\n\n```\nget-childitem -path *.ppt? -Recurse |\n    select fullName |\n    export-csv powerpoints .csv\n```\n",
                "meta": {
                    "title": "PowerShell snippets",
                    "description": "A handful of useful PowerShell shippets and tips",
                    "tags": "powershell"
                },
                "sub_results": [
                    {
                        "title": "A handful of useful PowerShell shippets and tips",
                        "url": "powershell"
                    }
                ],
                "language": "en"
            },
            {
                "url": "/posts/programming-rules",
                "content": "---\n\n<div class=\"spaced-bullet-list\">\n\n- Keep it simple and keep it concise.\n- Keep programming comments to a bare minimum. Most comments simply identify code that should have been refactored into methods with meaningful names.\n- Treat all comments (even your own) as if they'd been written by a serial liar.\n- It's OK to have a function that is only called once. Functions don't just add reuse, they add clarity.\n- At least 75% of the time (and probably more like 90%) when you write a comment you should be writing a function.\n- Select names (variables, classes, methods, etc) with as much care as you would a heart transplant doctor.\n- Keep your programming languages current and use their new features (JavaScript ES6 array methods, for example)\n- If it's not in source control, you're just dabbling.\n- For every new feature/bug fix, first make a branch. Do not touch working code.\n- Don't comment out code--remove it. If you argue that you can't do that because you'll lose that code, you aren't using source control!\n- Don't tolerate dead code. If isn't being used, remove it. See #10.\n- Inconsistency is consistently a sign of a poor program.\n- Know what every line of code, and every element in that line, is doing (in other words, don't blindly cut and paste!)\n- Test your app under less-than-favorable conditions. Browser dev tools have network and CPU throttling tools built-in. Use 'em!\n- If it works and you don't know why, when it breaks you won't know why.\n- Rarely should a method have more lines in it than you have fingers and toes.\n- Global variables are a universal programming evil. Don't spread programming evilness.\n- The cost of decomposition should never be higher than the cost of repetition.\n- You can never be 100% sure it works with tests and test data. But you can be 100% sure it won't work 100% of the time without tests and test data.\n- When a customer tells you that they don't have a staging/test environment, remind 'em that they do. What they don't have is a production environment.\n- Use indention to give your programs a clear and obvious structure.\n- Don't write dense code. Let white space, both horizontal and vertical, help tell the story of your code.\n- A method is doing too much if it needs more than five arguments (and even three is pushing your luck!).\n- Strive for immutable structures and pure functions. (Which is the 21st century of saying keep coupling low and cohesion high).\n- If a method name includes the word \"and\" that method is doing too much (or named very poorly).\n- Don't ever sacrifice clarity for brevity.\n- Correctness, clarity, and simplicity are, in that order, the three most important things.\n- Avoid hard-coded numeric digits and strings in your code! Use constants to give \"magic\" numbers/strings meaning.\n- Don't concatenate long strings--use string interpolation or join array elements (anything but long concatenation!).\n- Leave old code alone unless it produces incorrect results. When it does, fix that issue as best as you can and then get out. Rewriting bad code just to fix a bug has a greater chance of failing than just putting on your hip waders and fixing the bug.\n- If you need post-it notes or cheat-sheets to build and deploy, you're doing it wrong! Make your builds and deployments command-line driven. Better yet, make your deployments event-driven with a CI product.\n- It's not enough for your program to produce correct output, it should also produce a readable, rational log. You can't troubleshoot if you don't know what happened. Build logging into your application.\n- Build metrics into your log output. When you users say, \"It's running slower\" you need a reliable way to know if it is really running slower or if your users are just being users. Record performance benchmarks when you deploy the app so you can refer to them later.\n- It's usually good enough to know there is _a_ way rather than knowing _the_ way. _\"Programming isn't about what you know; it's about what you can figure out.\"_ — Chris Pine\n- Beware external service dependencies. Cloud services break but your service shouldn't break. Design your critical systems with built-in failovers to keep _your_ service up.\n- Don't assume someone else's programming rules will work for you. Read and listen to what a lot of programmers and take the best from each that works for you.\n- Carefully consider the general challenge before you focus on the specific challenge. Solve the general parts of the challenge with components to reuse on the next challenge.\n- A correctly (for now) running program doesn't prove the absence of bugs.\n- It is astounding how quickly new code acquires \"legacy\" status. Document all workflows, assumptions, and goofy stuff (you know the stuff I mean!) so you don't have to start from ground zero every stinkin' time you need to make a change or a fix.\n- Before you refactor _any_ code, put tests into place to ensure you understand the existing code and to test what you replace it with.\n- Question everything. I'm guilty of gratuitously spouting the [SOLID](https://en.wikipedia.org/wiki/SOLID) principles a time or two. But then, along comes David Bryant Copeland with his book [Solid Is Not Solid](https://solid-is-not-solid.com/) and completely clears the SOLID deck. OMG. You need to a) read about the SOLID principles and b) read Dave's book. Agree or disagree, the book is a great lesson in how you should question everything anyone tells you.\n- Code that you quickly slap together and intend to go back later and clean up, _never_ gets cleaned up. Treat your code like you do the restroom in someone else's house. Leave it nicer than you found it.\n- Beware committees of teams making big decisions. Decisions based on technical merit usually de-evolve into decisions based on politics--which is never a good thing. Grady Booch says it this way: \"When trying to form a common architecture among three or more groups, the path to a solution is more often the negotiation of political power.\"\n- Always strive for less code.\n- The command line is the supercharger for modern software development. Embrace it!\n- Don't try to make a single language do everything. Pick languages based on what they do best and try to stay in their lanes. I recently built a C# UI with WPF that puts a good Windows UI over a command-line driven Python app. (And with the upcoming [.NET Maui](https://docs.microsoft.com/en-us/dotnet/maui/what-is-maui), a similar front-end will be cross platform!)\n\n</div>\n",
                "meta": {
                    "title": "By-God-gotta-be-true programming rules",
                    "description": "Using an appsettings.json file with a C# console app",
                    "tags": "cs"
                },
                "sub_results": [
                    {
                        "title": "Using an appsettings.json file with a C# console app",
                        "url": "cs"
                    }
                ],
                "language": "en"
            },
            {
                "url": "/posts/sql-server-file-access-error",
                "content": "---\n\nTo resolve the “access denied” error when trying to restore SQL Server .BAK files:\n\nOpen services, and find the\n\n```\nSQL SERVER(MSSQLSERVER)\n```\n\nand change its “log on as” account from NT Service/MSSQLSERVER to Local System\n",
                "meta": {
                    "title": "How to resolve file access error when restoring SQL Server DB",
                    "description": "How to avoid the \"access-defined\" when attempting to restore a SQL Server DB from a *.bak file.",
                    "tags": "sql-server"
                },
                "sub_results": [
                    {
                        "title": "How to avoid the \"access-defined\" when attempting to restore a SQL Server DB from a *.bak file.",
                        "url": "sql-server"
                    }
                ],
                "language": "en"
            },
            {
                "url": "/posts/sql-snippets",
                "content": "---\n\n### Copy all rows from one table to another\n\n```sql\ninsert into stateNew ([state], [abbrev])\nselect * from States\n```\n\n### Getting identity column from last row added with a stored procedure\n\nStored procedure:\n\n```sql\nCREATE PROCEDURE [dbo].[qInsert]\n    @Id int,\n    @Name nvarchar(100)\nAS\nBEGIN\n    SET NOCOUNT ON\n    INSERT INTO [dbo].[artist]\n    (\n        [Name]\n    )\n    VALUES(\n        @Name\n    );\n    RETURN SCOPE_IDENTITY();\nEND\nGO\n```\n\n```sql\nEXEC @rp = qInsert 0, 'Bobby Fuller Four'\nSELECT @rp as 'identify'\n```\n",
                "meta": {
                    "title": "SQL snippets",
                    "description": "SQL snippets",
                    "tags": "sql"
                },
                "sub_results": [
                    {
                        "title": "SQL snippets",
                        "url": "sql"
                    }
                ],
                "language": "en"
            },
            {
                "url": "/posts/ssr-versus-ssg",
                "content": "---\n\n```js\n---\n// @ts-nocheck\n\nimport PostListing from \"$components/PostListing.astro\";\nimport ContentLayout from \"$layouts/ContentLayout.astro\";\n\nimport { getCollection, getEntryBySlug } from \"astro:content\";\n\nimport { getTagsFromPosts } from \"$scripts/utils\";\n\nexport const getStaticPaths = async () => {\n  const posts = await getCollection(\"posts\");\n  const tags = getTagsFromPosts(posts);\n\n  const tagsPaths = tags.reduce((acc, tag) => {\n    const filteredPosts = posts.filter((post) => {\n      return post.data.tags.includes(tag.tag.trim());\n    });\n\n    acc.push({\n      params: {\n        tag: tag.tag,\n      },\n      props: { posts: filteredPosts },\n    });\n    return acc;\n  }, []);\n\n  return tagsPaths;\n};\n\nconst { tag } = Astro.params;\nconst { posts } = Astro.props;\n---\n\n<ContentLayout title=\"rogerpence.com | Blog\">\n  <div>\n    {posts.map((post) => <PostListing {post} />)}\n  </div>\n</ContentLayout>\n```\n\nIn this example, the value that `getStaticPaths` returns is shown below. It includes\na `params` key with the given tag value and a `props` key that includes the array\nof `posts` tagged with `sql`.\n\n```js\n    {\n        \"params\": {\n            \"tag\": \"sql\"\n        },\n        \"props\": {\n            \"posts\": [\n                {\n                    \"id\": \"sql-snippets.mdx\",\n                    \"slug\": \"sql-snippets\",\n                    \"body\": \"--post body here--\",\n                    \"collection\": \"posts\",\n                    \"data\": {\n                        \"title\": \"SQL snippets\",\n                        \"description\": \"SQL snippets\",\n                        \"tags\": [\n                            \"sql\"\n                        ],\n                        \"date_published\": null,\n                        \"date_added\": \"2024-04-17T11:36:09.000Z\",\n                        \"date_updated\": \"2024-04-17T11:36:13.000Z\",\n                        \"pinned\": false\n                    }\n                },\n                {\n                   ...\n                {\n            ]\n        }\n    }\n```\n\n```js\n---\nexport const prerender = false;\n\nimport PostListing from \"$components/PostListing.astro\";\nimport ContentLayout from \"$layouts/ContentLayout.astro\";\nimport { getCollection, getEntryBySlug } from \"astro:content\";\n\nconst { tag } = Astro.params;\n\nconst posts = await getCollection(\"posts\");\n\nconst filteredPosts = posts.filter((post) => {\n  return post.data.tags.includes(tag.trim());\n});\n---\n\n<ContentLayout title=\"rogerpence.com | Blog\">\n  <div>\n    {filteredPosts.map((post) => <PostListing {post} />)}\n  </div>\n</ContentLayout>\n```\n",
                "meta": {
                    "title": "Comparing SSG versus SSR content collections",
                    "description": "Comparing SSG versus SSR content collections",
                    "tags": "astro"
                },
                "sub_results": [
                    {
                        "title": "Comparing SSG versus SSR content collections",
                        "url": "astro"
                    }
                ],
                "language": "en"
            }
        ]
    }
]