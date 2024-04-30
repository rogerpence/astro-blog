import { c as createComponent, r as renderTemplate, d as renderHead, e as addAttribute, f as createAstro, m as maybeRenderHead, g as renderComponent, A as AstroError, h as UnknownContentCollectionError, i as renderUniqueStylesheet, j as renderScriptElement, k as createHeadAndContent, u as unescapeHTML, l as renderSlot } from '../astro_Bindw8GW.mjs';
import 'path';
/* empty css                          */
import { AsyncResource } from 'async_hooks';
import { p as prependForwardSlash } from '../astro/assets-service_BTA6KAWT.mjs';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$7 = createAstro();
const $$Head = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Head;
  const { post } = Astro2.props;
  let description = "non-post page";
  if (post && post.data && post.data.description)
    description = post.data.description;
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<head>\n  <meta charset="utf-8">\n  <link rel="icon" type="image/svg+xml" href="/favicon.svg">\n  <meta name="viewport" content="width=device-width">\n  <meta name="generator"', '>\n  <!--  -->\n  <meta name="description"', ">\n  <!--  -->\n\n  <title>", '</title>\n\n  <script src="/pagefind/pagefind-ui.js"><\/script>\n', "</head>"])), addAttribute(Astro2.generator, "content"), addAttribute(description, "content"), Astro2.props.title, renderHead());
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

const $$Astro$6 = createAstro();
const $$MainNav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$MainNav;
  return renderTemplate`${maybeRenderHead()}<ul role="list">
  ${navData.map((item) => renderTemplate`<li>
        <a${addAttribute(item.url, "href")}>${item.text}</a>
      </li>`)}
</ul>`;
}, "C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/components/MainNav.astro", void 0);

const $$Astro$5 = createAstro();
const $$PageFindLogic = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$PageFindLogic;
  return renderTemplate`${maybeRenderHead()}<div class="pagefind-search-wrapper">
  <div class="pagefind-search-input" id="search"></div>
  
</div>`;
}, "C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/components/PageFindLogic.astro", void 0);

const $$Astro$4 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="site__header">
  <!-- <Icon name="rp" /> -->
  <div class="nav-wrapper">
    <div><a href="/">rogerpence.com</a></div>
    <div class="search-nav-wrapper">
      ${renderComponent($$result, "PageFindLogic", $$PageFindLogic, {})}
      ${renderComponent($$result, "MainNav", $$MainNav, {})}
    </div>
  </div>
</header>`;
}, "C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/components/Header.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$3 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate(_a || (_a = __template(['<script type="module" src="/js/main.js"><\/script>\n\n', "<footer data-astro-cid-sz7xmlte>\n  Copyright &copy; ", " by Roger Pence. All rights reserved.\n</footer>"])), maybeRenderHead(), (/* @__PURE__ */ new Date()).getFullYear());
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
  // [
  //     { tag: 'astro', count: 4 },
  //     { tag: 'cs', count: 2 },
  //     { tag: 'css', count: 3 },
  //     { tag: 'html', count: 1 },
  //     { tag: 'javascript', count: 1 },
  //     { tag: 'npm', count: 1 },
  //     { tag: 'powershell', count: 2 },
  //     { tag: 'python', count: 3 },
  //     { tag: 'sql', count: 1 },
  //     { tag: 'sql-server', count: 1 }
  //   ]

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

/*
How it works:
`this.#head` is an instance of `Node` which keeps track of its current value and nests another instance of `Node` that keeps the value that comes after it. When a value is provided to `.enqueue()`, the code needs to iterate through `this.#head`, going deeper and deeper to find the last value. However, iterating through every single item is slow. This problem is solved by saving a reference to the last value as `this.#tail` so that it can reference it to add a new value.
*/

class Node {
	value;
	next;

	constructor(value) {
		this.value = value;
	}
}

class Queue {
	#head;
	#tail;
	#size;

	constructor() {
		this.clear();
	}

	enqueue(value) {
		const node = new Node(value);

		if (this.#head) {
			this.#tail.next = node;
			this.#tail = node;
		} else {
			this.#head = node;
			this.#tail = node;
		}

		this.#size++;
	}

	dequeue() {
		const current = this.#head;
		if (!current) {
			return;
		}

		this.#head = this.#head.next;
		this.#size--;
		return current.value;
	}

	clear() {
		this.#head = undefined;
		this.#tail = undefined;
		this.#size = 0;
	}

	get size() {
		return this.#size;
	}

	* [Symbol.iterator]() {
		let current = this.#head;

		while (current) {
			yield current.value;
			current = current.next;
		}
	}
}

function pLimit(concurrency) {
	if (!((Number.isInteger(concurrency) || concurrency === Number.POSITIVE_INFINITY) && concurrency > 0)) {
		throw new TypeError('Expected `concurrency` to be a number from 1 and up');
	}

	const queue = new Queue();
	let activeCount = 0;

	const next = () => {
		activeCount--;

		if (queue.size > 0) {
			queue.dequeue()();
		}
	};

	const run = async (function_, resolve, arguments_) => {
		activeCount++;

		const result = (async () => function_(...arguments_))();

		resolve(result);

		try {
			await result;
		} catch {}

		next();
	};

	const enqueue = (function_, resolve, arguments_) => {
		queue.enqueue(
			AsyncResource.bind(run.bind(undefined, function_, resolve, arguments_)),
		);

		(async () => {
			// This function needs to wait until the next microtask before comparing
			// `activeCount` to `concurrency`, because `activeCount` is updated asynchronously
			// when the run function is dequeued and called. The comparison in the if-statement
			// needs to happen asynchronously as well to get an up-to-date value for `activeCount`.
			await Promise.resolve();

			if (activeCount < concurrency && queue.size > 0) {
				queue.dequeue()();
			}
		})();
	};

	const generator = (function_, ...arguments_) => new Promise(resolve => {
		enqueue(function_, resolve, arguments_);
	});

	Object.defineProperties(generator, {
		activeCount: {
			get: () => activeCount,
		},
		pendingCount: {
			get: () => queue.size,
		},
		clearQueue: {
			value() {
				queue.clear();
			},
		},
	});

	return generator;
}

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
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
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
        )
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

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/posts/astro-data-object.mdx": () => import('../astro-data-object_DuF8E5WS.mjs'),"/src/content/posts/astro-notes.mdx": () => import('../astro-notes_CYhtLhVX.mjs'),"/src/content/posts/better-anchor-title.mdx": () => import('../better-anchor-title_Ch5OGnFF.mjs'),"/src/content/posts/copy-code.mdx": () => import('../copy-code_Cd-wFpzL.mjs'),"/src/content/posts/css-relative-colors.mdx": () => import('../css-relative-colors_CB7kEagn.mjs'),"/src/content/posts/demo.mdx": () => import('../demo_Dqq-rLLs.mjs'),"/src/content/posts/jinja-custom-filter.mdx": () => import('../jinja-custom-filter_D0m_5I_O.mjs'),"/src/content/posts/jinja-omit-last-comma.mdx": () => import('../jinja-omit-last-comma_DvHhXoBp.mjs'),"/src/content/posts/jinja-white-space.mdx": () => import('../jinja-white-space_CBb4x5iH.mjs'),"/src/content/posts/live-server.mdx": () => import('../live-server_DMo5-Aoc.mjs'),"/src/content/posts/powershell-snippets.mdx": () => import('../powershell-snippets_D7QeE0mb.mjs'),"/src/content/posts/programming-rules.mdx": () => import('../programming-rules_BmQ4eWpl.mjs'),"/src/content/posts/sql-server-file-access-error.mdx": () => import('../sql-server-file-access-error_BVUVfCjI.mjs'),"/src/content/posts/sql-snippets.mdx": () => import('../sql-snippets_C99xhpIr.mjs'),"/src/content/posts/ssr-versus-ssg.mdx": () => import('../ssr-versus-ssg_DlOsSzLm.mjs')});
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
lookupMap = {"posts":{"type":"content","entries":{"astro-notes":"/src/content/posts/astro-notes.mdx","astro-data-object":"/src/content/posts/astro-data-object.mdx","copy-code":"/src/content/posts/copy-code.mdx","better-anchor-title":"/src/content/posts/better-anchor-title.mdx","css-relative-colors":"/src/content/posts/css-relative-colors.mdx","demo":"/src/content/posts/demo.mdx","jinja-custom-filter":"/src/content/posts/jinja-custom-filter.mdx","jinja-white-space":"/src/content/posts/jinja-white-space.mdx","jinja-omit-last-comma":"/src/content/posts/jinja-omit-last-comma.mdx","live-server":"/src/content/posts/live-server.mdx","programming-rules":"/src/content/posts/programming-rules.mdx","powershell-snippets":"/src/content/posts/powershell-snippets.mdx","sql-server-file-access-error":"/src/content/posts/sql-server-file-access-error.mdx","sql-snippets":"/src/content/posts/sql-snippets.mdx","ssr-versus-ssg":"/src/content/posts/ssr-versus-ssg.mdx"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/posts/astro-data-object.mdx": () => import('../astro-data-object_CrJqgVQa.mjs'),"/src/content/posts/astro-notes.mdx": () => import('../astro-notes_BLQZbqDi.mjs'),"/src/content/posts/better-anchor-title.mdx": () => import('../better-anchor-title_aztI81Tn.mjs'),"/src/content/posts/copy-code.mdx": () => import('../copy-code_BsP2MjYf.mjs'),"/src/content/posts/css-relative-colors.mdx": () => import('../css-relative-colors_lWy8RP5-.mjs'),"/src/content/posts/demo.mdx": () => import('../demo_Dp1iE1Uv.mjs'),"/src/content/posts/jinja-custom-filter.mdx": () => import('../jinja-custom-filter_BwVv8ekd.mjs'),"/src/content/posts/jinja-omit-last-comma.mdx": () => import('../jinja-omit-last-comma_9WhBKkOM.mjs'),"/src/content/posts/jinja-white-space.mdx": () => import('../jinja-white-space_BKl947NO.mjs'),"/src/content/posts/live-server.mdx": () => import('../live-server_Blt1RbDB.mjs'),"/src/content/posts/powershell-snippets.mdx": () => import('../powershell-snippets_CwnRUAPF.mjs'),"/src/content/posts/programming-rules.mdx": () => import('../programming-rules_HBXpz_W_.mjs'),"/src/content/posts/sql-server-file-access-error.mdx": () => import('../sql-server-file-access-error_A1vwwvMf.mjs'),"/src/content/posts/sql-snippets.mdx": () => import('../sql-snippets_BGCY4B-5.mjs'),"/src/content/posts/ssr-versus-ssg.mdx": () => import('../ssr-versus-ssg_CTqt2IxV.mjs')});
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
  const { post } = Astro2.props;
  return renderTemplate`

<html lang="en">
  ${renderComponent($$result, "Head", $$Head, { "post": post })}
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
