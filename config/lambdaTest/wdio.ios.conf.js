const {config} = require("./wdio.conf");
let d = (new Date()).toLocaleString('tr-TR', {timeZone: 'Europe/Istanbul'});

config.capabilities = [
    {
        build: `User iOS Journey - ${d}`,
        app: 'lt://APP10020921644168749578306',
        platformName: "ios",
        platformVersion: "14",
        deviceName: 'iPhone 12 Mini',
        isRealMobile: false,
    },
];
config.user = 'enes.erdogan';
config.key = 'fGRUrLvANS8p5ZkPqjaCMfeFnvojZE0vstV1BNjn5kxjkhVpLc';
config.hostname = 'beta-hub.lambdatest.com';
config.path = '/wd/hub';


exports.config = config;
