const ElementHelper = require('../common/ElementHelper')

const logo_Faladdin = browser.isAndroid ? `android=new UiSelector().resourceId("com.faladdin.app:id/imgIcon")` : `-ios predicate string: name CONTAINS 'dashboard-main-page-title'`
const txt_Welcome = browser.isAndroid ? `android=new UiSelector().resourceId("com.faladdin.app:id/titleText")` : `-ios predicate string: name CONTAINS 'dashboard-main-page-title'`
const txt_WelcomeDescription = browser.isAndroid ? `android=new UiSelector().resourceId("com.faladdin.app:id/detailText")` : `-ios predicate string: name CONTAINS 'dashboard-main-page-title'`
const btn_Explore = browser.isAndroid ? `android=new UiSelector().resourceId("com.faladdin.app:id/getStartedButton")` : `-ios predicate string: name CONTAINS 'dashboard-main-page-title'`


class Homepage {
    async checkLogo() {
        await ElementHelper.elementCheck(logo_Faladdin)
    }

    async checkWelcomeText(text) {
        await ElementHelper.elementCheckTextEquals(txt_Welcome,text)
    }

    async checkWelcomeDescription(text) {
        await ElementHelper.elementCheckTextEquals(txt_WelcomeDescription,text)
    }

    async checkExploreButton(text) {
        await ElementHelper.elementCheckTextEquals(btn_Explore,text)
    }

    async clickExploreButton() {
        await ElementHelper.elementClick(btn_Explore)
    }
}

module.exports = new Homepage();
