const {config} = require("./wdio.conf");
let d = (new Date()).toLocaleString('tr-TR', {timeZone: 'Europe/Istanbul'});

config.capabilities = [
    {
        build: `Android Acceptance Test - ${d}`,
        app: '',
        platformName: "Android",
        platformVersion: "9",
        deviceName: 'Galaxy S9 Plus',
        isRealMobile: true,
        fullReset: false,
        "appiumVersion": "1.21.0"
    },
];
config.user = '';
config.key = '';
config.hostname = 'beta-hub.lambdatest.com';
config.path = '/wd/hub';


exports.config = config;
