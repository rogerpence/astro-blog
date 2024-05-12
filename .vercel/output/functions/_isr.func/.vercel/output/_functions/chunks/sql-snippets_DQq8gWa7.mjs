const id = "sql-snippets.mdx";
						const collection = "posts";
						const slug = "sql-snippets";
						const body = "\r\n##### Copy all rows from one table to another\r\n\r\n```sql\r\ninsert into stateNew ([state], [abbrev])\r\nselect * from States\r\n```\r\n\r\n##### Getting identity column from last row added with a stored procedure\r\n\r\nStored procedure:\r\n\r\n```sql\r\nCREATE PROCEDURE [dbo].[qInsert]\r\n    @Id int,\r\n    @Name nvarchar(100)\r\nAS\r\nBEGIN\r\n    SET NOCOUNT ON\r\n    INSERT INTO [dbo].[artist]\r\n    (\r\n        [Name]\r\n    )\r\n    VALUES(\r\n        @Name\r\n    );\r\n    RETURN SCOPE_IDENTITY();\r\nEND\r\nGO\r\n```\r\n\r\n```sql\r\nEXEC @rp = qInsert 0, 'Bobby Fuller Four'\r\nSELECT @rp as 'identify'\r\n```\r\n\r\n\r\n##### Backup SQL Server with PowerShell\r\n\r\nTo work with SQL Server from PowerShell, install the PowerShell SqlServer module:\r\n\r\n```\r\nInstall-Module -Name SqlServer\r\n```\r\n\r\nDo this with an admin session if you want to install the module for all updateLanguageServiceSourceFile. \r\n\r\n\r\n```\r\nget-sqldatabase -serverinstance WIN10RP-1809                | where { $_.Name -ne 'tempdb' } | backup-sqldatabase\r\nget-sqldatabase -serverinstance \"WIN10RP-1809\\MSSQLSERVER01\" | where { $_.Name -ne 'tempdb' } | backup-sqldatabase\r\n```\r\n\r\n##### Set SQL Server instance log on account (necessary do batch back operations)\r\n\r\n- Open Windows Services applet\r\n- Find SQL Server (instance-name)\r\n- Right-click and select \"properties\"\r\n- Click the `Log On` tab\r\n- Select the \"Local System Account\" radio button\r\n\r\n##### Run a PowerShell script at Windows shutdown \r\n\r\n```\r\nLaunch `gpedit.msc'\r\n```\r\n\r\n\r\nosql.exe -E -Q \"BACKUP DATABASE crm TO DISK='C:\\users\\thumb\\documents\\sql-server-backup\\db.bak' WITH FORMAT\"\r\n\r\n\r\n\r\nC:\\WINDOWS\\System32\\GroupPolicy\\Machine\\Scripts\\Shutdown\\backup-sql-server.ps1";
						const data = {title:"SQL snippets",description:"SQL snippets",tags:["sql"],date_published:null,date_added:new Date(1713353769000),date_updated:new Date(1713353773000),pinned:false};
						const _internal = {
							type: 'content',
							filePath: "C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/sql-snippets.mdx",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
