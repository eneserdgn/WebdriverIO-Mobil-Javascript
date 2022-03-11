const {config} = require("./wdio.conf");
let d = (new Date()).toLocaleString('tr-TR', {timeZone: 'Europe/Istanbul'});

config.capabilities = [
    {
        build: `iOS Acceptance Tests - ${d}`,
        app: 'storage:filename=Faladdin.app',
        platformName: "iOS",
        platformVersion: "15.2",
        deviceName: 'iPhone 11 Pro',
        fullReset: false,
        "acceptInsecureCerts": true,
        //"appiumVersion": "1.21.0",
    },
];
config.user = '';
config.key = '';
config.protocol = 'https';
config.hostname = 'ondemand.eu-central-1.saucelabs.com';
config.path = '/wd/hub';
config.port = 443;
config.region = 'eu';

exports.config = config;
