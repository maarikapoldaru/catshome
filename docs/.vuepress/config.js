module.exports = {
  base: "/catshome/",
  head: [
    //tachyons.io style
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "styles/index.styl",
      },
    ],
  ],
  locales: {
    "/": {
      lang: "et-EE",
      title: "Kurru Murru varjupaik",
      description: "Tere tulemast kasside kodulehele!",
    },
    "/en/": {
      lang: "en-US",
      title: "Kurru Murru Shelter",
      description: "Welcome to the cat's homepage!",
    },
  },

  themeConfig: {
    docsDir: "docs",
    logo: "assets/img/KurruMurru-varjupaik.png",
    search: false,
    locales: {
      "/": {
        label: "Eesti",
        selectText: "Keeled",
        sidebar: {
          "/blog/": [
            {
              title: "Kõik postitused",
              collapsable: false,
              children: ["my-first-blog", "my-second-blog"],
            },
          ],
          "/": [""], // fallback
        },
        nav: [
          { text: "Esileht", link: "/" },
          {
            text: "Kassid",
            ariaLabel: "Cat Menu",
            items: [
              { text: "Otsivad kodu", link: "/Koduotsijad/" },
              { text: "Uues kodus", link: "/Kodus/" },
            ],
          },
          {
            text: "Kasulikku",
            ariaLabel: "FAQ menu",
            items: [
              { text: "Tingimused loomavõtjale", link: "/Tingimused/" },
              { text: "Korduma kippuvad küsimused", link: "/KKK/" },
            ],
          },
          {
            text: "Toeta meid",
            ariaLabel: "Support Menu",
            items: [
              { text: "Tule vabatahtlikuks", link: "/Vabatahtlik" },
              { text: "Anneta", link: "/Anneta" },
            ],
          },
          { text: "Kontakt", link: "/Kontakt/" },
          { text: "Blogi", link: "/blog/" },
          { text: "Galerii", link: "/Galerii/" },
        ],
      },
      "/en/": {
        label: "English",
        selectText: "Languages",
        sidebar: {
          "/en/blog/": [
            {
              title: "All posts",
              collapsable: false,
              children: ["my-first-blog", "my-second-blog"],
            },
          ],
          "/": [""], // fallback
        },
        nav: [
          { text: "Home", link: "/en/" },
          {
            text: "Cats",
            ariaLabel: "Cat Menu",
            items: [
              { text: "Looking for a home", link: "/en/Homeseekers/" },
              { text: "In a new home", link: "/en/Athome/" },
            ],
          },
          {
            text: "Useful",
            ariaLabel: "FAQ menu",
            items: [
              { text: "Conditions for the animal keeper", link: "/en/Conditions/" },
              { text: "Frequently asked Questions", link: "/en/FAQ/" },
            ],
          },
          {
            text: "Support us",
            ariaLabel: "Support Menu",
            items: [
              { text: "Become a volunteer", link: "/en/Volunteer" },
              { text: "Donate", link: "/en/Donate" },
            ],
          },
          { text: "Contact", link: "/en/Contact/" },
          { text: "Blog", link: "/en/blog/" },
          { text: "Gallery", link: "/en/Gallery/" },
        ],
      },
    },
    footer: true,
  },
  plugins: [
    [
      "vuepress-plugin-mailchimp",
      {
        endpoint: "https://gmail.us14.list-manage.com/subscribe/post?u=1129373554c4237148013af45&amp;id=100a06f5ff",
        title: "Uudiskiri",
        content: "Liituge meie uudiskirjaga",
        submitText: "Liituge",
      },
    ],
  ],
};
