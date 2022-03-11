const {config} = require("./wdio.conf");
let d = (new Date()).toLocaleString('tr-TR', {timeZone: 'Europe/Istanbul'});

config.capabilities = [
    {
        build: `User iOS Journey - ${d}`,
        //app: 'storage:filename=Payload.ipa',
        app: 'storage:filename=Modanisa.app',
        platformName: "iOS",
        //platformVersion: "14.5",
        //deviceName: 'iPhone 12 Pro Max Simulator',
        platformVersion: "15.2",
        deviceName: 'iPhone 11 Pro',
        fullReset: false,
        "acceptInsecureCerts": true,
        //"appiumVersion": "1.21.0",
    },
];
//config.user = 'oauth-enes.erdgn32-fddba';
config.user = 'oauth-mustafa.denizli-4a538';
config.key = 'b4d18b5d-cea0-4be0-ab3c-f49f7107d0e0';
//config.key = '7992889a-66d2-4705-b0ff-4d2047edaf93';
config.protocol = 'https';
config.hostname = 'ondemand.eu-central-1.saucelabs.com';
config.path = '/wd/hub';
config.port = 443;
config.region = 'eu';

exports.config = config;
