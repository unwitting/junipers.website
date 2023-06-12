module.exports = () => {
  return {
    layout: "layouts/blog_page.njk",
    tags: ["blog"],
    eleventyComputed: {
      permalink: (data) => {
        const slug = data.page.fileSlug.split("-").slice(1).join("-");
        return `/${slug}/`;
      },
    },
  };
};
