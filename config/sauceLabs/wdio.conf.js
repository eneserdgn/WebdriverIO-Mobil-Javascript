const merge = require("deepmerge");
const wdioConf = require("../wdio.shared.conf");
const {expect} = require("chai");

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

            await browser.execute(`sauce:job-name=${world.gherkinDocument.feature.name} - ${scenarioName}`);
        } catch (e) {
            await expect(true, "Before Scenario da patladı").equal(false)
        }
    },
    afterScenario: async (world, result) => {
        try {
            if (result.passed) {
                await browser.execute(`sauce:job-result=passed`);
            } else {
                let errorMsg = JSON.stringify(result.error).replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
                await browser.execute(`sauce:job-result=failed`);
            }
        } catch (e) {
        }
    },
}, {clone: false})

