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
  product: {
    images: ["https://everlane.imgix.net/i/4c7a58ee_6a23.jpg?dpr=1&w=1200&h=1200&q=65", "https://everlane.imgix.net/i/cebcacec_b25b.jpg?dpr=1&w=1200&h=1200&q=65", "https://everlane.imgix.net/i/7315a850_0064.jpg?dpr=1&w=1200&h=1200&q=65",
  "https://everlane-2.imgix.net/i/4a6d8024_eb8c.jpg?dpr=1&w=1200&h=1200&q=65", "https://everlane.imgix.net/i/e10d30d4_6786.jpg?dpr=1&w=1200&h=1200&q=65", "https://everlane-2.imgix.net/i/bb537bd7_43ca.jpg?dpr=1&w=1200&h=1200&q=65"],
    name: "The Cashmere Crew",
    price: 100,
    traditionalPrice: 210,
    colors: [ {
      name: "Charcoal",
      code: "#5D5D5D"
    }, {
      name: "Black",
      code: "#1C1C1C"
    }, {
      name: "Camel",
      code: "#BA9565"
    }],
    sizes: ["XXS", "XS", "S", "M", "L", "XL"],
    details: {
      model: "Model is 5'10. Wearing size S",
      specific: "Relaxed fit",
      material: "Body: 100% Cashmere; Trimmings: 90% Cashmere, 9% Nylon, 1% Elastane Dry Clean",
      signature: "Signature reversed stitching deatil on the cuffs",
      from: "Made in Dongguan, China",
    },
    description: "It doesn't get more classic than a crew. This crewneck sweater is warm, soft to the touch, and lightweight with a slightly relaxed fit for an easy, timeless look. Did we mention it's Grade-A Mongolian cashmere?",
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
          styles: [
            {backgroundColor: "#8CBED6", title: "Bright Blue / Navy", className: "product-page__color-swatch", }
          ]
        },
      ],
    },
  ],
};
