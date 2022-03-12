const {Given, When, Then} = require('@wdio/cucumber-framework');
const WelcomePage = require("../pages/WelcomePage");
const ElementHelper = require('../common/ElementHelper')

Given(/^Faladdin is open the App$/, async () => {
    await WelcomePage.checkOpenApp()
});
Then(/^Faladdin should see Icon on the Welcome Page$/, async () => {
    await WelcomePage.checkLogo()
});
Then(/^Faladdin should see Welcome: "([^"]*)" on the Welcome Page$/, async (welcomeText) => {
    await WelcomePage.checkWelcomeText(welcomeText)
});
Then(/^Faladdin should see Description: "([^"]*)" on the Welcome Page$/, async (descriptionText) => {
    await WelcomePage.checkWelcomeDescription(descriptionText)
});
Then(/^Faladdin should see Expolore Button: "([^"]*)" on the Welcome Page$/, async (exploreButtonText) => {
    await WelcomePage.checkExploreButton(exploreButtonText)
});
Then(/^Faladdin should see Video View on the Welcome Page$/, async () => {
    await WelcomePage.checkVideo()
});
When(/^Faladdin taps to Explore Button on the Welcome Page$/, async () => {
    await WelcomePage.clickExploreButton()
});
Given(/^Faladdin is on the Welcome Page$/, async () => {
    await WelcomePage.checkLogo()
});
When(/^Faladdin taps to Phone Back$/, async () => {
    await ElementHelper.phoneBack()
});