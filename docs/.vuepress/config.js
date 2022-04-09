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
  ],
  locales: {
    "/": {
      title: "Kurru Murru varjupaik",
      description: "Tere tulemast kasside kodulehele!",
    },
  },

  themeConfig: {
    docsDir: "docs",
    logo: "assets/img/KurruMurru-varjupaik.png",
    search: false,
    locales: {
      "/": {
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
          { text: "Külasta meid", link: "/Kulasta/" },
          { text: "Kontakt", link: "/Kontakt/" },
          { text: "Blogi", link: "/blog/" },
          { text: "Galerii", link: "/Galerii/" },
          {
            text: "Keel",
            ariaLabel: "Language Menu",
            items: [
              { text: "EST", link: "/Keel/ET/" },
              { text: "ENG", link: "/Keel/EN/" },
              { text: "RUS", link: "/Keel/RU/" },
            ],
          },
        ],
        sidebar: {
          "/blog/": [
            {
              title: "Kõik postitused",
              collapsable: false,
              children: ["my-first-blog", "my-second-blog"],
            },
          ],
        },
      },
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
    footer: true,
  },
};
