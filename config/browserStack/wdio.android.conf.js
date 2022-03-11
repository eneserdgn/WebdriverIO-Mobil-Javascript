const {config} = require("./wdio.conf");
let d = (new Date()).toLocaleString('tr-TR', {timeZone: 'Europe/Istanbul'});

config.capabilities = [
    {
        project: "Loyalty",
        build: `User Android Journey - ${d}`,
        //app: process.env.APP_ID,
        app: "bs://5946c641a5b81c88295242d8da6f9700a9c63094",
        platformName: "Android",
        platformVersion: "9.0",
        deviceName: 'Samsung Galaxy S9 Plus',
        realMobile: true,
        fullReset: false,
        "browserstack.appium_version": "1.21.0",
        //"browserstack.networkLogs": "true",
        //"browserstack.acceptInsecureCerts": "true",                   bu ikisinden biri yavaşlatıyo
        //"browserstack.networkProfile": "4g-lte-advanced-good",        bu ikisinden biri yavaşlatıyo
    },
];
config.user = 'eneserdoan_5ocBua';
config.key = 'CXTs5aPDQsX9NMCVaj99';
config.protocol = 'https';
config.hostname = 'hub.browserstack.com';
config.path = '/wd/hub';

exports.config = config;
