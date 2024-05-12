// Outputs: /builtwith.json
// export const prerender = false;

import { tags_list } from "./tag-objects.js";

export async function GET({ params, request }) {
  const j = { name: "roger" };

  //return new Response(JSON.stringify(tags_list, null, 2));
  return new Response(JSON.stringify(j, null, 2));
}
