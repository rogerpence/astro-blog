import path from "path";

export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export function slugifyFilename(filename, prefix = "/") {
  const url = path.basename(filename);
  return `${prefix}${url.replace(/\.[^.]+$/, "")}`;
}

export function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    timeZone: "UTC",
  });
}
