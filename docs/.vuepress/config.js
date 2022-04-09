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
      title: "Catshome",
      description: "Tere tulemast kasside kodulehele!",
    },
  },

  themeConfig: {
    repo: "/catshome/",
    docsDir: "docs",
    logo: "/assets/img/cat.png",
    locales: {
      "/": {
        search: true,

        nav: [
          { text: "Home", link: "/" },
          { text: "Otsivad kodu", link: "/Koduotsijad/" },
          { text: "Uues kodus", link: "/Kodus/" },
          { text: "Tingimused Loomavõtjale", link: "/Tingimused/" },
          {
            text: "Toeta meid",
            ariaLabel: "Menu1",
            items: [
              { text: "Tule vabatahtlikuks", link: "/Vabatahtlik" },
              { text: "Anneta", link: "/Anneta" },
            ],
            link: "/Vabatahtlik/",
          },
          { text: "Kontakt", link: "/Kontakt/" },
          {
            text: "Languages",
            ariaLabel: "Language Menu",
            items: [
              { text: "EST", link: "/language/estonian/" },
              { text: "ENG", link: "/language/english/" },
              { text: "RUS", link: "/language/russian/" },
            ],
          },
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
