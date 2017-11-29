export const data = {
  currentBreadcrumbs: [
    { children: "Home", path: "/" },
    { children: "Women", path: "/womens" },
    { children: "Men", path: "/mens" },
    { children: "test", path: "/test" },
  ],
  currentBanner: {
    backgroundImg: "https://everlane.imgix.net/i/c2afc430_8bf8.jpg?dpr=1.5&q=65",
    text: "Shop all that you want",
    title: "Shop All",
  },
  sidebarMenu: {
    mainMenuItems: [
      { item: "test1", path: "/test1" },
      { item: "test1", path: "/test1" },
      { item: "test2", path: "/test2" },
      { item: "test1", path: "/test1" },
      { item: "test1", path: "/test1" },
    ],
    subMenuItems: {
      refItem: "test2",
      items: [{ item: "test21", path: "/test21" }, { item: "test21", path: "/test21" }, { item: "test21", path: "/test21" }],
    },
  },
};
