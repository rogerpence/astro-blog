import { ab as Fragment, ac as __astro_tag_component__, a5 as createVNode } from './astro_BkCAkxv4.mjs';
import { $ as $$Image } from './pages/generic_DBSQglNL.mjs';

const MDXLayout = async function ({children}) {
  const Layout = (await import('./SingleBlogPost_BiFYxRlC.mjs')).default;
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
  "title": "Demo page for css",
  "description": "Astro notes",
  "tags": ["astro", "powershell", "cs", "css"],
  "date_published": "2023-04-16T00:00:00.000Z",
  "date_added": "2023-04-16T00:00:00.000Z",
  "date_updated": "2023-04-16T00:00:00.000Z",
  "pinned": false
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "this-the-h1-heading",
    "text": "this the h1 heading"
  }, {
    "depth": 4,
    "slug": "this-is-the-h4-heading",
    "text": "this is the h4 heading"
  }, {
    "depth": 5,
    "slug": "this-is-the-h5-heading",
    "text": "this is the h5 heading"
  }, {
    "depth": 6,
    "slug": "this-is-the-h6-heading",
    "text": "this is the h6 heading"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "This is the first line of text in the demo page used to tweak CSS for markdown documents."
    }), "\n", createVNode(_components.h1, {
      id: "this-the-h1-heading",
      children: "this the h1 heading"
    }), "\n", createVNode(_components.h4, {
      id: "this-is-the-h4-heading",
      children: "this is the h4 heading"
    }), "\n", createVNode(_components.h5, {
      id: "this-is-the-h5-heading",
      children: "this is the h5 heading"
    }), "\n", createVNode(_components.h6, {
      id: "this-is-the-h6-heading",
      children: "this is the h6 heading"
    }), "\n", createVNode(_components.p, {
      children: ["This is a paragraph ", createVNode("a", {
        href: "https://asna.com",
        children: "with an anchor tag"
      }), ". Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. This is a paragraph ", createVNode("a", {
        href: "https://asna.com",
        children: "with an anchor tag"
      }), ". Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "number one bullet"
      }), "\n", createVNode(_components.li, {
        children: "number two bullet"
      }), "\n", createVNode(_components.li, {
        children: "number three bullet"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "This is a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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
      "data-language": "js",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-constant)"
            },
            children: " findBlogEntries"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: " await"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-function)"
            },
            children: " getCollection"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string-expression)"
            },
            children: "\"blog\""
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-punctuation)"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: " ({ data }) "
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: "  return"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-constant)"
            },
            children: " data"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: ".title "
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: "=="
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string-expression)"
            },
            children: " \"Toast notifcations for .NET 6+ Windows apps\""
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "});"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "This is a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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

const url = "src/content/posts/demo.mdx";
const file = "C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/demo.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/demo.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
