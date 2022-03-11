const {config} = require("./wdio.conf");

config.capabilities = [
    {
        platformName: "Android",
        deviceName: 'Galaxy A51',
        platformVersion: "11",
        udid: "R58R312DAYM",
        appPackage: "com.faladdin.app",
        appActivity: "com.faladdin.app.ui.launcher.LauncherActivity",
    },
];

exports.config = config;
