const ElementHelper = require('../common/ElementHelper')

const logo_Faladdin = browser.isAndroid ? `android=new UiSelector().resourceId("com.faladdin.app:id/imgViewHeader")` : `-ios predicate string: name CONTAINS 'dashboard-main-page-title'`
const logo_Credit = browser.isAndroid ? `android=new UiSelector().resourceId("com.faladdin.app:id/imageBtnCredit")` : `-ios predicate string: name CONTAINS 'dashboard-main-page-title'`
const text_Credit = browser.isAndroid ? `android=new UiSelector().resourceId("com.faladdin.app:id/tvCreditCount")` : `-ios predicate string: name CONTAINS 'dashboard-main-page-title'`
const logo_Login = browser.isAndroid ? `android=new UiSelector().resourceId("com.faladdin.app:id/rlAccount")` : `-ios predicate string: name CONTAINS 'dashboard-main-page-title'`
const txt_ProductTitle = browser.isAndroid ? `android=new UiSelector().resourceId("com.faladdin.app:id/tvProductTitle")` : `-ios predicate string: name CONTAINS 'dashboard-main-page-title'`
const txt_HoroscopeTvTitle = browser.isAndroid ? `android=new UiSelector().resourceId("com.faladdin.app:id/tvTitle")` : `-ios predicate string: name CONTAINS 'dashboard-main-page-title'`
const txt_HoroscopeTvDate = browser.isAndroid ? `android=new UiSelector().resourceId("com.faladdin.app:id/tvDate")` : `-ios predicate string: name CONTAINS 'dashboard-main-page-title'`
const txt_HoroscopeTvReadMore = browser.isAndroid ? `android=new UiSelector().resourceId("com.faladdin.app:id/tvReadMore")` : `-ios predicate string: name CONTAINS 'dashboard-main-page-title'`
const txt_TvTitleOver = browser.isAndroid ? `android=new UiSelector().resourceId("com.faladdin.app:id/tvTitleOver")` : `-ios predicate string: name CONTAINS 'dashboard-main-page-title'`
const txt_TvDailyUse = browser.isAndroid ? `android=new UiSelector().resourceId("com.faladdin.app:id/tvDailyUse")` : `-ios predicate string: name CONTAINS 'dashboard-main-page-title'`
const txt_SelectedLabel = browser.isAndroid ? `android=new UiSelector().resourceId("com.faladdin.app:id/largeLabel")` : `-ios predicate string: name CONTAINS 'dashboard-main-page-title'`
const txt_UnselectedLabel = browser.isAndroid ? `android=new UiSelector().resourceId("com.faladdin.app:id/smallLabel")` : `-ios predicate string: name CONTAINS 'dashboard-main-page-title'`
const txt_Labels = browser.isAndroid ? `android=new UiSelector().resourceId("com.faladdin.app:id/labelGroup").childSelector(new UiSelector().className(android.widget.TextView).index(0))` : `-ios predicate string: name CONTAINS 'dashboard-main-page-title'`


class HomePage {
    async checkLogo() {
        await ElementHelper.elementCheck(logo_Faladdin)
    }

    async checkCreditLogo() {
        await ElementHelper.elementCheck(logo_Credit)
    }

    async checkCreditText(text) {
        await ElementHelper.elementCheckTextEquals(text_Credit, text)
    }

    async clickCredit() {
        await ElementHelper.elementClick(logo_Credit)
    }

    async checkLoginLogo() {
        await ElementHelper.elementCheck(logo_Login)
    }

    async clickLoginLogo() {
        await ElementHelper.elementClick(logo_Login)
    }

    async checkProductTitle(text) {
        await ElementHelper.elementsCheckTextContains(txt_ProductTitle, text)
    }

    async checkTvTitleOver(text) {
        await ElementHelper.elementsCheckTextContains(txt_TvTitleOver, text)
    }

    async clickTvTitle(text) {
        await ElementHelper.elementsClickTextEquals(txt_TvTitleOver, text)
    }

    async checkTvDailyUse(text) {
        await ElementHelper.elementsCheckTextContains(txt_TvDailyUse, text)
    }

    async checkHoroscopeTvTitle(text) {
        await ElementHelper.elementCheckTextEquals(txt_HoroscopeTvTitle, text)
    }

    async clickHoroscopeTvTitle(text) {
        await ElementHelper.elementsClickTextEquals(txt_HoroscopeTvTitle, text)
    }

    async checkHoroscopeTvDate(text) {
        await ElementHelper.elementCheckTextEquals(txt_HoroscopeTvDate, text)
    }

    async checkHoroscopeTvReadMore(text) {
        await ElementHelper.elementCheckTextEquals(txt_HoroscopeTvReadMore, text)
    }

    async clickHoroscopeTvReadMore() {
        await ElementHelper.elementClick(txt_HoroscopeTvReadMore)
    }

    async checkSelectedNavigationButton(text) {
        await ElementHelper.elementsCheckTextContains(txt_SelectedLabel, text)
    }

    async checkUnSelectedNavigationButton(text) {
        await ElementHelper.elementsCheckTextContains(txt_UnselectedLabel, text)
    }

    async checkNavigationButton(text) {
        await ElementHelper.elementsCheckTextContains(txt_Labels, text)
    }

    async clickNavigationButton(text) {
        await ElementHelper.elementsClickTextEquals(txt_Labels, text)
    }
}

module.exports = new HomePage();
