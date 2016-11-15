// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#my-wrapper-element-id', 5000)
      .assert.elementPresent('h1')
      .assert.containsText('h1', 'Hello world!')
      .assert.elementCount('p', 1)
      .end()
  }
}
