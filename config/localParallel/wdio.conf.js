const merge = require("deepmerge");
const wdioConf = require("../wdio.shared.conf");



exports.config = merge(wdioConf.config, {
    cucumberOpts: {
        tagExpression: '',
        timeout: 120000,
    },
    waitforTimeout: 40000,
    maxInstances: 1,
    logLevel: 'silent',
    port: 4444,
    path: '/wd/hub',
    hostname: '0.0.0.0'
}, {clone: false})

