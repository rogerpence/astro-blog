import { aa as __astro_tag_component__, ab as Fragment, a4 as createVNode } from './astro_Uq31NOgP.mjs';
import { $ as $$Image } from './pages/generic_BkwH1pdk.mjs';

const MDXLayout = async function ({
  children
}) {
  const Layout = (await import('./SingleBlogPost_CpPKkQ-I.mjs')).default;
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
  "title": "How to resolve file access error when restoring SQL Server DB",
  "description": 'How to avoid the "access-defined" when attempting to restore a SQL Server DB from a *.bak file.',
  "tags": ["sql-server"],
  "date_added": "2024-04-18T14:18:59.000Z",
  "date_updated": "2024-04-18T14:19:04.000Z",
  "date_published": null,
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
      children: "To resolve the \u201Caccess denied\u201D error when trying to restore SQL Server .BAK files:"
    }), "\n", createVNode(_components.p, {
      children: "Open services, and find the"
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
            children: "SQL SERVER(MSSQLSERVER)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "and change its \u201Clog on as\u201D account from NT Service/MSSQLSERVER to Local System"
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
const url = "src/content/posts/sql-server-file-access-error.mdx";
const file = "C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/sql-server-file-access-error.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/sql-server-file-access-error.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
