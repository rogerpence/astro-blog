const id = "jinja-omit-last-comma.mdx";
						const collection = "posts";
						const slug = "jinja-omit-last-comma";
						const body = "\r\nJinja is a great Python template engine.This article explains how to omit the last comma in a series with Jinja.\r\n\r\nThe desired result is shown below--this is an argument list for an SQL stored procedure. Note that the Id column needs a zero default value and there cannot be a comma after the last column.\r\n\r\n```\r\n@Id int = 0,\r\n@Name nvarchar(100),\r\n@PrefixWithThe bit,\r\n@Added datetime,\r\n@Updated datetime\r\n```\r\n\r\nIn the Libretto SQL Server Json schema there is a columnSqlDeclarations column meta token that produces this:\r\n\r\n```\r\n@Id int,\r\n@Name nvarchar(100),\r\n@PrefixWithThe bit,\r\n@Added datetime,\r\n@Updated datetime,\r\n```\r\n\r\nThat's close, but no cigar. It doesn't assign the zero to the Id column and the trailing comma breaks things.\r\n\r\nAssigning a zero to the Id is a special case, so (in my case) its worth a little manual work force the zero assignment (note also that the test for the id column is case insensitive--just in case):\r\n\r\n```\r\n{% for col in columns %}\r\n{% if col.ColumnName.lower() == 'id' %}\r\n@{{col.ColumnName}} {{col.DDLType}} = 0\r\n{% else %}\r\n@{{col.ColumnName}} {{col.DDLType}}\r\n{% endif %}\r\n{% endfor %}\r\n```\r\n\r\nThat's close, but the trailing comma remains.\r\n\r\n```\r\nId int = 0,\r\n@Name nvarchar(100),\r\n@PrefixWithThe bit,\r\n@Added datetime,\r\n@Updated datetime,\r\n```\r\n\r\nTo get the desired result, the template needs omit the trailing comma on the last element in the series. This template:\r\n\r\n```\r\n{% for col in columns %}\r\n{% if col.ColumnName.lower() == 'id' %}\r\n@{{col.ColumnName}} {{col.DDLType}} = 0{% if not loop.last %},{% endif %}\r\n{% else %}\r\n@{{col.ColumnName}} {{col.DDLType}}{% if not loop.last %},{% endif %}\r\n{% endif %}\r\n{% endfor %}\r\n```\r\n\r\nproduces the correct results:\r\n\r\n```\r\n@Id int = 0,\r\n@Name nvarchar(100),\r\n@PrefixWithThe bit,\r\n@Added datetime,\r\n@Updated datetime\r\n```\r\n\r\nThe Jinja templating engine has a built-in variable that tracks a loop index. The loop.last value conditions when the template emits the comma.\r\n\r\n```\r\n{% if not loop.last %},{% endif %}\r\n\r\n```\r\n\r\nThis article is too long!\r\n\r\n```\r\n{% for column in columns -%}\r\n    {% if column.PrimaryKey == 'True' %}\r\n        {% if not loop.first %}, {% endif %}{{column.ColumnName}} = keyValue{{loop.index}}\r\n    {% endif %}\r\n{%- endfor %}\r\n```\r\n\r\nSee the [Jinja loop documentation](https://jinja.palletsprojects.com/en/3.0.x/templates/#list-of-control-structures) for more info.\r\n\r\nWhile it's not directly a part of this issue, knowing how Jinja [controls white space](https://jinja.palletsprojects.com/en/3.0.x/templates/#whitespace-control) is helpful.\r\n\r\nAlso, don't miss this Jinja tricks page in the [Jinja docs](https://jinja.palletsprojects.com/en/3.1.x/).\r\n";
						const data = {title:"Omitting the last comma in a series in a Jinja template",description:"Omitting the last comma in a series in a Jinja template",tags:["python"],date_published:null,date_added:new Date(1713354383000),date_updated:new Date(1713354389000),pinned:false};
						const _internal = {
							type: 'content',
							filePath: "C:/Users/thumb/Documents/Projects/astro-4/blog-again/src/content/posts/jinja-omit-last-comma.mdx",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };