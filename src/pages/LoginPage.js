const ElementHelper = require('../common/ElementHelper')

const logo_Faladdin = browser.isAndroid ? `android=new UiSelector().resourceId("com.faladdin.app:id/imgIcon")` : `-ios predicate string: name CONTAINS 'dashboard-main-page-title'`


class LoginPage {

}

module.exports = new LoginPage();
