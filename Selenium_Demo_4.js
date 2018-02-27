require('chromedriver');
const {Builder, By, Key, until} = require('selenium-webdriver');

async function checkGoogle() {
    let driver = new Builder().forBrowser('chrome').build();
    await driver.get('http://google.com/ncr');
    await driver.findElement(By.name('q')).sendKeys('What is 2 + 2?', Key.RETURN);
    await driver.wait(until.elementLocated(By.id('cwos')), 10000);
    await driver.quit();
}

checkGoogle()
    .then(_ => console.log('SUCCESS'), e => console.error('FAILURE: ' + e));