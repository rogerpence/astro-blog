const id = "sql-server-file-access-error.mdx";
						const collection = "posts";
						const slug = "sql-server-file-access-error";
						const body = "\r\nTo resolve the “access denied” error when trying to restore SQL Server .BAK files:\r\n\r\nOpen services, and find the\r\n\r\n```\r\nSQL SERVER(MSSQLSERVER)\r\n```\r\n\r\nand change its “log on as” account from NT Service/MSSQLSERVER to Local System\r\n";
						const data = {title:"How to resolve file access error when restoring SQL Server DB",description:"How to avoid the \"access-defined\" when attempting to restore a SQL Server DB from a *.bak file.",tags:["sql-server"],date_published:null,date_added:new Date(1713449939000),date_updated:new Date(1713449944000),pinned:false};
						const _internal = {
							type: 'content',
							filePath: "C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/sql-server-file-access-error.mdx",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
