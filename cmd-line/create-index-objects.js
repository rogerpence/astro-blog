// @ts-nocheck
import * as env from "./env.js";
import path from "path";
import ansis from "ansis";
import * as utes from "./_utilities.js";
import { getMarkdownObject } from "./markdown-object.js";

import { StopWatch } from "./stopwatch.js";
const sw = new StopWatch();

let tags = [];

export const getSlug = (foldername, filename) => {
  let slug = filename.split(".")[0];
  return `/${foldername}/${slug}`;
};

const getFolderObjects = (pathPrefix, folder) => {
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
        const result = {
          url: `${getSlug(folder, f.name)}`,

          content: md_obj.content + " " + md_obj.frontmatter.tags.join(" "),
          meta: {
            title: md_obj.frontmatter.title,
            description: md_obj.frontmatter.description,
            tags: md_obj.frontmatter.tags.join(", "),
          },
          language: "en",
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

  md_folders.forEach((folder) => {
    const folderInfo = getFolderObjects(pathPrefix, folder);
    result = folderInfo;
  });

  return result;
}

const output_path =
  "C:\\Users\\thumb\\Documents\\Projects\\astro-4\\blog-again\\cmd-line\\data";

const output_path2 = path.join(env.root, env.cmd_line);

console.log(output_path);
console.log(output_path2);

// const result = iterateContent();
// const outfile_name = path.join(output_path, "index-objects.js");
// utes.writeObjectsToFile(result, outfile_name, "docmap");
