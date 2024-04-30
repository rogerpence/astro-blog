// @ts-nocheck

import path from "path";
import ansis from "ansis";
import * as utes from "./_utilities.js";
import { getMarkdownObject } from "./markdown-object.js";

import { StopWatch } from "./stopwatch.js";
const sw = new StopWatch();

//const pathPrefix = "../../routes/markdown";
//const pathPrefix =
//	'C://Users//thumb//Documents//Projects//svelte//asna-project-ocho//src//routes//markdown';

//let folderInfo = {};

let tags = [];

export const getSlug = (foldername, filename) => {
  let slug = filename.split(".")[0];
  return `/${foldername}/${slug}`;
};

// const diag = (obj) => {
//   console.log(JSON.stringify(obj, null, 4));
// };

const getFolderObjects = (pathPrefix, folder) => {
  const SEP = String.fromCharCode(0x0091);
  let folderMap = [];

  folderMap[0] = {
    folder,
    docs: [],
  };

  const files = utes.getFilenames(pathPrefix, folder);

  files.forEach((f) => {
    if (!f.name.startsWith(`_`)) {
      const fullName = path.join(f.path, f.name);
      const md_obj = getMarkdownObject(fullName);

      md_obj.frontmatter.tags.map((tag) => tags.push(tag));

      if (!md_obj.frontmatter.tags || md_obj.frontmatter.tags == undefined) {
        console.log(
          ansis.red(
            `There is a problem with this doc's frontmatter.tags property: ${f.name}`
          )
        );
      } else {
        //folderMap.push(md_obj);
        // const meta = {
        //   description: md_obj.frontmatter.description,
        //   tags: md_obj.frontmatter.tags,
        // };

        const result = {
          url: `${getSlug(folder, f.name)}`,

          //          content: `${JSON.stringify(meta)}${SEP}${md_obj.content}`,
          content: md_obj.content,
          meta: {
            title: md_obj.frontmatter.title,
            description: md_obj.frontmatter.description,
            tags: md_obj.frontmatter.tags.join(", "),
          },
          sub_results: [
            {
              title: md_obj.frontmatter.description,
              url: md_obj.frontmatter.tags.join(", "),
            },
          ],

          language: "en",
          //   title: md_obj.frontmatter.title,
          //   description: md_obj.frontmatter.description,
          //   date_published: md_obj.frontmatter.date_published,
          //   folder: folder,
          //   filename: f.name,
          //   tags: md_obj.frontmatter.tags,
          //   tag1: md_obj.frontmatter.tags[0] ?? "",
        };

        folderMap[0].docs.push(result);
      }
    }
  });

  return folderMap;
};

function iterateContent() {
  let result;
  const md_folders = ["posts"];
  const pathPrefix =
    "C:\\Users\\thumb\\Documents\\Projects\\astro-4\\blog-again\\src\\content\\";
  //"C:\\Users\\thumb\\Documents\\Projects\\astro-4\\blog-again";

  md_folders.forEach((folder) => {
    const folderInfo = getFolderObjects(pathPrefix, folder);
    result = folderInfo;
  });

  return result;
}

//export function getMarkDownObjects() {

const output_path =
  "C:\\Users\\thumb\\Documents\\Projects\\astro-4\\blog-again\\cmd-line\\data";
const result = iterateContent();
const outfile_name = path.join(output_path, "docmap.js");
utes.writeObjectsToFile(result, outfile_name, "docmap");

//  return result;
//}
