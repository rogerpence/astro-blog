import * as pagefind from "pagefind";

import { docmap } from "./data/index-objects.js";

// Create a Pagefind search index to work with
const { index } = await pagefind.createIndex();

const folder = docmap[0];
//console.log(folder.docs);

// // Index all HTML files in a directory
// await index.addDirectory({
//   path: "public",
// });

folder.docs.map(async (doc) => {
  //console.log(JSON.stringify(doc, null, 4));
  await index.addCustomRecord(doc);
  // Add extra content
  // await index.addCustomRecord({
  //   url: "/resume.pdf",
  //   content: "Aenean lacinia bibendum nulla sed consectetur",
  //   language: "en",
});

// // Get the index files in-memory
// const { files } = await index.getFiles();

// // Or, write the index to disk
console.log("write index");
await index.writeFiles({
  outputPath: "./public/pagefind",
});

// await index.writeFiles({
//   outputPath: ".vercel/output/static/pagefind",
// });
