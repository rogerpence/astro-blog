// Outputs: /builtwith.json
// export const prerender = false;

import { tags_list } from "./tag-objects.js";

export async function GET({ params, request }) {
  return new Response(JSON.stringify(tags_list, null, 2));
}
