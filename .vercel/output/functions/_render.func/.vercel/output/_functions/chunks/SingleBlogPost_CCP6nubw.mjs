import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, f as addAttribute, g as renderComponent, l as renderSlot } from './astro_BkCAkxv4.mjs';
import { g as getCollection, f as filterBlogPosts, e as getTagsFromPosts } from './pages/__DgazfyjO.mjs';

const $$Astro$2 = createAstro();
const $$SmallTagsList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SmallTagsList;
  const { tags, css_classes = "small-tags-list" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(css_classes, "class")}>
  ${tags.map((tag) => renderTemplate`<span>${tag}</span>`)}
</div>`;
}, "C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/components/SmallTagsList.astro", void 0);

const $$Astro$1 = createAstro();
const $$GlobalTagsList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$GlobalTagsList;
  const { tags, css_classes = "global-tags-list" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(css_classes, "class")}>
  ${tags.map((tag) => renderTemplate`<a${addAttribute(`/tag/${tag.tag}`, "href")}>
        <span>
          ${tag.tag}
          <span class="tag-count-circle">${tag.count}</span>
        </span>
      </a>`)}
</div>`;
}, "C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/components/GlobalTagsList.astro", void 0);

const $$Astro = createAstro();
const $$SingleBlogPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SingleBlogPost;
  const { frontmatter } = Astro2.props;
  const posts = await getCollection("posts");
  const filteredPosts = filterBlogPosts(posts);
  const tags = getTagsFromPosts(filteredPosts);
  return renderTemplate`${maybeRenderHead()}<div class="content">
  <div class="use-sidebar">
    <article class="column-main">
      <h1>${frontmatter.title}</h1>
      ${renderComponent($$result, "SmallTagsList", $$SmallTagsList, { "tags": frontmatter.tags })}
      ${renderSlot($$result, $$slots["default"])}
    </article>
    <aside>
      <div>
        ${renderComponent($$result, "GlobalTagsList", $$GlobalTagsList, { "tags": tags })}
      </div>
    </aside>
  </div>
</div>`;
}, "C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/layouts/SingleBlogPost.astro", void 0);

export { $$SingleBlogPost as default };
