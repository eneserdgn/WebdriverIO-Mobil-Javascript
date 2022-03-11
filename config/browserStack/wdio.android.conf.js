const {config} = require("./wdio.conf");
let d = (new Date()).toLocaleString('tr-TR', {timeZone: 'Europe/Istanbul'});

config.capabilities = [
    {
        project: "WebdriverIO",
        build: `Android Acceptance Test- ${d}`,
        app: "",
        platformName: "Android",
        platformVersion: "9.0",
        deviceName: 'Samsung Galaxy S9 Plus',
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
