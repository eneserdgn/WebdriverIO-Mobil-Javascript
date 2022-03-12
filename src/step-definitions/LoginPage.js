const {Given, When, Then} = require('@wdio/cucumber-framework');
const LoginPage = require("../pages/LoginPage");
const WelcomePage = require("../pages/WelcomePage");
const HomePage = require("../pages/HomePage");

Given(/^Faladdin is on the Login Page$/, async () => {
    await WelcomePage.clickExploreButton()
    await HomePage.clickLoginLogo()
    await LoginPage.checkLogo()
});
Then(/^Faladdin should see the Login Page$/, async () => {
    await LoginPage.checkLogo()
});
Then(/^Faladdin should see Icon on the Login Page$/, async () => {
    await LoginPage.checkLogo()
});
Then(/^Faladdin should see Create Your Account Text: "([^"]*)" on the Login Page$/, async (createYourAccount) => {
    await LoginPage.checkCreateYourAccount(createYourAccount)
});
Then(/^Faladdin should see Continue with Facebook Text: "([^"]*)" on the Login Page$/, async (facebook) => {
    await LoginPage.checkContinueFacebook(facebook)
});
Then(/^Faladdin should see Facebook Icon on the Login Page$/, async () => {
    await LoginPage.checkContinueFacebookIcon()
});
Then(/^Faladdin should see Continue with Google Text: "([^"]*)" on the Login Page$/, async (google) => {
    await LoginPage.checkContinueGoogle(google)
});
Then(/^Faladdin should see Google Icon on the Login Page$/, async () => {
    await LoginPage.checkContinueGoogleIcon()
});
Then(/^Faladdin should see Continue with Email Text: "([^"]*)" on the Login Page$/, async (email) => {
    await LoginPage.checkContinueEmail(email)
});
Then(/^Faladdin should see Terms And Policy Text: "([^"]*)" on the Login Page$/, async (termsAndPolicy) => {
    await LoginPage.checkTermsAndPolicy(termsAndPolicy)
});
Then(/^Faladdin should see Close Button on the Login Page$/, async () => {
    await LoginPage.checkCloseButton()
});
When(/^Faladdin taps to Close Button on the Login Page$/, async () => {
    await LoginPage.clickCloseButton()
});
When(/^Faladdin taps to Continue with Email on the Login Page$/, async () => {
    await LoginPage.clickContinueEmail()
});
Given(/^Faladdin is on the Login Page with Email$/, async () => {
    await WelcomePage.clickExploreButton()
    await HomePage.clickLoginLogo()
    await LoginPage.clickContinueEmail()
    await LoginPage.checkDescriptionEmail()
});
Then(/^Faladdin should see Description: "([^"]*)" on the Login Page with Email$/, async (description) => {
    await LoginPage.checkDescriptionTextEmail(description)
});
Then(/^Faladdin should see Edit Box Text: "([^"]*)" on the Login Page with Email$/, async (editBox) => {
    await LoginPage.checkEditBoxEmail(editBox)
});
Then(/^Faladdin should see Send Button Text: "([^"]*)" on the Login Page with Email$/, async (send) => {
    await LoginPage.checkSendEmail(send)
});
When(/^Faladdin taps Send Button on the Login Page with Email$/, async () => {
    await LoginPage.clickSendEmail()
});
Then(/^Faladdin should see Back Button on the Login Page with Email$/, async () => {
    await LoginPage.checkBackEmail()
});
When(/^Faladdin taps to Back Button on the Login Page with Email$/, async () => {
    await LoginPage.clickBackEmail()
});
When(/^Faladdin type Email: "([^"]*)" and taps Send Button on the Login Page with Email$/, async (editBox) => {
    await LoginPage.typeEditBoxEmail(editBox)
    await LoginPage.clickSendEmail()
});
Given(/^Faladdin is on the Magic Login Page with "([^"]*)" Email$/, async (editBox) => {
    await WelcomePage.clickExploreButton()
    await HomePage.clickLoginLogo()
    await LoginPage.clickContinueEmail()
    await LoginPage.typeEditBoxEmail(editBox)
    await LoginPage.clickSendEmail()
    await LoginPage.checkIconMagic()
});
Then(/^Faladdin should see Magic Description: "([^"]*)" on the Login Page with Email$/, async (description) => {
    await LoginPage.checkDescriptionMagic(description)
});
Then(/^Faladdin should see Magic Icon on the Login Page with Email$/, async () => {
    await LoginPage.checkIconMagic()
});
Then(/^Faladdin should see Open Email App Button: "([^"]*)" on the Login Page with Email$/, async (button) => {
    await LoginPage.checkOpenEmailAppButtonMagic(button)
});
Then(/^Faladdin should see Try Other Options: "([^"]*)" on the Login Page with Email$/, async (tryOther) => {
    await LoginPage.checkTryOther(tryOther)
});
Then(/^Faladdin should see Didnt Recive It: "([^"]*)" on the Login Page with Email$/, async (recive) => {
    await LoginPage.checkDidntReciveMagic(recive)
});
When(/^Faladdin taps to Open Email App on the Login Page with Email$/, async () => {
    await LoginPage.clickOpenEmailAppButtonMagic()
});
Given(/^Faladdin is open GMail "([^"]*)" on the Login Page with Email$/, async (editBox) => {
    await WelcomePage.clickExploreButton()
    await HomePage.clickLoginLogo()
    await LoginPage.clickContinueEmail()
    await LoginPage.typeEditBoxEmail(editBox)
    await LoginPage.clickSendEmail()
    await LoginPage.clickOpenEmailAppButtonMagic()
    await LoginPage.checkGmail()
});
Then(/^Faladdin should see Gmail$/, async () => {
    await LoginPage.checkGmail()
});
When(/^Faladdin taps to Let The Truth Unfold on the GMail$/, async () => {
    await LoginPage.clickTruthOnGmail()
});