const {Given, When, Then} = require('@wdio/cucumber-framework');
const CoffeeReading = require("../pages/CoffeeReading");
const WelcomePage = require("../pages/WelcomePage");
const HomePage = require("../pages/HomePage");

Given(/^Faladdin is on the Coffee Reading Modal$/, async () => {
    await WelcomePage.clickExploreButton()
    await HomePage.clickTvTitle("Coffee Reading")
    await CoffeeReading.checkModalDescription()
});
Then(/^Faladdin should see Coffee Reading Modal$/, async () => {
    await CoffeeReading.checkModalDescription()
});
Then(/^Faladdin should see Message: "([^"]*)" on the Coffee Reading Modal$/, async (message) => {
    await CoffeeReading.checkModalDescriptionText(message)
});
Then(/^Faladdin should see Yes Button Text: "([^"]*)" on the Coffee Reading Modal$/, async (yesButton) => {
    await CoffeeReading.checkYesButton(yesButton)
});
When(/^Faladdin taps to Yes Button on the Coffee Reading Modal$/, async () => {
    await CoffeeReading.clickYesButton()
});
Then(/^Faladdin should see Yes Button Image on the Coffee Reading Modal$/, async () => {
    await CoffeeReading.checkYesButtonImage()
});
Then(/^Faladdin should see No Button Text: "([^"]*)" on the Coffee Reading Modal$/, async (noButton) => {
    await CoffeeReading.checkNoButton(noButton)
});
When(/^Faladdin taps to No Button on the Coffee Reading Modal$/, async () => {
    await CoffeeReading.clickNoButton()
});
Then(/^Faladdin should see No Button Image on the Coffee Reading Modal$/, async () => {
    await CoffeeReading.checkNoButtonImage()
});
Then(/^Faladdin should see Close Button on the Coffee Reading Modal$/, async () => {
    await CoffeeReading.checkCloseButton()
});
When(/^Faladdin taps to Close Button on the Coffee Reading Modal$/, async () => {
    await CoffeeReading.clickCloseButton()
});
Given(/^Faladdin is on the Coffee Reading Yes Modal$/, async () => {
    await WelcomePage.clickExploreButton()
    await HomePage.clickTvTitle("Coffee Reading")
    await CoffeeReading.clickYesButton()
    await CoffeeReading.checkDescriptionYesModal()
});
Then(/^Faladdin should see Description: "([^"]*)" on the Coffee Reading Yes Modal$/, async (description) => {
    await CoffeeReading.checkDescriptionTextYesModal(description)
});
Then(/^Faladdin should see Cards: "([^"]*)" on the Coffee Reading Yes Modal$/, async (card) => {
    await CoffeeReading.checkCardYesModal(card)
});
Then(/^Faladdin should see Close Button on the Coffee Reading Yes Modal$/, async () => {
    await CoffeeReading.checkCloseButtonYesModal()
});
When(/^Faladdin taps to Close Button on the Coffee Reading Yes Modal$/, async () => {
    await CoffeeReading.clickCloseButtonYesModal()
});
Given(/^Faladdin is on the Coffee Reading No Page$/, async () => {
    await WelcomePage.clickExploreButton()
    await HomePage.clickTvTitle("Coffee Reading")
    await CoffeeReading.clickNoButton()
    await CoffeeReading.checkDescriptionNoModal()
});
Then(/^Faladdin should see Description: "([^"]*)" on the Coffee Reading No Page$/, async (description) => {
    await CoffeeReading.checkDescriptionTextNoModal(description)
});
Then(/^Faladdin should see Image One on the Coffee Reading No Page$/, async () => {
    await CoffeeReading.checkImageOneNoModal()
});
Then(/^Faladdin should see Image Two on the Coffee Reading No Page$/, async () => {
    await CoffeeReading.checkImageTwoNoModal()
});
Then(/^Faladdin should see Image Three on the Coffee Reading No Page$/, async () => {
    await CoffeeReading.checkImageThreeNoModal()
});
Then(/^Faladdin should see Video View on the Coffee Reading No Page$/, async () => {
    await CoffeeReading.checkVideoViewNoModal()
});
Then(/^Faladdin should see Continue Button Text: "([^"]*)" on the Coffee Reading No Page$/, async (button) => {
    await CoffeeReading.checkContinueButtonNoModal(button)
});
When(/^Faladdin taps to Continue Button on the Coffee Reading No Page$/, async () => {
    await CoffeeReading.clickContinueButtonNoModal()
});
Then(/^Faladdin should see Back Button on the Coffee Reading No Page$/, async () => {
    await CoffeeReading.checkBackButtonNoModal()
});
When(/^Faladdin taps to Back Button on the Coffee Reading No Page$/, async () => {
    await CoffeeReading.clickBackButtonNoModal()
});
