const {config} = require("./wdio.conf");
let d = (new Date()).toLocaleString('tr-TR', {timeZone: 'Europe/Istanbul'});

config.capabilities = [
    {
        build: `User Android Journey - ${d}`,
        app: 'lt://APP10020521644938777900294',
        platformName: "Android",
        platformVersion: "9",
        deviceName: 'Galaxy S9 Plus',
        isRealMobile: true,
        fullReset: false,
        //"acceptInsecureCerts": true,
        "appiumVersion": "1.21.0"
    },
];
config.user = 'enes.erdogan';
config.key = 'fGRUrLvANS8p5ZkPqjaCMfeFnvojZE0vstV1BNjn5kxjkhVpLc';
config.hostname = 'beta-hub.lambdatest.com';
config.path = '/wd/hub';


exports.config = config;
