const {config} = require("./wdio.conf");
let d = (new Date()).toLocaleString('tr-TR', {timeZone: 'Europe/Istanbul'});

config.capabilities = [
    {
        build: `User Android Journey - ${d}`,
        app: 'storage:filename=app-debug.apk',
        platformName: "Android",
        platformVersion: "Android 9",
        deviceName: 'Samsung_Galaxy_S9_Plus_real',
        fullReset: false,
        //"appiumVersion": "1.21.0",
        //"acceptInsecureCerts": true,
    },
];


config.user = 'oauth-enes.erdogan-83e09';
config.key = 'e324c5f9-bf08-4e9e-99a2-a0b03be8e961';
config.protocol = 'https';
config.hostname = 'ondemand.eu-central-1.saucelabs.com';
config.path = '/wd/hub';
config.port = 443;
config.region = 'eu';

exports.config = config;
