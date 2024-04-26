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

export function getAstroDataFromGlobObj(obj) {
  return {
    id: path.basename(obj.file),
    slug: slugifyFilename(obj.file),
    data: obj.frontmatter,
  };
}

export function slugifyFilename(filename, prefix = "") {
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
    if (post.url && post.url.includes("_template.mdx")) return acc;

    const { date_published } = post.data;
    // filterOutDrafts if true
    if (filterOutDrafts && !date_published) return acc;

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
        new Date(a.data.date_published) - new Date(b.data.date_published)
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

export function getContentData(obj) {
  return {
    title: obj.data.title,
    description: obj.data.description,
    date_published: obj.data.date_published || "N/A",
    slug: `/${obj.collection}/${obj.slug}`,
  };
}

export function getTagsFromPosts(posts) {
  // [
  //     { tag: 'astro', count: 4 },
  //     { tag: 'cs', count: 2 },
  //     { tag: 'css', count: 3 },
  //     { tag: 'html', count: 1 },
  //     { tag: 'javascript', count: 1 },
  //     { tag: 'npm', count: 1 },
  //     { tag: 'powershell', count: 2 },
  //     { tag: 'python', count: 3 },
  //     { tag: 'sql', count: 1 },
  //     { tag: 'sql-server', count: 1 }
  //   ]

  const tags = posts.reduce((acc, post) => {
    const tags = post.data.tags;
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
