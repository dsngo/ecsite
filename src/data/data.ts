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
    featuredCategories: [
      {
        item: "Women All",
        path: "/women-all"
      },
      {
        item: "New Arrivals",
        path: "/new-arrivals"
      },
      {
        item: "Gift for her",
        path: "/gift-for-her"
      },
      {
        item: "Gift for him",
        path: "/gift-for-him"
      }
    ],
    mainMenuItems: [
      { item: "Tees", path: "/test1" },
      { item: "Tops", path: "/test1" },
      { item: "Sweeters", path: "/test2" },
      { item: "Dresses", path: "/test1" },
      { item: "Denim", path: "/test1" },
    ],
    subMenuItems: {
      refItem: "test2",
      items: [{ item: "test21", path: "/test21" }, { item: "test21", path: "/test21" }, { item: "test21", path: "/test21" }],
    },
  },
  categories: [
    {
      title: "The Italian GoWeave Classic Blazer",
      products: [
        {
        albums: { portrait: ["https://everlane-2.imgix.net/i/39815c51_815c.jpg", "https://everlane-2.imgix.net/i/a1f6bf29_5056.jpg?dpr=1&w=362&h=452.5&q=65&fit=crop&crop=faces"] },
          details: {
            additional_details: [
              "Back vent",
              "Located just south of Ho Chi Minh City, Poong In is an industry-leading factory that offers competitive pay and works with Better Work",
            ],
            description:
              "A truly iconic blazer. Tailored for a slim silhouette (with subtle stretch for the perfect fit), this blazer is made from wrinkle-resistant Italian GoWeave, so you can wear it all day long",
          },
          title: "The Cashmere Crew",
          price: 125,
          gender: "female",
          permalink: "womens-italian-goweave-classic-blazer",
          sizeChart: [
            ["MEASUREMENTS", "24", "25", "26", "27", "28", "29", "30", "31", "32"],
            ["US Pant Size", "00", "0", "2", "4", "6", "8", "10", "12", "14"],
            ["Waistband Top Edge", "26 3/4", "27 3/4", "28 3/4", "29 3/4", "30 3/4", "31 3/4", "32 3/4"],
          ],
        },
      ],
    },
  ],
};
