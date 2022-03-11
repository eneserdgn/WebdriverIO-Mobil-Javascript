const {Given, When, Then} = require('@wdio/cucumber-framework');
const WelcomePage = require("../pages/WelcomePage");

Then(/^Nisa should see title: "([^"]*)" in Dashboard Main Page$/, async (text) => {
    await WelcomePage.checkLogo()
});
