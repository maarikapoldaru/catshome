module.exports = {
  base: "/catshome/",
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
};
