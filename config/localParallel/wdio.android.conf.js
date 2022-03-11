const {config} = require("./wdio.conf");

config.capabilities = [
    {
        platformName: "Android",
        platformVersion: "11",
        appPackage: "com.faladdin.app",
        appActivity: "com.faladdin.app.ui.launcher.LauncherActivity",
    },
];

exports.config = config;
