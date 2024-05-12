// Outputs: /builtwith.json
// export const prerender = false;

import { tags_list } from "./tag-objects.js";

export async function GET({ params, request }) {
  const j = { name: "roger" };

  //return new Response(JSON.stringify(tags_list, null, 2));
  return new Response(JSON.stringify(j, null, 2), {
    headers: {
      "content-type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
    },
  });
}

export const get = ({ params, request }) => {
  return new Response(
    JSON.stringify({ name: "Hrishikesh", url: "http://hrishikeshpathak.com" }),
    {
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
    }
  );
};
