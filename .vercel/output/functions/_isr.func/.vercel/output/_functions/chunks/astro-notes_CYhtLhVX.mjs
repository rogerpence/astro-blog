const id = "astro-notes.mdx";
						const collection = "posts";
						const slug = "astro-notes";
						const body = "\r\n### Search a collection for a given set\r\n\r\n```js\r\nconst findBlogEntries = await getCollection(\"blog\", ({ data }) => {\r\n  return data.title == \"Toast notifications for .NET 6+ Windows apps\";\r\n});\r\n```\r\n\r\n### Get last four more recent posts\r\n\r\n```js\r\nconst top4 = posts\r\n  .sort((a, b) => a.data.dateAdded.valueOf() - b.data.dateAdded.valueOf())\r\n  //.slice(0,4)\r\n  .map(function (item) {\r\n    return {\r\n      title: item.data.title,\r\n      date: item.data.dateAdded,\r\n      tags: item.data.tags,\r\n      abstract: item.data.abstract,\r\n    };\r\n  });\r\n```\r\n\r\n### Get posts with glob\r\n\r\n```\r\n  const allPosts = await Astro.glob('../../posts/*.md');\r\n```\r\n\r\n### dynamic urls\r\n\r\nFirst page is blah the /1 is assumed\r\n\r\n```\r\n[...page].astro\r\n```\r\n\r\nFirst page is blah/1 the /1 needs to be explicit\r\n\r\n```\r\n[page].astro\r\n```\r\n\r\n### `c#` tag causes error on `npm run build`\r\n\r\nShould `#` in tags (or anywhere else, really) be converted to the entity for `#` which is `&#35;`\r\n\r\n### Embedding an Astro property into an HTML value attribute\r\n\r\nUse a JavaScript template literal as shown below.\r\n\r\n```html\r\nhref={`tags/${tag.name}`}\r\n```\r\n\r\nIf `tag.name` is `astro`, the result is:\r\n\r\n```html\r\nhref=\"tags/astro\"\r\n```\r\n\r\nAstro implicitly adds the double quotes around the template literal.\r\n";
						const data = {title:"Astro notes",description:"Astro notes",tags:["astro"],date_published:new Date(1681603200000),date_added:new Date(1681603200000),date_updated:new Date(1681603200000),pinned:false};
						const _internal = {
							type: 'content',
							filePath: "C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/astro-notes.mdx",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
