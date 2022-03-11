const merge = require("deepmerge");
const expect = require("chai").expect;
const wdioConf = require("../wdio.shared.conf");

exports.config = merge(wdioConf.config, {
    cucumberOpts: {
        tagExpression: '',
        timeout: 300000,
    },
    waitforTimeout: 40000,
    maxInstances: 5,
    logLevel: 'silent',
    bail: 1,
    specFileRetries: 2,

    beforeScenario: async (world) => {
        try {
            let scenarioName = JSON.stringify(world.pickle.name).replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
            await browser.execute(`browserstack_executor: {"action": "setSessionName", "arguments": {"name":"${world.gherkinDocument.feature.name} - ${scenarioName}"}}`);
        } catch (e) {
            await expect(true, "Before Scenario da patladı").equal(false)
        }
    },
    afterScenario: async (world, result) => {
        try {
            if (result.passed) {
                await browser.execute(`browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed","reason": "Succeed"}}`);
            } else {
                let errorMsg = JSON.stringify(result.error).replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
                await browser.execute(`browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed","reason": "${errorMsg}"}}`);
            }
        } catch (e) {
        }
    },
}, {clone: false})

