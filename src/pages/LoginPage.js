const ElementHelper = require('../common/ElementHelper')

const logo_Faladdin = browser.isAndroid ? `android=new UiSelector().resourceId("com.faladdin.app:id/imgView")` : `-ios predicate string: name CONTAINS 'dashboard-main-page-title'`
const txt_CreateYourAccount = browser.isAndroid ? `android=new UiSelector().className("android.widget.TextView")` : `-ios predicate string: name CONTAINS 'dashboard-main-page-title'`
const btn_Facebook = browser.isAndroid ? `android=new UiSelector().resourceId("com.faladdin.app:id/tvFacebook")` : `-ios predicate string: name CONTAINS 'dashboard-main-page-title'`
const icon_Facebook = browser.isAndroid ? `//android.widget.RelativeLayout[@resource-id="com.faladdin.app:id/relFacebook"]/android.widget.ImageView` : `-ios predicate string: name CONTAINS 'dashboard-main-page-title'`
const btn_Google = browser.isAndroid ? `android=new UiSelector().resourceId("com.faladdin.app:id/tvGoogle")` : `-ios predicate string: name CONTAINS 'dashboard-main-page-title'`
const icon_Google = browser.isAndroid ? `//android.widget.RelativeLayout[@resource-id="com.faladdin.app:id/relGoogle"]/android.widget.ImageView` : `-ios predicate string: name CONTAINS 'dashboard-main-page-title'`
const btn_Email = browser.isAndroid ? `android=new UiSelector().resourceId("com.faladdin.app:id/btnMail")` : `-ios predicate string: name CONTAINS 'dashboard-main-page-title'`
const txt_TermsAndPolicy = browser.isAndroid ? `android=new UiSelector().resourceId("com.faladdin.app:id/tvTerm")` : `-ios predicate string: name CONTAINS 'dashboard-main-page-title'`
const btn_Close = browser.isAndroid ? `android=new UiSelector().resourceId("com.faladdin.app:id/imgBtnClose")` : `-ios predicate string: name CONTAINS 'dashboard-main-page-title'`
const txt_DescriptionEmail = browser.isAndroid ? `android=new UiSelector().resourceId("com.faladdin.app:id/textViewTitle")` : `-ios predicate string: name CONTAINS 'dashboard-main-page-title'`
const editBox_Email = browser.isAndroid ? `android=new UiSelector().resourceId("com.faladdin.app:id/editTextEmail")` : `-ios predicate string: name CONTAINS 'dashboard-main-page-title'`
const btn_SendEmail = browser.isAndroid ? `android=new UiSelector().resourceId("com.faladdin.app:id/btnSend")` : `-ios predicate string: name CONTAINS 'dashboard-main-page-title'`
const btn_BackEmail = browser.isAndroid ? `android=new UiSelector().resourceId("com.faladdin.app:id/imgBtnBack")` : `-ios predicate string: name CONTAINS 'dashboard-main-page-title'`
const icon_Magic = browser.isAndroid ? `android=new UiSelector().resourceId("com.faladdin.app:id/imageViewIcon")` : `-ios predicate string: name CONTAINS 'dashboard-main-page-title'`
const txt_DescriptionMagic = browser.isAndroid ? `android=new UiSelector().resourceId("com.faladdin.app:id/tvDeatil")` : `-ios predicate string: name CONTAINS 'dashboard-main-page-title'`
const btn_OpenEmailAppMagic = browser.isAndroid ? `android=new UiSelector().resourceId("com.faladdin.app:id/btnOpenEmail")` : `-ios predicate string: name CONTAINS 'dashboard-main-page-title'`
const btn_TryOtherMagic = browser.isAndroid ? `android=new UiSelector().resourceId("com.faladdin.app:id/tvTryOther")` : `-ios predicate string: name CONTAINS 'dashboard-main-page-title'`
const btn_ReciveMagic = browser.isAndroid ? `android=new UiSelector().resourceId("com.faladdin.app:id/textView4")` : `-ios predicate string: name CONTAINS 'dashboard-main-page-title'`
const editbox_SearchGmail = browser.isAndroid ? `android=new UiSelector().resourceId("com.google.android.gm:id/open_search")` : `-ios predicate string: name CONTAINS 'dashboard-main-page-title'`
const btn_MailsGmail = browser.isAndroid ? `android=new UiSelector().resourceId("com.google.android.gm:id/senders")` : `-ios predicate string: name CONTAINS 'dashboard-main-page-title'`
const btn_Snipped = browser.isAndroid ? `android=new UiSelector().resourceId("com.google.android.gm:id/sender_name")` : `-ios predicate string: name CONTAINS 'dashboard-main-page-title'`
const btn_Truth = browser.isAndroid ? `android=new UiSelector().descriptionContains("Let The Truth Unfold")` : `-ios predicate string: name CONTAINS 'dashboard-main-page-title'`


class LoginPage {
    async checkLogo() {
        await ElementHelper.elementCheck(logo_Faladdin)
    }

    async checkCreateYourAccount(text) {
        await ElementHelper.elementCheckTextEquals(txt_CreateYourAccount, text)
    }

    async checkContinueFacebook(text) {
        await ElementHelper.elementCheckTextEquals(btn_Facebook, text)
    }

    async checkContinueFacebookIcon() {
        await ElementHelper.elementCheck(icon_Facebook)
    }

    async checkContinueGoogle(text) {
        await ElementHelper.elementCheckTextEquals(btn_Google, text)
    }

    async checkContinueGoogleIcon() {
        await ElementHelper.elementCheck(icon_Google)
    }

    async checkContinueEmail(text) {
        await ElementHelper.elementCheckTextEquals(btn_Email, text)
    }

    async checkTermsAndPolicy(text) {
        await ElementHelper.elementCheckTextEquals(txt_TermsAndPolicy, text)
    }

    async checkCloseButton() {
        await ElementHelper.elementCheck(btn_Close)
    }

    async clickCloseButton() {
        await ElementHelper.elementClick(btn_Close)
    }

    async clickContinueEmail() {
        await ElementHelper.elementClick(btn_Email)
    }

    async checkDescriptionEmail() {
        await ElementHelper.elementCheck(txt_DescriptionEmail)
    }

    async checkDescriptionTextEmail(text) {
        await ElementHelper.elementCheckTextEquals(txt_DescriptionEmail, text)
    }

    async checkEditBoxEmail(text) {
        await ElementHelper.elementCheckTextEquals(editBox_Email, text)
    }

    async typeEditBoxEmail(text) {
        await ElementHelper.elementSendKey(editBox_Email, text)
    }

    async checkSendEmail(text) {
        await ElementHelper.elementCheckTextEquals(btn_SendEmail, text)
    }

    async clickSendEmail() {
        await ElementHelper.elementClick(btn_SendEmail)
    }

    async checkBackEmail() {
        await ElementHelper.elementCheck(btn_BackEmail)
    }

    async clickBackEmail() {
        await ElementHelper.elementClick(btn_BackEmail)
    }

    async checkIconMagic() {
        await ElementHelper.elementCheck(icon_Magic)
    }

    async checkDescriptionMagic(text) {
        await ElementHelper.elementCheckTextEquals(txt_DescriptionMagic, text)
    }

    async checkOpenEmailAppButtonMagic(text) {
        await ElementHelper.elementCheckTextEquals(btn_OpenEmailAppMagic, text)
    }

    async checkTryOther(text) {
        await ElementHelper.elementCheckTextEquals(btn_TryOtherMagic, text)
    }

    async checkDidntReciveMagic(text) {
        await ElementHelper.elementCheckTextEquals(btn_ReciveMagic, text)
    }

    async clickOpenEmailAppButtonMagic() {
        await ElementHelper.elementClick(btn_OpenEmailAppMagic)
    }

    async checkGmail() {
        await ElementHelper.elementCheck(editbox_SearchGmail)
    }

    async clickTruthOnGmail() {
        await ElementHelper.elementClick(editbox_SearchGmail)
        await ElementHelper.withOutElementSendKey("Faladdin")
        await ElementHelper.elementsClickTextContains(btn_MailsGmail, "Faladdin")
        await ElementHelper.elementClick(btn_Snipped)
        await ElementHelper.elementClick(btn_Truth)
    }
}

module.exports = new LoginPage();
