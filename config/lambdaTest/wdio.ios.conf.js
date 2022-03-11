const {config} = require("./wdio.conf");
let d = (new Date()).toLocaleString('tr-TR', {timeZone: 'Europe/Istanbul'});

config.capabilities = [
    {
        build: `iOS Acceptance Test - ${d}`,
        app: '',
        platformName: "ios",
        platformVersion: "14",
        deviceName: 'iPhone 12 Mini',
        isRealMobile: false,
    },
];
config.user = '';
config.key = '';
config.hostname = 'beta-hub.lambdatest.com';
config.path = '/wd/hub';


exports.config = config;
