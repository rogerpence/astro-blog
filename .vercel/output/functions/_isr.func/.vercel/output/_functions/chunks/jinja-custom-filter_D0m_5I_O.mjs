const id = "jinja-custom-filter.mdx";
						const collection = "posts";
						const slug = "jinja-custom-filter";
						const body = "\r\nThe `exists_with_value` filer returns true if the token provided exists and is not empty.\r\n\r\n```python\r\ndef exists_with_value(token):\r\n    return token is not None and len(token) > 0\r\n```\r\n\r\nThe last line below adds the function to Jinja\r\n\r\n```python\r\ndef load_template(template_file):\r\n    full_template_path = os.path.join(DATA_PATH, TEMPLATES_PATH, template_file)\r\n    if not os.path.exists(full_template_path):\r\n        print_error(f'Template file not found: {template_file}')\r\n        sys.exit(1)\r\n\r\n    template_filename = os.path.basename(full_template_path)\r\n    template_path = os.path.dirname(full_template_path)\r\n    template_loader = jinja2.FileSystemLoader(searchpath=template_path, encoding=ENCODING)\r\n    template_env = jinja2.Environment(loader=template_loader, lstrip_blocks=True, trim_blocks=True)\r\n\r\n    template_env.filters['exists_with_value'] = exists_with_value\r\n```\r\n\r\nUse it like this:\r\n";
						const data = {title:"Using custom filters with Jinja",description:"Using custom filters with Jinja",tags:["python"],date_published:null,date_added:new Date(1713353566000),date_updated:new Date(1713353569000),pinned:false};
						const _internal = {
							type: 'content',
							filePath: "C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/jinja-custom-filter.mdx",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
