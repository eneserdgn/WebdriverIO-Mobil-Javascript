const {config} = require("./wdio.conf");
let d = (new Date()).toLocaleString('tr-TR', {timeZone: 'Europe/Istanbul'});

config.capabilities = [
    {
        project: "Loyalty",
        build: `User iOS Journey - ${d}`,
        app: "bs://99e1dad1029ba2569f64afdd920b4511f4e495b6",
        platformName: "iOS",
        platformVersion: '14.5',
        deviceName: 'iPhone 12 Pro Max',
        realMobile: true,
        fullReset: false,
        "browserstack.appium_version": "1.21.0",
        //"browserstack.networkLogs": "true",
        //"browserstack.acceptInsecureCerts": "true",
        //"browserstack.networkProfile": "4g-lte-advanced-good",
        //'browserstack.resignApp': 'false'
    },
];
config.user = 'eneserdoan_5ocBua';
config.key = 'CXTs5aPDQsX9NMCVaj99';
config.protocol = 'https';
config.hostname = 'hub.browserstack.com';
config.path = '/wd/hub';

exports.config = config;

