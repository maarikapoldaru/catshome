const dp = require("./defaultPath.cjs");

// The following makes it easier to properly edit config using only VSC
/** @type {import("../../node_modules/vuepress/config.js").Config} */
const CONFIG = {
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
              { text: "Otsivad kodu", link: "/HomeSeekers/" },
              { text: "Uues kodus", link: "/AtHome/" },
            ],
          },
          {
            text: "Kasulikku",
            ariaLabel: "FAQ menu",
            items: [
              { text: "Tingimused loomavõtjale", link: "/Conditions/" },
              { text: "Korduma kippuvad küsimused", link: "/KKK/" },
            ],
          },
          {
            text: "Toeta meid",
            ariaLabel: "Support Menu",
            items: [
              { text: "Tule vabatahtlikuks", link: "/Volunteer" },
              { text: "Anneta", link: "/Donate" },
            ],
          },
          { text: "Külasta meid", link: "/Visit/" },
          { text: "Kontakt", link: "/Contact/" },
          { text: "Blogi", link: "/blog/" },
          { text: "Asukoht", link: "/Location/" },
          { text: "Galerii", link: "/Gallery/" },
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
              { text: "Looking for a home", link: dp("/en/HomeSeekers/") },
              { text: "In a new home", link: dp("/en/AtHome/") },
            ],
          },
          {
            text: "Useful",
            ariaLabel: "FAQ menu",
            items: [
              { text: "Conditions for the animal keeper", link: dp("/en/Conditions/") },
              { text: "Frequently asked Questions", link: dp("/en/FAQ/") },
            ],
          },
          {
            text: "Support us",
            ariaLabel: "Support Menu",
            items: [
              { text: "Become a volunteer", link: dp("/en/Volunteer") },
              { text: "Donate", link: dp("/en/Donate") },
            ],
          },
          { text: "Visit us", link: dp("/en/Visit/") },
          { text: "Contact", link: dp("/en/Contact/") },
          { text: "Blog", link: dp("/en/blog/") },
          { text: "Location", link: dp("/en/Location/") },
          { text: "Gallery", link: dp("/en/Gallery/") },
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

module.exports = CONFIG;
