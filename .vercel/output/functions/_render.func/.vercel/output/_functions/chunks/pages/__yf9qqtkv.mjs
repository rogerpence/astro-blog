import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, f as renderHead, m as maybeRenderHead, g as renderComponent, A as AstroError, h as UnknownContentCollectionError, i as renderUniqueStylesheet, j as renderScriptElement, k as createHeadAndContent, u as unescapeHTML, l as renderSlot } from '../astro_I20JpDLc.mjs';
/* empty css                          */
import { p as prependForwardSlash } from '../astro/assets-service_DRmnzbJx.mjs';

const $$Astro$6 = createAstro();
const $$Head = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Head;
  return renderTemplate`<head>
  <meta charset="utf-8">
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <meta name="viewport" content="width=device-width">
  <meta name="generator"${addAttribute(Astro2.generator, "content")}>

  <title>${Astro2.props.title}</title>
${renderHead()}</head>`;
}, "C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/components/Head.astro", void 0);

const navData = [
  {
    text: "Posts",
    url: "/posts/1",
  },

  {
    text: "Links",
    url: "/links",
  },
  {
    text: "About",
    url: "/about",
  },
];

const $$Astro$5 = createAstro();
const $$MainNav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$MainNav;
  return renderTemplate`${maybeRenderHead()}<ul role="list">
  ${navData.map((item) => renderTemplate`<li>
        <a${addAttribute(item.url, "href")}>${item.text}</a>
      </li>`)}
</ul>`;
}, "C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/components/MainNav.astro", void 0);

const $$Astro$4 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="site__header">
  <!-- <Icon name="rp" /> -->
  <div class="nav-wrapper">
    <div><a href="/">rogerpence.com</a></div>

    ${renderComponent($$result, "MainNav", $$MainNav, {})}
  </div>
</header>`;
}, "C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/components/Header.astro", void 0);

const $$Astro$3 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sz7xmlte>
  Copyright &copy; ${(/* @__PURE__ */ new Date()).getFullYear()} by Roger Pence. All rights reserved.
</footer>`;
}, "C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/components/Footer.astro", void 0);

function formatDate(date) {
  return new Date(date).toLocaleDateString("en-CA");
}

function filterBlogPosts(
  posts,
  {
    filterOutDrafts = true,
    filterOutFuturePosts = true,
    sortByDate = true,
    limit = undefined,
  } = {}
) {
  const filteredPosts = posts.reduce((acc, post) => {
    if (post.url && post.url.includes("_template.mdx")) return acc;

    const { date_published } = post.data;
    // filterOutDrafts if true
    if (filterOutDrafts && !date_published) return acc;

    // filterOutFuturePosts if true
    if (filterOutFuturePosts && new Date(date_published) > new Date())
      return acc;

    // add post to acc
    acc.push(post);

    return acc;
  }, []);

  // sortByDate or randomize
  if (sortByDate) {
    filteredPosts.sort(
      (a, b) =>
        new Date(a.data.date_published) - new Date(b.data.date_published)
    );
  } else {
    filteredPosts.sort(() => Math.random() - 0.5);
  }

  // limit if number is passed
  if (typeof limit === "number") {
    return filteredPosts.slice(0, limit);
  }

  return filteredPosts;
}

function getContentData(obj) {
  return {
    title: obj.data.title,
    description: obj.data.description,
    date_published: obj.data.date_published || "N/A",
    slug: `/${obj.collection}/${obj.slug}`,
  };
}

function getTagsFromPosts(posts) {
  const tags = posts.reduce((acc, post) => {
    const tags = post.data.tags;
    acc.push(...tags);
    return acc;
  }, []);

  const uniqueTags = Array.from(new Set([...tags]));
  const tagsCount = uniqueTags.map((tag) => {
    return { tag, count: 0 };
  });

  tags.forEach((tag) => {
    tagsCount.forEach((t) => {
      if (t.tag == tag) {
        t.count++;
      }
    });
  });

  return tagsCount.sort((a, b) => {
    if (a.tag.toLowerCase() < b.tag.toLowerCase()) {
      return -1;
    }
    if (a.tag.toLowerCase() > b.tag.toLowerCase()) {
      return 1;
    }
    return 0;
  });
}

const $$Astro$2 = createAstro();
const $$PostListing = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PostListing;
  const { post } = Astro2.props;
  const { title, description, date_published, slug } = getContentData(post);
  return renderTemplate`${maybeRenderHead()}<div class="post-detail">
  <a${addAttribute(`${slug}`, "href")}>
    ${title}
    <div class="post-description">
      ${date_published == "N/A" && renderTemplate`<span class="draft-post-tag">Draft</span>`}
      ${date_published != "N/A" && `${formatDate(date_published)}`}
      ${description}
    </div>
  </a>
</div>`;
}, "C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/components/PostListing.astro", void 0);

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}, { Path: process.env.Path })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      entries = await Promise.all(
        lazyImports.map(async (lazyImport) => {
          const entry = await lazyImport();
          return type === "content" ? {
            id: entry.id,
            slug: entry.slug,
            body: entry.body,
            collection: entry.collection,
            data: entry.data,
            async render() {
              return render({
                collection: entry.collection,
                id: entry.id,
                renderEntryImport: await getRenderEntryImport(collection, entry.slug)
              });
            }
          } : {
            id: entry.id,
            collection: entry.collection,
            data: entry.data
          };
        })
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/posts/astro-data-object.mdx": () => import('../astro-data-object_DuF8E5WS.mjs'),"/src/content/posts/astro-notes.mdx": () => import('../astro-notes_CYhtLhVX.mjs'),"/src/content/posts/better-anchor-title.mdx": () => import('../better-anchor-title_Ch5OGnFF.mjs'),"/src/content/posts/copy-code.mdx": () => import('../copy-code_B4frTANW.mjs'),"/src/content/posts/css-relative-colors.mdx": () => import('../css-relative-colors_CB7kEagn.mjs'),"/src/content/posts/demo.mdx": () => import('../demo_D5d03AVi.mjs'),"/src/content/posts/jinja-custom-filter.mdx": () => import('../jinja-custom-filter_D0m_5I_O.mjs'),"/src/content/posts/jinja-omit-last-comma.mdx": () => import('../jinja-omit-last-comma_DvHhXoBp.mjs'),"/src/content/posts/jinja-white-space.mdx": () => import('../jinja-white-space_CBb4x5iH.mjs'),"/src/content/posts/live-server.mdx": () => import('../live-server_DMo5-Aoc.mjs'),"/src/content/posts/powershell-snippets.mdx": () => import('../powershell-snippets_BvozlE_r.mjs'),"/src/content/posts/programming-rules.mdx": () => import('../programming-rules_Cr-rgd_B.mjs'),"/src/content/posts/sql-server-file-access-error.mdx": () => import('../sql-server-file-access-error_BVUVfCjI.mjs'),"/src/content/posts/sql-snippets.mdx": () => import('../sql-snippets_C99xhpIr.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"posts":{"type":"content","entries":{"astro-notes":"/src/content/posts/astro-notes.mdx","better-anchor-title":"/src/content/posts/better-anchor-title.mdx","astro-data-object":"/src/content/posts/astro-data-object.mdx","copy-code":"/src/content/posts/copy-code.mdx","css-relative-colors":"/src/content/posts/css-relative-colors.mdx","demo":"/src/content/posts/demo.mdx","jinja-custom-filter":"/src/content/posts/jinja-custom-filter.mdx","jinja-omit-last-comma":"/src/content/posts/jinja-omit-last-comma.mdx","jinja-white-space":"/src/content/posts/jinja-white-space.mdx","live-server":"/src/content/posts/live-server.mdx","powershell-snippets":"/src/content/posts/powershell-snippets.mdx","programming-rules":"/src/content/posts/programming-rules.mdx","sql-server-file-access-error":"/src/content/posts/sql-server-file-access-error.mdx","sql-snippets":"/src/content/posts/sql-snippets.mdx"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/posts/astro-data-object.mdx": () => import('../astro-data-object_BbKnrNVW.mjs'),"/src/content/posts/astro-notes.mdx": () => import('../astro-notes_CorCF6Qz.mjs'),"/src/content/posts/better-anchor-title.mdx": () => import('../better-anchor-title_UJLm_LA6.mjs'),"/src/content/posts/copy-code.mdx": () => import('../copy-code_CGRlyxbG.mjs'),"/src/content/posts/css-relative-colors.mdx": () => import('../css-relative-colors_DSzH-dWX.mjs'),"/src/content/posts/demo.mdx": () => import('../demo_D2artsHw.mjs'),"/src/content/posts/jinja-custom-filter.mdx": () => import('../jinja-custom-filter_07f4LQjZ.mjs'),"/src/content/posts/jinja-omit-last-comma.mdx": () => import('../jinja-omit-last-comma_D5lkIWU0.mjs'),"/src/content/posts/jinja-white-space.mdx": () => import('../jinja-white-space_Bt3Ihohs.mjs'),"/src/content/posts/live-server.mdx": () => import('../live-server_DOFIKKSF.mjs'),"/src/content/posts/powershell-snippets.mdx": () => import('../powershell-snippets_BYci6Vty.mjs'),"/src/content/posts/programming-rules.mdx": () => import('../programming-rules_CMbyhFX-.mjs'),"/src/content/posts/sql-server-file-access-error.mdx": () => import('../sql-server-file-access-error_D9AaJTHK.mjs'),"/src/content/posts/sql-snippets.mdx": () => import('../sql-snippets_DrN7wKBd.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const $$Astro$1 = createAstro();
const $$ContentLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ContentLayout;
  return renderTemplate`

<html lang="en">
  ${renderComponent($$result, "Head", $$Head, {})}
  ${maybeRenderHead()}<body>
    <div class="site">
      ${renderComponent($$result, "Header", $$Header, {})}
      <main class="body-background">
        <div class="use-sidebar content-section">
          ${renderSlot($$result, $$slots["default"])}
        </div>
      </main>
      ${renderComponent($$result, "Footer", $$Footer, {})}
    </div>
  </body></html>`;
}, "C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/layouts/ContentLayout.astro", void 0);

const $$Astro = createAstro();
const prerender = false;
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { tag } = Astro2.params;
  const posts = await getCollection("posts");
  const filteredPosts = posts.filter((post) => {
    return post.data.tags.includes(tag.trim());
  });
  return renderTemplate`${renderComponent($$result, "ContentLayout", $$ContentLayout, { "title": "rogerpence.com | Blog" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<div>
    ${filteredPosts.map((post) => renderTemplate`${renderComponent($$result2, "PostListing", $$PostListing, { "post": post })}`)}
  </div>
` })}`;
}, "C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/pages/tag/[...tag].astro", void 0);

const $$file = "C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/pages/tag/[...tag].astro";
const $$url = "/tag/[...tag]";

const ____tag_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Head as $, ____tag_ as _, $$Header as a, $$Footer as b, $$PostListing as c, $$ContentLayout as d, getTagsFromPosts as e, filterBlogPosts as f, getCollection as g };
