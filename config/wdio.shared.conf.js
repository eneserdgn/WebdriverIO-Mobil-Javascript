const chai = require("chai");
const rimraf = require("rimraf");
const allure = require("allure-commandline");
const wdioParallel = require('wdio-cucumber-parallel-execution');

const sourceSpecDirectory = `./src/features`;
let tmpSpecDirectory = `${sourceSpecDirectory}/tmp`;
let featureFilePath = `${tmpSpecDirectory}/*.feature`;

exports.config = {
    specs: [
        featureFilePath
    ],
    exclude: [],
    framework: 'cucumber',
    reporters:
        ['spec',
            ['allure', {
                outputDir: './Reports/Allure/allure-results',
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: true,
                useCucumberStepReporter: true,
            }],
        ],
    cucumberOpts: {
        require: ['./src/step-definitions/*.js'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        format: ['pretty'],
        snippets: true,
        source: true,
        profile: [],
        strict: false,
        tagExpression: '',
        timeout: 300000,
        ignoreUndefinedDefinitions: false
    },
    maxInstances: 1,
    logLevel: 'silent',
    bail: 0,
    waitforTimeout: 40000,
    connectionRetryTimeout: 300000,
    connectionRetryCount: 5,
    coloredLogs: true,
    specFileRetries: 0,
    specFileRetriesDelay: 0,
    specFileRetriesDeferred: false
    ,
    onPrepare: async (config, capabilities) => {
        try {
            rimraf("./allure-report", function () {
                console.log("Allure Report Deleted");
            });
            rimraf("./Reports/Allure/allure-results", function () {
                console.log("Allure Json Files deleted");
            });
            await wdioParallel.performSetup({
                sourceSpecDirectory: sourceSpecDirectory,
                tmpSpecDirectory: tmpSpecDirectory,
                cleanTmpSpecDirectory: true
            });
            featureFilePath = `${tmpSpecDirectory}/*.feature`;
        } catch (e) {
            await console.info("Silinecek dosya yok")
        }
    },
    before: async (capabilities, specs, browser) => {
        require('expect-webdriverio');
        global.wdioExpect = global.expect;
        global.expect = chai.expect;
    },
    onComplete: function (exitCode, config, capabilities, results) {
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate', './Reports/Allure/allure-results', '--clean'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                5000)

            generation.on('exit', function (exitCode) {
                clearTimeout(generationTimeout)

                if (exitCode !== 0) {
                    return reject(reportError)
                }
                console.log('Allure report successfully generated')
                resolve()
            })
        })
    },
    beforeScenario: async (world) => {
        try {
            let scenarioName = JSON.stringify(world.pickle.name).replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
            await browser.reset()
            await console.log('\u001b[' + 34 + 'm' + '  Scenario name : ' + scenarioName + '\u001b[0m')
        } catch (e) {
            Assertion.fail(e)
        }
    },
    beforeFeature: async (uri, feature) => {
        await console.log('\u001b[' + 32 + 'm' + 'Feature name : ' + feature.name + '\u001b[0m')
    },

    beforeStep: async (step, scenario) => {
        await console.log('\u001b[' + 33 + 'm' + '      Step Start : ' + step.text + '\u001b[0m')
    },
    afterStep: async (step, scenario, result) => {
        if (await result.passed == true) {
            await console.log('\u001b[' + 32 + 'm' + '    ✓ Step Succeed : ' + step.text + '\u001b[0m')
        } else {
            await console.log('\u001b[' + 31 + 'm' + '    ✖ Step Fail : ' + step.text + '\u001b[0m')
        }
    },


}
