import { aa as __astro_tag_component__, ab as Fragment, a4 as createVNode } from './astro_Uq31NOgP.mjs';
import { $ as $$Image } from './pages/generic_BkwH1pdk.mjs';

const MDXLayout = async function ({
  children
}) {
  const Layout = (await import('./SingleBlogPost_B7HG5FXY.mjs')).default;
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
  "title": "Astro notes",
  "description": "Astro notes",
  "tags": ["astro"],
  "date_added": "2023-04-16T00:00:00.000Z",
  "date_updated": "2023-04-16T00:00:00.000Z",
  "date_published": "2023-04-16T00:00:00.000Z",
  "pinned": false
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "search-a-collection-for-a-given-set",
    "text": "Search a collection for a given set"
  }, {
    "depth": 3,
    "slug": "get-last-four-more-recent-posts",
    "text": "Get last four more recent posts"
  }, {
    "depth": 3,
    "slug": "get-posts-with-glob",
    "text": "Get posts with glob"
  }, {
    "depth": 3,
    "slug": "dynamic-urls",
    "text": "dynamic urls"
  }, {
    "depth": 3,
    "slug": "c-tag-causes-error-on-npm-run-build",
    "text": "c# tag causes error on npm run build"
  }, {
    "depth": 3,
    "slug": "embedding-an-astro-property-into-an-html-value-attribute",
    "text": "Embedding an Astro property into an HTML value attribute"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h3, {
      id: "search-a-collection-for-a-given-set",
      children: "Search a collection for a given set"
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
            children: '"blog"'
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
            children: ' "Toast notifications for .NET 6+ Windows apps"'
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
    }), "\n", createVNode(_components.h3, {
      id: "get-last-four-more-recent-posts",
      children: "Get last four more recent posts"
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
            children: " top4"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: " posts"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-function)"
            },
            children: "  .sort"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "((a"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-punctuation)"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: " b) "
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-constant)"
            },
            children: " a"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-function)"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-constant)"
            },
            children: "data"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-function)"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-constant)"
            },
            children: "dateAdded"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-function)"
            },
            children: ".valueOf"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "() "
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-constant)"
            },
            children: " b"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-function)"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-constant)"
            },
            children: "data"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-function)"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-constant)"
            },
            children: "dateAdded"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-function)"
            },
            children: ".valueOf"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "())"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-comment)"
            },
            children: "  //.slice(0,4)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-function)"
            },
            children: "  .map"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: "function"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: " (item) {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: "    return"
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
            children: "      title"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-constant)"
            },
            children: " item"
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
            children: "      date"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-constant)"
            },
            children: " item"
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
            children: ".dateAdded"
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
            children: "      tags"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-constant)"
            },
            children: " item"
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
            children: ".tags"
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
            children: "      abstract"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-keyword)"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "var(--astro-code-token-constant)"
            },
            children: " item"
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
            children: ".abstract"
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
            children: "    };"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "  });"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "get-posts-with-glob",
      children: "Get posts with glob"
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
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  const allPosts = await Astro.glob('../../posts/*.md');"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "dynamic-urls",
      children: "dynamic urls"
    }), "\n", createVNode(_components.p, {
      children: "First page is blah the /1 is assumed"
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
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "[...page].astro"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "First page is blah/1 the /1 needs to be explicit"
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
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "[page].astro"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "c-tag-causes-error-on-npm-run-build",
      children: [createVNode(_components.code, {
        children: "c#"
      }), " tag causes error on ", createVNode(_components.code, {
        children: "npm run build"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Should ", createVNode(_components.code, {
        children: "#"
      }), " in tags (or anywhere else, really) be converted to the entity for ", createVNode(_components.code, {
        children: "#"
      }), " which is ", createVNode(_components.code, {
        children: "&#35;"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "embedding-an-astro-property-into-an-html-value-attribute",
      children: "Embedding an Astro property into an HTML value attribute"
    }), "\n", createVNode(_components.p, {
      children: "Use a JavaScript template literal as shown below."
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
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: "href={`tags/${tag.name}`}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["If ", createVNode(_components.code, {
        children: "tag.name"
      }), " is ", createVNode(_components.code, {
        children: "astro"
      }), ", the result is:"]
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
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "var(--astro-code-color-text)"
            },
            children: 'href="tags/astro"'
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Astro implicitly adds the double quotes around the template literal."
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
const url = "src/content/posts/astro-notes.mdx";
const file = "C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/astro-notes.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/astro-notes.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
