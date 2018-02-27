require('chromedriver');
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
//var _ = require('underscore');
var VARS = {};

var globalTimeout = 60*1000;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

// driver.controlFlow().on('uncaughtException', function(err) {
//     console.log('There was an uncaught exception: ' + err);
// });

driver.get("www.google.com"); 

driver.findElement(By.id("lst-ib")).sendKeys("what is 2 + 2?"); 
driver.findElement(By.name("Google Search")).submit();
driver.sleep(10000);
driver.findElement(By.id('cwos')).getText().then(function (text) {
    var hasText = text.indexOf("4") !== -1;
    if (!hasText) {
        driver.quit();
        console.log('Google cannot add today.');
    }
});

driver.quit();
