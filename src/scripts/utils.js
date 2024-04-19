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
  return new Date(date).toLocaleDateString("en-CA");
}

export function filterBlogPosts(
  posts,
  {
    filterOutDrafts = true,
    filterOutFuturePosts = true,
    sortByDate = true,
    limit = undefined,
  } = {}
) {
  const filteredPosts = posts.reduce((acc, post) => {
    if (post.url.includes("_template.mdx")) return acc;

    const { date_published, draft } = post.frontmatter;
    // filterOutDrafts if true
    if (filterOutDrafts && draft) return acc;

    // filterOutFuturePosts if true
    if (filterOutFuturePosts && new Date(date_published) > new Date())
      return acc;

    // add post to acc
    acc.push(post);

    return acc;
  }, []);

  // sortByDate or randomize
  if (sortByDate) {
    filteredPosts.sort(
      (a, b) =>
        new Date(a.frontmatter.date_published) -
        new Date(b.frontmatter.date_published)
    );
  } else {
    filteredPosts.sort(() => Math.random() - 0.5);
  }

  // limit if number is passed
  if (typeof limit === "number") {
    return filteredPosts.slice(0, limit);
  }
  return filteredPosts;
}

export function getTagsCount(posts) {
  const tags = posts.reduce((acc, post) => {
    const tags = post.frontmatter.tags;
    acc.push(...tags);
    return acc;
  }, []);

  const uniqueTags = Array.from(new Set([...tags]));
  const tagsCount = uniqueTags.map((tag) => {
    return { tag, count: 0 };
  });

  tags.forEach((tag) => {
    tagsCount.forEach((t) => {
      if (t.tag == tag) {
        t.count++;
      }
    });
  });

  return tagsCount.sort((a, b) => {
    if (a.tag.toLowerCase() < b.tag.toLowerCase()) {
      return -1;
    }
    if (a.tag.toLowerCase() > b.tag.toLowerCase()) {
      return 1;
    }
    return 0;
  });
}
