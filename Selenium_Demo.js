require('chromedriver');
const {Builder, By, Key, until} = require('selenium-webdriver');

async function checkGoogle() {

    let driver = new Builder().forBrowser('chrome').build();

    await driver.get('http://google.com/ncr');
    await driver.sleep(5000);
    await driver.findElement(By.name('q')).sendKeys('What is 2 + 2?', Key.RETURN);
    await driver.sleep(5000);
    await driver.wait(until.elementLocated(By.id('cwos')), 10000);

    await driver.findElement(By.id('cwos')).getText().then(function (text) {
        if (text === '4') {
            console.log('Google can add today.');
        } else {
            console.log('Uh oh - run for the hills.');
        }
    });

    await driver.quit();
}

checkGoogle()
    .then(_ => console.log('Test run complete.'), e => console.error('FAILURE: ' + e));