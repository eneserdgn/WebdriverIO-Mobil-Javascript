const {Given, When, Then} = require('@wdio/cucumber-framework');
const HomePage = require("../pages/HomePage");
const WelcomePage = require("../pages/WelcomePage");

Given(/^Faladdin is on the Home Page$/, async () => {
    await WelcomePage.clickExploreButton()
    await HomePage.checkLogo()
});
Then(/^Faladdin should see the Home Page$/, async () => {
    await HomePage.checkLogo()
});
Then(/^Faladdin should see Faladdin Icon the Home Page$/, async () => {
    await HomePage.checkLogo()
});
Then(/^Faladdin should see Login Icon the Home Page$/, async () => {
    await HomePage.checkLoginLogo()
});
When(/^Faladdin taps to Login on the Home Page$/, async () => {
    await HomePage.clickLoginLogo()
});
Then(/^Faladdin should see Credit Icon the Home Page$/, async () => {
    await HomePage.checkCreditLogo()
});
Then(/^Faladdin should see Credit: "([^"]*)" the Home Page$/, async (credit) => {
    await HomePage.checkCreditText(credit)
});
When(/^Faladdin taps to Credit on the Home Page$/, async () => {
    await HomePage.clickCredit()
});
Then(/^Faladdin should see Product Title: "([^"]*)" the Home Page$/, async (productTitle) => {
    await HomePage.checkProductTitle(productTitle)
});
Then(/^Faladdin should see Horoscope Title: "([^"]*)" the Home Page$/, async (horoscopeTitle) => {
    await HomePage.checkHoroscopeTvTitle(horoscopeTitle)
});
When(/^Faladdin taps Horoscope: "([^"]*)" the Home Page$/, async (horoscope) => {
    await HomePage.clickHoroscopeTvTitle(horoscope)
});
Then(/^Faladdin should see Horoscope Date: "([^"]*)" the Home Page$/, async (horoscopeDate) => {
    await HomePage.checkHoroscopeTvDate(horoscopeDate)
});
Then(/^Faladdin should see Horoscope Read More: "([^"]*)" the Home Page$/, async (horoscopeReadMore) => {
    await HomePage.checkHoroscopeTvReadMore(horoscopeReadMore)
});
When(/^Faladdin taps Horoscope Read More the Home Page$/, async () => {
    await HomePage.clickHoroscopeTvReadMore()
});
Then(/^Faladdin should see Tv Title: "([^"]*)" the Home Page$/, async (tvTitle) => {
    await HomePage.checkTvTitleOver(tvTitle)
});
When(/^Faladdin taps to Tv Title: "([^"]*)" on the HomePage$/, async (tvTitle) => {
    await HomePage.clickTvTitle(tvTitle)
});
Then(/^Faladdin should see selected Navigation Button: "([^"]*)" the Home Page$/, async (selectedNav) => {
    await HomePage.checkSelectedNavigationButton(selectedNav)
});
Then(/^Faladdin should see unselected Navigation Button: "([^"]*)" the Home Page$/, async (unSelectedNav) => {
    await HomePage.checkUnSelectedNavigationButton(unSelectedNav)
});