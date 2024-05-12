import { ab as Fragment, ac as __astro_tag_component__, a5 as createVNode } from './astro_BkCAkxv4.mjs';
import { $ as $$Image } from './pages/generic_DBSQglNL.mjs';

const MDXLayout = async function ({children}) {
  const Layout = (await import('./SingleBlogPost_CFoIwvqX.mjs')).default;
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
  "title": "Wranging PageFind with Astro to get the most out of it",
  "description": "PageFind is a great search engine static-content sites. This article shows how to tailor its index to your exact needs and how to customize its user interface.",
  "tags": ["astro", "pagefind"],
  "date_added": "2024-04-30T00:00:00.000Z",
  "date_updated": "2024-04-30T00:00:00.000Z",
  "date_published": null,
  "pinned": false
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "rebuild-pagefind-search-index",
    "text": "Rebuild PageFind search index"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    img: "img",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "This is PageFind’s default search results listing:"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://nyc3.digitaloceanspaces.com/rp-assets/images/pagefind-default-results.png",
        alt: "default"
      })
    }), "\n", createVNode(_components.p, {
      children: "This is the result of the customization provided in this post:"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://nyc3.digitaloceanspaces.com/rp-assets/images/pagefind-custom-results.png",
        alt: "custom"
      })
    }), "\n", createVNode(_components.h2, {
      id: "rebuild-pagefind-search-index",
      children: "Rebuild PageFind search index"
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

const url = "src/content/posts/pagefind-wrangling.mdx";
const file = "C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/pagefind-wrangling.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/pagefind-wrangling.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
