module.exports = () => {
  return {
    layout: "layouts/blog_page.njk",
    tags: ["blog"],
    breadcrumb: [
      {
        path: "/",
        title: "Home",
      },
      {
        path: "/blog/",
        title: "Blog",
      },
    ],
    eleventyComputed: {
      permalink: (data) => {
        const slug = data.page.fileSlug.split("-").slice(1).join("-");
        return `/blog/${slug}/`;
      },
    },
  };
};
