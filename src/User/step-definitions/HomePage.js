const {Given, When, Then} = require('@wdio/cucumber-framework');
const HomePage = require("../pages/HomePage");

Then(/^Nisa should see title: "([^"]*)" in Dashboard Main Page$/, async (text) => {
    await HomePage.checkDashboardMainPage(text)
});
When(/^Nisa taps to Back Button in Dashboard Main Page$/, async () => {
    await HomePage.clickBackButton()
});
Then(/^Nisa should see Confirmed Points Name: "([^"]*)" in Dashboard Main Page$/, async (text) => {
    await HomePage.checkConfirmedPointsName(text)
});
Then(/^Nisa should see Confirmed Points: "([^"]*)" in Dashboard Main Page$/, async (text) => {
    await HomePage.checkConfirmedPoints(text)
});
Then(/^Nisa should see Pending Points Name: "([^"]*)" in Dashboard Main Page$/, async (text) => {
    await HomePage.checkPendingPointsName(text)
});
Then(/^Nisa should see Pending Points: "([^"]*)" in Dashboard Main Page$/, async (text) => {
    await HomePage.checkPendingPoints(text)
});
Then(/^Nisa should not see Pending Points in Dashboard Main Page$/, async () => {
    await HomePage.checkNotPendingPoints()
});
Then(/^Nisa should see Welcome Text: "([^"]*)" in Dashboard Main Page$/, async (text) => {
    await HomePage.checkWelcomeText(text)
});
Then(/^Nisa should see Description Text: "([^"]*)" in Dashboard Main Page$/, async (text) => {
    await HomePage.checkDescriptionText(text)
});
Then(/^Nisa should see Her Name: "([^"]*)" in Dashboard Main Page$/, async (text) => {
    await HomePage.checkHerName(text)
});
Then(/^Nisa should not see Her Name in Dashboard Main Page$/, async () => {
    await HomePage.checkNotHerName()
});
When(/^Nisa taps to Point Earning in Dashboard Main Page$/, async () => {
    await HomePage.clickEarningPoints()
});
When(/^Nisa taps to Rewards in Dashboard Main Page$/, async () => {
    await HomePage.clickRewards()
});
When(/^Nisa taps to My Earned Gifts in Dashboard Main Page$/, async () => {
    await HomePage.clickMyEarnedGifts()
});
When(/^Nisa taps to My Tier Status in Dashboard Main Page$/, async () => {
    await HomePage.clickMyTierStatus()
});
When(/^Nisa taps to Faq in Dashboard Main Page$/, async () => {
    await HomePage.clickFaq()
});
Then(/^Nisa should see Point Earning: "([^"]*)" in Dashboard Main Page$/, async (text) => {
    await HomePage.checkEarningPoints(text)
});
Then(/^Nisa should see Rewards: "([^"]*)" in Dashboard Main Page$/, async (text) => {
    await HomePage.checkRewards(text)
});
Then(/^Nisa should see My Earned Gifts: "([^"]*)" in Dashboard Main Page$/, async (text) => {
    await HomePage.checkMyEarnedGifts(text)
});
Then(/^Nisa should see My Tier Status: "([^"]*)" in Dashboard Main Page$/, async (text) => {
    await HomePage.checkMyTierStatus(text)
});
Then(/^Nisa should see Faq: "([^"]*)" in Dashboard Main Page$/, async (text) => {
    await HomePage.checkFaq(text)
});
When(/^Nisa taps to Phone back button in Dashboard Main Page$/, async () => {
    await HomePage.clickDashboardPhoneBack()
});