const id = "css-relative-colors.mdx";
						const collection = "posts";
						const slug = "css-relative-colors";
						const body = "\r\n[Adam Argyle article](https://developer.chrome.com/blog/css-relative-color-syntax)\r\n\r\nLighten a color by 25%\r\n\r\n```css\r\n.lighten-by-25 {\r\n  background: oklch(from blue calc(l * 1.25) c h);\r\n}\r\n```\r\n\r\nDarken a color by 25%\r\n\r\n```css\r\n.darken-by-25 {\r\n  background: oklch(from blue calc(l * 0.75) c h);\r\n}\r\n```\r\n";
						const data = {title:"CSS relative colors",description:"Using OKLCH to create relative colors",tags:["css"],date_published:new Date(1680998400000),date_added:new Date(1680998400000),date_updated:new Date(1680998400000),pinned:false};
						const _internal = {
							type: 'content',
							filePath: "C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/css-relative-colors.mdx",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
