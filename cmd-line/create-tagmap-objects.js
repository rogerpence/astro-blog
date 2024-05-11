import * as utes from "./_utilities.js";
import { docmap } from "./data/docmap-objects.js";

const tags = utes.get_tag_objects(docmap[0]["docs"]);
console.log(tags);

// const t = tags.find((tag) => tag.name == "astrod");
// console.log(t);
//const outfile_name = path.join(output_path, "index-objects.js");

utes.writeObjectsToFile(tags, "./data/tag-objects.js", "tags_list");
