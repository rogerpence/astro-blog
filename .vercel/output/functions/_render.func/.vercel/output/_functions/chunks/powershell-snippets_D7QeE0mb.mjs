const id = "powershell-snippets.mdx";
						const collection = "posts";
						const slug = "powershell-snippets";
						const body = "\r\n#### Get file version\r\n\r\nGet the file version:\r\n\r\n```\r\n(get-item LutherBackup.exe).VersionInfo.FileVersion\r\n```\r\n\r\nList all VersionInfo attributes:\r\n\r\n```\r\n(get-item LutherBackup.exe).VersionInfo | format-list\r\n```\r\n\r\n#### Get a list of files\r\n\r\n```\r\nget-childitem -path *.ppt? -Recurse |\r\n    select fullName |\r\n    export-csv powerpoints .csv\r\n```\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n";
						const data = {title:"PowerShell snippets",description:"A handful of useful PowerShell shippets and tips",tags:["powershell"],date_published:null,date_added:new Date(1713353356000),date_updated:new Date(1713353440000),pinned:false};
						const _internal = {
							type: 'content',
							filePath: "C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/powershell-snippets.mdx",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
