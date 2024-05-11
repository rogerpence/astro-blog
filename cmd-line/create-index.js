import * as pagefind from "pagefind";

import { docmap } from "./data/index-objects.js";

// Create a Pagefind search index to work with
const { index } = await pagefind.createIndex();

import * as env from "./env.js";

import path from "path";

const folder = docmap[0];
//console.log(folder.docs);

// // Index all HTML files in a directory
// await index.addDirectory({
//   path: "public",
// });

folder.docs.map(async (doc) => {
  await index.addCustomRecord(doc);
});

// // Get the index files in-memory
// const { files } = await index.getFiles();

// // Or, write the index to disk
const dev_index_path = path.join(env.root, "public/pagefind");
const prod_index_path = path.join(env.root, ".vercel/output/static/pagefind");

await index.writeFiles({
  outputPath: dev_index_path,
});
