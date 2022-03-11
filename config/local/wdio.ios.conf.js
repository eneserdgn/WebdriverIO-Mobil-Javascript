const {config} = require("./wdio.conf");

config.capabilities = [
    {
        platformName: "iOS",
        deviceName: 'iPhone 12 mini',
        platformVersion: '15.0',
        app: "/Users/enes.erdogan/Downloads/Faladdin.app",
        autoAcceptAlerts: true,
        autoGrantPermissions: true
    },
];

exports.config = config;
