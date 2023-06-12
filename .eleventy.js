module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("site.css");
  eleventyConfig.addWatchTarget("site.css");

  eleventyConfig.addCollection("recentBlogPosts", function (collection) {
    return collection.getFilteredByTag("blog").reverse().slice(0, 10);
  });

  eleventyConfig.addShortcode("blogDate", (fullDateString) => {
    const date = new Date(fullDateString);
    return date.toLocaleDateString("en-GB", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  });
};
