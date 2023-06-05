module.exports = () => {
  return {
    layout: "layouts/site_page.njk",
    tags: ["oneshots"],
    eleventyComputed: {
      permalink: (data) => {
        const slug = data.page.fileSlug.split("-").slice(1).join("-");
        return `/${slug}/`;
      },
    },
  };
};
