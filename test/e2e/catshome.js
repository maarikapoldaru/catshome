const config = require("../../nightwatch.conf.js");

module.exports = {
  "Kurru Murru Varjupaik": function (client) {
    client
      .url("http://localhost:8080/catshome/")
      .windowSize("current", 1447, 3717)
      .waitForElementVisible("body")
      .assert.title("Kurru Murru varjupaik")
      .saveScreenshot(`${config.imgpath(browser)}catshome-main.png`)
      .useCss()
      .click("#app > div:nth-of-type(1) > div:nth-of-type(1) > header > div:nth-of-type(2) > nav > div:nth-of-type(2) > div > button:nth-of-type(1)")
      .click(
        "#app > div:nth-of-type(1) > div:nth-of-type(1) > header > div:nth-of-type(2) > nav > div:nth-of-type(2) > div > ul > li:nth-of-type(1) > a"
      )
      .click("body")
      .assert.visible(
        "#app > div:nth-of-type(1) > div:nth-of-type(1) > main > div:nth-of-type(1) > section > article:nth-of-type(1) > div > div > div:nth-of-type(1) > img"
      )
      .saveScreenshot(`${config.imgpath(browser)}koduotsijad.png`)
      .end();
  },
};
