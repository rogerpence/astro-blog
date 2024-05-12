const id = "better-anchor-title.mdx";
						const collection = "posts";
						const slug = "better-anchor-title";
						const body = "\r\nThis is some text\r\n\r\nasdfasdfasdf\r\n\r\n\r\n```\r\n<a data-title=\"hello, world\" href=\"...\">...</a>\r\n```\r\n\r\n```css\r\na[data-title] {\r\n  position: relative;\r\n  display: inline-block;\r\n  margin-top: 1rem;\r\n}\r\n```\r\n\r\nOther words here\r\n\r\n```css\r\na[data-title]:hover::after {\r\n  content: attr(data-title);\r\n  position: absolute;\r\n  background-color: black;\r\n  color: white;\r\n  top: -1.7rem;\r\n  left: -2rem;\r\n  padding: 0.1rem 0.4rem;\r\n  border-radius: 5px;\r\n}\r\n```\r\n";
						const data = {title:"A simple CSS-only text popover",description:"This CSS displays a small title above an element when it is hovered over. This originally intended for better anchor tag titles that are often under the mouse pointer--but it also works for other things.",tags:["css","html"],date_published:null,date_added:new Date(1683676800000),date_updated:new Date(1683676800000),pinned:false};
						const _internal = {
							type: 'content',
							filePath: "C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/better-anchor-title.mdx",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
