module.exports = () => {
  return {
    layout: "layouts/oneshot_page.njk",
    tags: ["oneshots"],
    eleventyComputed: {
      permalink: (data) => {
        const slug = data.page.fileSlug.split("-").slice(1).join("-");
        return `/${slug}/`;
      },
      formattedDate: (data) => {
        const date = new Date(data.date);
        return date.toLocaleDateString("en-GB", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
      },
    },
  };
};
