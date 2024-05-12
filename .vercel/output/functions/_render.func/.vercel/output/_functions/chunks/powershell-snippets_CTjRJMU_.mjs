import { ab as Fragment, ac as __astro_tag_component__, a5 as createVNode } from './astro_BkCAkxv4.mjs';
import { $ as $$Image } from './pages/generic_DBSQglNL.mjs';

const MDXLayout = async function ({children}) {
  const Layout = (await import('./SingleBlogPost_CCP6nubw.mjs')).default;
  const {layout, ...content} = frontmatter;
  content.file = file;
  content.url = url;
  return createVNode(Layout, {
    file,
    url,
    content,
    frontmatter: content,
    headings: getHeadings(),
    'server:root': true,
    children
  });
};
const frontmatter = {
  "layout": "$layouts/SingleBlogPost.astro",
  "title": "PowerShell snippets",
  "description": "A handful of useful PowerShell shippets and tips",
  "tags": ["powershell"],
  "date_added": "2024-04-17T11:29:16.000Z",
  "date_updated": "2024-04-17T11:30:40.000Z",
  "date_published": null,
  "pinned": false
};
function getHeadings() {
  return [{
    "depth": 4,
    "slug": "get-file-version",
    "text": "Get file version"
  }, {
    "depth": 4,
    "slug": "get-a-list-of-files",
    "text": "Get a list of files"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h4: "h4",
    p: "p",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h4, {
      id: "get-file-version",
      children: "Get file version"
    }), "\n", createVNode(_components.p, {
      children: "Get the file version:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code css-variables",
      style: {
        backgroundColor: "var(--astro-code-color-background)",
        color: "var(--astro-code-color-text)",
        overflowX: "auto",
        whiteSpace: "pre-wrap",
        wordWrap: "break-word"
      },
      tabindex: "0",
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "(get-item LutherBackup.exe).VersionInfo.FileVersion"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "List all VersionInfo attributes:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code css-variables",
      style: {
        backgroundColor: "var(--astro-code-color-background)",
        color: "var(--astro-code-color-text)",
        overflowX: "auto",
        whiteSpace: "pre-wrap",
        wordWrap: "break-word"
      },
      tabindex: "0",
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "(get-item LutherBackup.exe).VersionInfo | format-list"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        })]
      })
    }), "\n", createVNode(_components.h4, {
      id: "get-a-list-of-files",
      children: "Get a list of files"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code css-variables",
      style: {
        backgroundColor: "var(--astro-code-color-background)",
        color: "var(--astro-code-color-text)",
        overflowX: "auto",
        whiteSpace: "pre-wrap",
        wordWrap: "break-word"
      },
      tabindex: "0",
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "get-childitem -path *.ppt? -Recurse |"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    select fullName |"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    export-csv powerpoints .csv"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        })]
      })
    })]
  });
}
function MDXContent(props = {}) {
  return createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  });
}

const url = "src/content/posts/powershell-snippets.mdx";
const file = "C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/powershell-snippets.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/powershell-snippets.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
