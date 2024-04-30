import { aa as __astro_tag_component__, ab as Fragment, a4 as createVNode } from './astro_Bindw8GW.mjs';
import { $ as $$Image } from './pages/generic_BXK1J4rg.mjs';

const MDXLayout = async function ({
  children
}) {
  const Layout = (await import('./SingleBlogPost_BYIwM2U5.mjs')).default;
  const {
    layout,
    ...content
  } = frontmatter;
  content.file = file;
  content.url = url;
  return createVNode(Layout, {
    file,
    url,
    content,
    frontmatter: content,
    headings: getHeadings(),
    "server:root": true,
    children
  });
};
const frontmatter = {
  "layout": "$layouts/SingleBlogPost.astro",
  "title": "Astro.glob versus getCollection",
  "description": "Astro.glob provides two ways to collect document content. Pick one, don't mix 'n match.",
  "tags": ["astro"],
  "date_added": "2024-04-19T13:05:04.000Z",
  "date_updated": "2024-04-19T13:05:06.000Z",
  "date_published": "2024-04-19T14:41:03.000Z",
  "pinned": false
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "astroglob",
    "text": "Astro.glob"
  }, {
    "depth": 2,
    "slug": "getcollection",
    "text": "getCollection"
  }, {
    "depth": 2,
    "slug": "",
    "text": ""
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Astro provides two ways to collect document content:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.code, {
          children: "Astro.glob"
        })
      }), "\n", createVNode(_components.li, {
        children: "getCollection from Astro:content"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Confoundingly, each represents content data differently."
    }), "\n", createVNode(_components.h2, {
      id: "astroglob",
      children: "Astro.glob"
    }), "\n", createVNode(_components.p, {
      children: ["The code below ", createVNode(_components.code, {
        children: "Astro.glob"
      }), " fetches the ", createVNode(_components.code, {
        children: "posts"
      }), " content collection. The argument passed to ", createVNode(_components.code, {
        children: "Astro.glob"
      }), " must a be string literal."]
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
            children: 'const posts = await Astro.glob("../content/posts/*.mdx");'
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["The code above fetches ", createVNode(_components.code, {
        children: ".mdx"
      }), " files, but you could get both Markdown and mdx files with the ", createVNode(_components.code, {
        children: "*.md?"
      }), " file selector."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.code, {
        children: "Astro.glob"
      }), " returns this object as one of the elements of the content data:"]
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
          children: createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "{"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "  frontmatter"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-punctuation)"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: " [Getter]"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-punctuation)"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "  getHeadings"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-punctuation)"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: " [Getter]"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-punctuation)"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "  __usesAstroImage"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-punctuation)"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: " [Getter]"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-punctuation)"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "  url"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-punctuation)"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: " [Getter]"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-punctuation)"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "  file"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-punctuation)"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: " [Getter]"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-punctuation)"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "  Content"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-punctuation)"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: " [Getter]"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-punctuation)"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: "  default"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: ": [Function: Content] {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "    moduleId"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-punctuation)"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string-expression)"
            },
            children: " 'C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/_template.mdx'"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-punctuation)"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "    ["
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-function)"
            },
            children: "Symbol"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "(mdx"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "component)]: "
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-constant)"
            },
            children: "true"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-punctuation)"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "    ["
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-function)"
            },
            children: "Symbol"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-constant)"
            },
            children: "astro"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: ".needsHeadRendering)]: "
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-constant)"
            },
            children: "false"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "  }"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-punctuation)"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "  ["
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-function)"
            },
            children: "Symbol"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-constant)"
            },
            children: "Symbol"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: ".toStringTag)]: "
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string-expression)"
            },
            children: "'Module'"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "getcollection",
      children: "getCollection"
    }), "\n", createVNode(_components.p, {
      children: ["The code below fetches a content collection with ", createVNode(_components.code, {
        children: "getCollection."
      }), " It\u2019s a little more flexible than ", createVNode(_components.code, {
        children: "Astro.glob"
      }), " because\r\nit isn\u2019t location-specific, it fetches the content collection requested."]
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
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: " { getCollection } "
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string-expression)"
            },
            children: ' "astro:content"'
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
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
            children: " posts"
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
            children: '"posts"'
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.code, {
        children: "getCollection"
      }), " returns this as one of the elements of the content data:"]
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
          children: createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "{"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "  id"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-punctuation)"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string-expression)"
            },
            children: " 'astro-notes.mdx'"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-punctuation)"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "  slug"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-punctuation)"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string-expression)"
            },
            children: " 'astro-notes'"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-punctuation)"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "  body"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-punctuation)"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string-expression)"
            },
            children: " '[body]'"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-punctuation)"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "  collection"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-punctuation)"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string-expression)"
            },
            children: " 'posts'"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-punctuation)"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "  data"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-punctuation)"
            },
            children: ":"
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
              color: "var(--astro-code-color-text)"
            },
            children: "    title"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-punctuation)"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string-expression)"
            },
            children: " 'Astro notes'"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-punctuation)"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "    description"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-punctuation)"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string-expression)"
            },
            children: " 'Astro notes'"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-punctuation)"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "    tags"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-punctuation)"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: " [ "
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string-expression)"
            },
            children: "'astro'"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: " ]"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-punctuation)"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "    date_published"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-punctuation)"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-constant)"
            },
            children: " 2023"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-constant)"
            },
            children: "04"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "16T00"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-punctuation)"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-constant)"
            },
            children: "00"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-constant)"
            },
            children: "00"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: ".000"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-constant)"
            },
            children: "Z"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-punctuation)"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "    date_added"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-punctuation)"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-constant)"
            },
            children: " 2023"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-constant)"
            },
            children: "04"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "16T00"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-punctuation)"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-constant)"
            },
            children: "00"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-constant)"
            },
            children: "00"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: ".000"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-constant)"
            },
            children: "Z"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-punctuation)"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "    date_updated"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-punctuation)"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-constant)"
            },
            children: " 2023"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-constant)"
            },
            children: "04"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "16T00"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-punctuation)"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-constant)"
            },
            children: "00"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-constant)"
            },
            children: "00"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: ".000"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-constant)"
            },
            children: "Z"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-punctuation)"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "    draft"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-punctuation)"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-constant)"
            },
            children: " false"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "  }"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-punctuation)"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "  render"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-punctuation)"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: " [AsyncFunction: render]"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: ""
    }), "\n", createVNode(_components.p, {
      children: ["Because these two methods return distinct object structures, helpers like content filters and queries must be object-specific.\r\nBoth are wrappers around Vite\u2019s ", createVNode(_components.code, {
        children: "glob"
      }), " function so their performance is similar."]
    }), "\n", createVNode(_components.p, {
      children: ["Although ", createVNode(_components.code, {
        children: "getCollection"
      }), " requires an import, I use it exclusively to fetch content collections. The helper function makes it easy\r\nto get all the data needed from the a content collection member to list it."]
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
            children: "export"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: " function"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-function)"
            },
            children: " getContentData"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "(obj) {"
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
              color: "var(--astro-code-color-text)"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "    title"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-constant)"
            },
            children: " obj"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-constant)"
            },
            children: "data"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: ".title"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-punctuation)"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "    description"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-constant)"
            },
            children: " obj"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-constant)"
            },
            children: "data"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: ".description"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-punctuation)"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "    date_published"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-constant)"
            },
            children: " obj"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-constant)"
            },
            children: "data"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: ".date_published "
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: "||"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string-expression)"
            },
            children: ' "N/A"'
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-punctuation)"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "    slug"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string-expression)"
            },
            children: " `/"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: "${"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-constant)"
            },
            children: "obj"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: ".collection"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: "}"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string-expression)"
            },
            children: "/"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: "${"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-constant)"
            },
            children: "obj"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: ".slug"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: "}"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string-expression)"
            },
            children: "`"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-punctuation)"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "  };"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["My convention is that if ", createVNode(_components.code, {
        children: "data_published"
      }), " is ", createVNode(_components.code, {
        children: "null"
      }), ", then\r\nthe document is a draft otherwise it\u2019s been published. If it\r\nis a draft document ", createVNode(_components.code, {
        children: "getContentData"
      }), " returns \u201CN/A.\u201D"]
    }), "\n", createVNode(_components.p, {
      children: ["The example below shows an Astro component that emits the HTML needed to the content collection member in a list.\r\nIt receives a single post as a post as a property and then uses ", createVNode(_components.code, {
        children: "getContentData"
      }), " to get the values needed to list the document."]
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
          children: createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: "---"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: " { getContentData } "
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string-expression)"
            },
            children: ' "$scripts/utils.js"'
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: " { "
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-constant)"
            },
            children: "post"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: " } "
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-constant)"
            },
            children: " Astro"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: ".props;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: " { "
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-constant)"
            },
            children: "title"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-punctuation)"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-constant)"
            },
            children: " description"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-punctuation)"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-constant)"
            },
            children: " date_published"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-punctuation)"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-constant)"
            },
            children: " slug"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: " } "
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-function)"
            },
            children: " getContentData"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "(post);"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: "---"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string-expression)"
            },
            children: "div"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-function)"
            },
            children: " class"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string-expression)"
            },
            children: '"post-detail"'
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "  <"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string-expression)"
            },
            children: "a"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-function)"
            },
            children: " href"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string-expression)"
            },
            children: "`"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: "${"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "slug"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: "}"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string-expression)"
            },
            children: "`"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "}>"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "    {title}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "    <"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string-expression)"
            },
            children: "div"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-function)"
            },
            children: " class"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string-expression)"
            },
            children: '"post-description"'
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "      {date_published "
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: "=="
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string-expression)"
            },
            children: ' "N/A"'
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: " &&"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: " <"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string-expression)"
            },
            children: "span"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-function)"
            },
            children: " class"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string-expression)"
            },
            children: '"draft-post-tag"'
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: ">Draft</"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string-expression)"
            },
            children: "span"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: ">}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "      {date_published "
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: "!="
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string-expression)"
            },
            children: ' "N/A"'
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: " &&"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string-expression)"
            },
            children: " `"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: "${"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-function)"
            },
            children: "formatDate"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "(date_published)"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: "}"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string-expression)"
            },
            children: "`"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "      {description}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "    </"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string-expression)"
            },
            children: "div"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "  </"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string-expression)"
            },
            children: "a"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "</"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-string-expression)"
            },
            children: "div"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
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
__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "src/content/posts/astro-data-object.mdx";
const file = "C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/astro-data-object.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/astro-data-object.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
