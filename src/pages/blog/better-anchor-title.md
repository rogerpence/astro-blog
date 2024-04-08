---
layout: ../../layouts/SingleBlogPost.astro 
title: A better anchor title
description: Display the title attribute of an anchor tag when the anchor is hovered.
tags:
  - html
  - css
datePublished: 2023-05-10
dateAdded: 2023-05-10
dateUpdated: 2023-05-14
draft: false
---

This is some text


```
a {
  position: relative;
  display: inline-block;
  margin-top: 1rem; 
}

a[data-title]:hover::after {
  content: attr(data-title);
  position: absolute;
  background-color: black;
  color: white;
  top: -1.7rem;
  left: -2rem;
  padding: .1rem .4rem;
  border-radius: 5px;
}
```