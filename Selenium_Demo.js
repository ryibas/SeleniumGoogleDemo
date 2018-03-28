var chrome = require('selenium-webdriver/chrome');
require('chromedriver');

const {Builder, By, Key, until} = require('selenium-webdriver');

////////////////////////////////////////////////////////////////////////////////////////////////
// Function to test whether or not searching Google for the answer for 2 + 2 does indeed = 4.
async function checkGoogle() {

    let driver = new Builder().forBrowser('chrome').build();
    
    await driver.get('http://google.com');
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