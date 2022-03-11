const {config} = require("./wdio.conf");
let d = (new Date()).toLocaleString('tr-TR', {timeZone: 'Europe/Istanbul'});

config.capabilities = [
    {
        build: `Android Acceptance Test - ${d}`,
        app: 'storage:filename=Faladddin.apk',
        platformName: "Android",
        platformVersion: "Android 9",
        deviceName: 'Samsung_Galaxy_S9_Plus_real',
        fullReset: false,
        //"appiumVersion": "1.21.0",
        //"acceptInsecureCerts": true,
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
