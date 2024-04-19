const id = "jinja-white-space.mdx";
						const collection = "posts";
						const slug = "jinja-white-space";
						const body = "\r\nThis provides a list without blanks lines between each element, but with no trailing commas:\r\n\r\n```sql\r\n{% for field in fields +%}\r\n[{{field.name}}] {{field.sqlservertype}} {{field.sqlservernull}}\r\n{% endfor %}\r\n```\r\n\r\nAdding `{% if not loop.last %},{% endif %}` adds a trailing comma to all but the last element but puts everything on line:\r\n\r\n```sql\r\n{% for field in fields %}\r\n[{{field.name}}] {{field.sqlservertype}} {{field.sqlservernull}}{% if not loop.last %},{% endif %}\r\n{% endfor %}\r\n```\r\n\r\nWierd, huh?\r\n\r\n**The code that works:**\r\n\r\nAdding a plus sign in the `for` clause `{% for field in fields +%}` disables Jinja3’s “trim_blocks” and renders the list without blank lines where each line but the last has a trailing comma:\r\n\r\n```sql\r\n{% for field in fields +%}\r\n[{{field.name}}] {{field.sqlservertype}} {{field.sqlservernull}}{% if not loop.last %},{% endif %}\r\n{% endfor %}\r\n```\r\n\r\nRead about “trim_blocks” here: https://jinja.palletsprojects.com/en/3.0.x/templates/#whitespace-control\r\n";
						const data = {title:"Managing white space with Jinja3",description:"How to manage whitespace with the Jinja3 templating engine",tags:["python"],date_published:null,date_added:new Date(1713350525000),date_updated:new Date(1713350529000),pinned:false};
						const _internal = {
							type: 'content',
							filePath: "C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/jinja-white-space.mdx",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
