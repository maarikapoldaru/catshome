const chromedriver = require("chromedriver");

require("dotenv").config();

module.exports = {
  src_folders: ["test/e2e"],
  page_objects_path: ["node_modules/nightwatch/examples/pages/"],

  test_workers: false,

  selenium: {
    start_process: false,

    cli_args: {
      "webdriver.chrome.driver": chromedriver.path,
    },
  },

  webdriver: {
    start_process: false,
  },

  test_settings: {
    default: {
      selenium_port: 4444,
      selenium_host: "${SELENIUM_HOST}",

      screenshots: {
        enabled: true,
        path: "screens",
        on_failure: true,
      },

      desiredCapabilities: {
        browserName: "chrome",
        chromeOptions: {
          w3c: false,
          args: ["--no-sandbox"],
        },
      },
    },
  },
};
