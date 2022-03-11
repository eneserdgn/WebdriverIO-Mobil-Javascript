const {config} = require("./wdio.conf");

config.capabilities = [
    {
        platformName: "iOS",
        deviceName: 'iPhone 12 mini',
        platformVersion: '15.0',
        //automationName: 'XCUITest',
        //app: "/Users/enes.erdogan/Downloads/Modanisa.app"
        app: "/Users/mustafa.denizli/Downloads/Modanisa.app",
        autoAcceptAlerts: true,
        autoGrantPermissions: true
    },
];

exports.config = config;
