const {config} = require("./wdio.conf");
let d = (new Date()).toLocaleString('tr-TR', {timeZone: 'Europe/Istanbul'});

config.capabilities = [
    {
        project: "WebdriverIO",
        build: `iOS Acceptance Test - ${d}`,
        app: "",
        platformName: "iOS",
        platformVersion: '14.5',
        deviceName: 'iPhone 12 Pro Max',
        realMobile: true,
        fullReset: false,
        "browserstack.appium_version": "1.21.0",
    },
];
config.user = '';
config.key = '';
config.protocol = 'https';
config.hostname = 'hub.browserstack.com';
config.path = '/wd/hub';

exports.config = config;

