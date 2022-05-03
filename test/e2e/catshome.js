const config = require("../../nightwatch.conf.js");

// run `npm test` to test
module.exports = {
  before: function (browser, done) {
    server = require("../server")(done); // done is a callback that executes when the server is started
  },

  after: function () {
    server.close();
  },

  "Kurru Murru Varjupaik": function (client) {
    client
      .url("https://kta-20e.github.io/catshome/")
      .windowSize("current", 1447, 3717)
      .waitForElementVisible("body")
      .assert.titleEquals("Kurru Murru varjupaik")
      .saveScreenshot(`/dev/screens/catshome-main.png`)
      .useCss()
      .click(
        "#app > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > header > div:nth-of-type(2) > nav > div:nth-of-type(2) > div > button:nth-of-type(1) > span:nth-of-type(1)"
      )
      .click(
        "#app > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > header > div:nth-of-type(2) > nav > div:nth-of-type(2) > div > ul > li:nth-of-type(1) > a"
      )
      .click("body")
      .assert.visible(
        "#app > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > main > div:nth-of-type(1) > section > article:nth-of-type(1) > div > div > div:nth-of-type(1) > img"
      )
      .saveScreenshot(`/dev/screens/koduotsijad.png`)
      .end();
  },
};
