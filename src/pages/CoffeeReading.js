const ElementHelper = require('../common/ElementHelper')

const txt_Description = browser.isAndroid ? `android=new UiSelector().resourceId("com.faladdin.app:id/tvCoffee")` : `-ios predicate string: name CONTAINS 'dashboard-main-page-title'`
const btn_Yes = browser.isAndroid ? `android=new UiSelector().resourceId("com.faladdin.app:id/btnCoffee")` : `-ios predicate string: name CONTAINS 'dashboard-main-page-title'`
const image_Yes = browser.isAndroid ? `android=new UiSelector().resourceId("com.faladdin.app:id/imgViewCoffee")` : `-ios predicate string: name CONTAINS 'dashboard-main-page-title'`
const btn_No = browser.isAndroid ? `android=new UiSelector().resourceId("com.faladdin.app:id/btnDrinkForMe")` : `-ios predicate string: name CONTAINS 'dashboard-main-page-title'`
const image_No = browser.isAndroid ? `android=new UiSelector().resourceId("com.faladdin.app:id/imgViewDrinkForMe")` : `-ios predicate string: name CONTAINS 'dashboard-main-page-title'`
const btn_Close = browser.isAndroid ? `android=new UiSelector().resourceId("com.faladdin.app:id/imgClose")` : `-ios predicate string: name CONTAINS 'dashboard-main-page-title'`
const txt_DescriptionYesModal = browser.isAndroid ? `android=new UiSelector().resourceId("com.faladdin.app:id/tvHeader")` : `-ios predicate string: name CONTAINS 'dashboard-main-page-title'`
const txt_CardYesModal = browser.isAndroid ? `android=new UiSelector().className("android.widget.TextView")` : `-ios predicate string: name CONTAINS 'dashboard-main-page-title'`
const btn_CloseYesModal = browser.isAndroid ? `android=new UiSelector().resourceId("com.faladdin.app:id/imgBack")` : `-ios predicate string: name CONTAINS 'dashboard-main-page-title'`
const txt_DescriptionNoModal = browser.isAndroid ? `android=new UiSelector().resourceId("com.faladdin.app:id/textViewTitle")` : `-ios predicate string: name CONTAINS 'dashboard-main-page-title'`
const video_NoModal = browser.isAndroid ? `android=new UiSelector().resourceId("com.faladdin.app:id/videoView")` : `-ios predicate string: name CONTAINS 'dashboard-main-page-title'`
const btn_ContinueNoModal = browser.isAndroid ? `android=new UiSelector().resourceId("com.faladdin.app:id/btnContinue")` : `-ios predicate string: name CONTAINS 'dashboard-main-page-title'`
const btn_BackNoModal = browser.isAndroid ? `android=new UiSelector().resourceId("com.faladdin.app:id/imgBtnBack")` : `-ios predicate string: name CONTAINS 'dashboard-main-page-title'`
const image_OneNoModal = browser.isAndroid ? `android=new UiSelector().resourceId("com.faladdin.app:id/imageViewOne")` : `-ios predicate string: name CONTAINS 'dashboard-main-page-title'`
const image_TwoNoModal = browser.isAndroid ? `android=new UiSelector().resourceId("com.faladdin.app:id/imageViewTwo")` : `-ios predicate string: name CONTAINS 'dashboard-main-page-title'`
const image_ThreeNoModal = browser.isAndroid ? `android=new UiSelector().resourceId("com.faladdin.app:id/imageViewThree")` : `-ios predicate string: name CONTAINS 'dashboard-main-page-title'`



class CoffeeReading {
    async checkModalDescription() {
        await ElementHelper.elementCheck(txt_Description)
    }

    async checkModalDescriptionText(text) {
        await ElementHelper.elementCheckTextEquals(txt_Description, text)
    }

    async checkYesButton(text) {
        await ElementHelper.elementCheckTextEquals(btn_Yes, text)
    }

    async clickYesButton() {
        await ElementHelper.elementClick(btn_Yes)
    }

    async checkYesButtonImage() {
        await ElementHelper.elementClick(image_Yes)
    }

    async checkNoButton(text) {
        await ElementHelper.elementCheckTextEquals(btn_No, text)
    }

    async clickNoButton() {
        await ElementHelper.elementClick(btn_No)
    }

    async checkNoButtonImage() {
        await ElementHelper.elementCheck(image_No)
    }

    async checkCloseButton() {
        await ElementHelper.elementCheck(btn_Close)
    }

    async clickCloseButton() {
        await ElementHelper.elementClick(btn_Close)
    }

    async checkDescriptionYesModal() {
        await ElementHelper.elementCheck(txt_DescriptionYesModal)
    }

    async checkDescriptionTextYesModal(text) {
        await ElementHelper.elementCheckTextEquals(txt_DescriptionYesModal, text)
    }

    async checkCardYesModal(text) {
        await ElementHelper.elementsCheckTextContains(txt_CardYesModal, text)
    }

    async checkCloseButtonYesModal() {
        await ElementHelper.elementCheck(btn_CloseYesModal)
    }

    async clickCloseButtonYesModal() {
        await ElementHelper.elementClick(btn_CloseYesModal)
    }

    async checkDescriptionNoModal() {
        await ElementHelper.elementCheck(txt_DescriptionNoModal)
    }

    async checkDescriptionTextNoModal(text) {
        await ElementHelper.elementCheckTextEquals(txt_DescriptionNoModal, text)
    }

    async checkImageOneNoModal() {
        await ElementHelper.elementCheck(image_OneNoModal)
    }

    async checkImageTwoNoModal() {
        await ElementHelper.elementCheck(image_TwoNoModal)
    }

    async checkImageThreeNoModal() {
        await ElementHelper.elementCheck(image_ThreeNoModal)
    }

    async checkVideoViewNoModal() {
        await ElementHelper.elementCheck(video_NoModal)
    }

    async checkContinueButtonNoModal(text) {
        await ElementHelper.elementCheckTextEquals(btn_ContinueNoModal, text)
    }

    async clickContinueButtonNoModal() {
        await ElementHelper.elementClick(btn_ContinueNoModal)
    }

    async checkBackButtonNoModal() {
        await ElementHelper.elementCheck(btn_BackNoModal)
    }

    async clickBackButtonNoModal() {
        await ElementHelper.elementClick(btn_BackNoModal)
    }
}

module.exports = new CoffeeReading();
