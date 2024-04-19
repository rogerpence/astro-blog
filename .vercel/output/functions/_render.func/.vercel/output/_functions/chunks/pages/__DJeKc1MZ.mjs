import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, f as renderHead, m as maybeRenderHead, g as renderComponent, h as renderSlot } from '../astro_5Hj33UCm.mjs';
/* empty css                          */

const $$Astro$5 = createAstro();
const $$Head = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
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

const $$Astro$4 = createAstro();
const $$MainNav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$MainNav;
  return renderTemplate`${maybeRenderHead()}<ul role="list">
  ${navData.map((item) => renderTemplate`<li>
        <a${addAttribute(item.url, "href")}>${item.text}</a>
      </li>`)}
</ul>`;
}, "C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/components/MainNav.astro", void 0);

const $$Astro$3 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="site__header">
  <!-- <Icon name="rp" /> -->
  <div class="nav-wrapper">
    <div><a href="/">rogerpence.com</a></div>

    ${renderComponent($$result, "MainNav", $$MainNav, {})}
  </div>
</header>`;
}, "C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/components/Header.astro", void 0);

const $$Astro$2 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sz7xmlte>
  Copyright &copy; ${(/* @__PURE__ */ new Date()).getFullYear()} by Roger Pence. All rights reserved.
</footer>`;
}, "C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/components/Footer.astro", void 0);

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
  return renderTemplate`${renderComponent($$result, "ContentLayout", $$ContentLayout, { "title": "rogerpence.com | Blog" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<div>${tag}</div>
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

export { $$Head as $, ____tag_ as _, $$Header as a, $$Footer as b, $$ContentLayout as c };
