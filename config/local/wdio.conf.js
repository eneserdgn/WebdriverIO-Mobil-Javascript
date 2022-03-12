const merge = require("deepmerge");
const wdioConf = require("../wdio.shared.conf");

exports.config = merge(wdioConf.config, {
    cucumberOpts: {
        tagExpression: '@CoffeeReading and @Modal',
        timeout: 120000,
    },
    waitforTimeout: 40000,
    maxInstances: 1,
    logLevel: 'silent',
    port: 4723,
    path: '/wd/hub',
    runner: 'local'
}, {clone: false})

