const id = "sql-snippets.mdx";
						const collection = "posts";
						const slug = "sql-snippets";
						const body = "\r\n### Copy all rows from one table to another\r\n\r\n```sql\r\ninsert into stateNew ([state], [abbrev])\r\nselect * from States\r\n```\r\n\r\n### Getting identity column from last row added with a stored procedure\r\n\r\nStored procedure:\r\n\r\n```sql\r\nCREATE PROCEDURE [dbo].[qInsert]\r\n    @Id int,\r\n    @Name nvarchar(100)\r\nAS\r\nBEGIN\r\n    SET NOCOUNT ON\r\n    INSERT INTO [dbo].[artist]\r\n    (\r\n        [Name]\r\n    )\r\n    VALUES(\r\n        @Name\r\n    );\r\n    RETURN SCOPE_IDENTITY();\r\nEND\r\nGO\r\n```\r\n\r\n```sql\r\nEXEC @rp = qInsert 0, 'Bobby Fuller Four'\r\nSELECT @rp as 'identify'\r\n```\r\n";
						const data = {title:"SQL snippets",description:"SQL snippets",tags:["sql"],date_published:null,date_added:new Date(1713353769000),date_updated:new Date(1713353773000),pinned:false};
						const _internal = {
							type: 'content',
							filePath: "C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/sql-snippets.mdx",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
