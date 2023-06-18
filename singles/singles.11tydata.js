module.exports = () => {
  return {
    layout: "layouts/single_page.njk",
    tags: ["singles"],
    breadcrumb: [
      {
        path: "/",
        title: "Home",
      },
      {
        path: "/singles/",
        title: "Singles",
      },
    ],
  };
};
