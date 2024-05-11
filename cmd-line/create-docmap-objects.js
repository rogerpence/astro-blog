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

const getFolderObjects = (pathPrefix, folder, locale) => {
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
          layout: md_obj.frontmatter.layout,
          url: `${getSlug(folder, f.name)}`,
          title: md_obj.frontmatter.title,
          content: md_obj.content + " " + md_obj.frontmatter.tags.join(" "),
          descript: md_obj.frontmatter.description,
          tags: md_obj.frontmatter.tags,
          date_added: md_obj.frontmatter.date_added,
          date_updated: md_obj.frontmatter.date_updated,
          date_published: md_obj.frontmatter.date_published,
          pinned: md_obj.frontmatter.pinned,
          language: locale,
        };

        folderMap[0].docs.push(result);
      }
    }
  });

  return folderMap;
};

function iterateContent() {
  let result = [];
  const md_folders = env.folders;
  const pathPrefix = env.src__content;

  env.locales.map((locale) => {
    md_folders.forEach((folder) => {
      const folderInfo = getFolderObjects(pathPrefix, folder, locale);
      /*
       | This accumulates all locales into the result array.
       */
      result = [...result, ...folderInfo];
    });
  });

  return result;
}

const output_path = env.cmd_line__data;

const result = iterateContent();
const outfile_name = path.join(output_path, "docmap-objects.js");
utes.writeObjectsToFile(result, outfile_name, "docmap");
