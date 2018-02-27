require('chromedriver');
var assert = require('asserts');
const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://www.google.com/ncr');
    await driver.findElement(By.name('q')).sendKeys('what is 2 + 2?', Key.RETURN);
    //await driver.wait(until.titleIs('webdriver - Google Search'), 30000);
    await driver.findElement(By.id('cwos'))
        .getText().then(val => {
            console.log('in assertion');
            assert.equal('4', val);
        });
  } finally {
    await driver.quit();
  }
})();