# SeleniumGoogleDemo



let driver = new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().setMobileEmulation({deviceName: 'Nexus 6P'}).addArguments('test-type')).build();


Docs - http://seleniumhq.github.io/selenium/docs/api/javascript/index.html