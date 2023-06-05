module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("site.css");
  eleventyConfig.addWatchTarget("site.css");
};
