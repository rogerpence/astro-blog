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
  "title": "JavaScript snippets, nuggets, and helpers",
  "description": "A collection of various JavaScript routines, links, and other resources for remembering what lurks in its nooks and crannies.",
  "tags": ["javascript"],
  "date_added": "2024-05-01T00:00:00.000Z",
  "date_updated": "2024-05-01T00:00:00.000Z",
  "date_published": null,
  "draft": "$draft",
  "pinned": false
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "get-iso-date-from-todays-date",
    "text": "Get ISO date from today’s date"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h3: "h3",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h3, {
      id: "get-iso-date-from-todays-date",
      children: "Get ISO date from today’s date"
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
            children: "export function formatDate(date) {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  return new Date(date).toLocaleDateString(\"en-CA\");"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "}"
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

const url = "src/content/posts/javascript-snippets.mdx";
const file = "C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/javascript-snippets.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/javascript-snippets.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
