import { aa as __astro_tag_component__, ab as Fragment, a4 as createVNode } from './astro_Uq31NOgP.mjs';
import { $ as $$Image } from './pages/generic_BkwH1pdk.mjs';

const MDXLayout = async function ({
  children
}) {
  const Layout = (await import('./SingleBlogPost_CikQ8Gld.mjs')).default;
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
  "title": "Using NPM Live Server",
  "description": "Using NPM Live Server",
  "tags": ["npm"],
  "date_published": "2023-04-16T00:00:00.000Z",
  "date_added": "2023-04-16T00:00:00.000Z",
  "date_updated": "2023-04-16T00:00:00.000Z",
  "pinned": false
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    code: "code",
    p: "p",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "I\u2019ve had a lot of trouble with the VS Code LiveServer plugin lately\u2014it frequently just stops working. So, instead use the NPM live-server module."
    }), "\n", createVNode(_components.p, {
      children: "Install live-server globally"
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
            children: "npm install live-server -g"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Then run it from with a project folder like"
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
            children: "live-server <folder name>"
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
__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "src/content/posts/live-server.mdx";
const file = "C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/live-server.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/live-server.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
