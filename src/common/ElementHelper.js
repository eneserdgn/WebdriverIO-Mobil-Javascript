const expect = require("chai").expect;

class ElementHelper {


    async waitOpenApp(app, time) {
        await browser.waitUntil(
            async () => (await driver.queryAppState(app)) === 4,
            {
                timeout: time,
                timeoutMsg: 'the application could not be opened in ' + time + ' seconds'
            }
        );
    }

    async elementClick(element) {
        await this.writeConsoleInfo("elementClick adımı başladı - " + element)
        let elem = await this.findElement(element)
        try {
            await elem.click()
            await this.writeConsoleTick("elementClick adımı başarıyla gerçekleşti")
        } catch (e) {
            await this.writeConsoleFail("elementClick adımı başarısız!!")
            await expect(true, e).equal(false)
        }
    }

    async getText(element) {
        await this.writeConsoleInfo("getText adımı başladı - " + element)
        let elem = await this.findElement(element)
        try {
            let result = await elem.getText();
            await this.writeConsoleTick("getText adımı başarıyla gerçekleşti - " + result)
            return result;
        } catch (e) {
            await this.writeConsoleFail("getText adımı başarısız!!")
            await expect(true, e).equal(false)
        }
    }

    async getAttribute(element, attr) {
        await this.writeConsoleInfo("getAttribute adımı başladı - " + element)
        let elem = await this.findElement(element)
        try {
            let result = await elem.getAttribute(attr);
            await this.writeConsoleTick("getAttribute adımı başarıyla gerçekleşti - " + result)
            return result
        } catch (e) {
            await this.writeConsoleFail("getAttribute adımı başarısız!!")
            await expect(true, e).equal(false)
        }
    }

    async elementSendKey(element, text) {
        await this.writeConsoleInfo("elementSendKey adımı başladı - " + element)
        let elem = await this.findElement(element)
        try {
            await elem.setValue(text)
            await this.writeConsoleTick("elementSendKey adımı başarıyla gerçekleşti - " + text)
        } catch (e) {
            await this.writeConsoleFail("elementSendKey adımı başarısız!!")
            await expect(true, e).equal(false)

        }
    }

    async withOutElementSendKey(text) {
        try {
            await this.writeConsoleInfo("withOutElementSendKey adımı başladı - " + text)
            await browser.pause(3000)
            await browser.keys(text)

        } catch (e) {

        } finally {
            await browser.pause(2000)
            await driver.pressKeyCode(66);
            await browser.pause(2000)
            await this.writeConsoleTick("withOutElementSendKey adımı başarıyla gerçekleşti")
        }
    }

    async elementCheck(element) {
        try {
            await this.writeConsoleInfo("elementCheck adımı başladı - " + element)
            await this.findElement(element)
            await this.writeConsoleTick("elementCheck adımı başarıyla gerçekleşti")
        } catch (e) {
            await this.writeConsoleFail("elementCheck adımı başarısız!!")
            await expect(true, e).equal(false)
        }
    }

    async elementNotCheck(element) {
        let wait
        try {
            await this.writeConsoleInfo("elementNotCheck adımı başladı - " + element)
            wait = await $(element).waitForDisplayed({
                reverse: true
            })
        } catch (e) {
            await this.writeConsoleFail("elementNotCheck adımı başarısız!!")
            await expect(true, e).equal(false)
        }
        await expect(wait).equal(true)
        await this.writeConsoleTick("elementNotCheck adımı başarıyla gerçekleşti")
    }

    async elementCheckTextEquals(element, text) {
        await this.writeConsoleInfo("elementCheckTextEquals adımı başladı - " + element)
        let elem = await this.findElement(element)
        let elemText
        try {
            elemText = await elem.getText()
        } catch (e) {
            await this.writeConsoleFail("elementCheckTextEquals adımı başarısız!!")
            await expect(true, e).equal(false)
        }
        elemText = elemText.replace(/\s/g, '')
        text = text.replace(/\s/g, '')
        await expect(elemText).equal(text)
        await this.writeConsoleTick("elementCheckTextEquals adımı başarıyla gerçekleşti - " + elemText)
    }

    async elementCheckTextContains(element, text) {
        await this.writeConsoleInfo("elementCheckTextContains adımı başladı - " + element)
        let elem = await this.findElement(element)
        let elemText
        try {
            elemText = await elem.getText()
        } catch (e) {
            await this.writeConsoleFail("elementCheckTextContains adımı başarısız!!")
            await expect(true, e).equal(false)
        }
        await expect(elemText).contain(text)
        await this.writeConsoleTick("elementCheckTextContains adımı başarıyla gerçekleşti - " + elemText)
    }

    async elementsCheckTextContains(element1, text) {
        await this.writeConsoleInfo("elementsCheckTextContains adımı başladı - " + text)
        let result = "İstediğin textte element bulamadı"
        let txt
        await this.findElement(element1)
        try {
            let elements = await $$(element1)
            for (const el of elements) {
                txt = await el.getText()
                if (txt != null) {
                    if (txt.includes(text)) {
                        result = txt
                        break
                    }
                }
            }
        } catch (e) {
            await this.writeConsoleFail("elementsCheckTextContains adımı başarısız!!")
            await expect(true, e).equal(false)
        }
        await expect(result).contain(text)
        await this.writeConsoleTick("elementsCheckTextContains adımı başarıyla gerçekleşti")
    }

    async elementsClickTextContains(element1, text) {
        await this.writeConsoleInfo("elementsClickTextContains adımı başladı - " + text)
        let result = false
        let txt
        await this.findElement(element1)
        try {
            let elements = await $$(element1)
            for (const el of elements) {
                txt = await el.getText()
                if (txt.includes(text)) {
                    await el.click()
                    result = true
                    break
                }
            }
        } catch (e) {
            await this.writeConsoleFail("elementsClickTextContains adımı başarısız!!")
            await expect(true, e).contain(false)
        }
        await expect(txt, "listede istediğin isimde element yok").contain(text)
        await this.writeConsoleTick("elementsClickTextContains adımı başarıyla gerçekleşti")
    }

    async elementsClickTextEquals(element1, text) {
        await this.writeConsoleInfo("elementsClickTextEquals adımı başladı - " + text)
        let result = false
        let txt
        await this.findElement(element1)
        try {
            let elements = await $$(element1)
            for (const el of elements) {
                txt = await el.getText()
                if (txt === text) {
                    await el.click()
                    result = true
                    break
                }

            }
        } catch (e) {
            await this.writeConsoleFail("elementsClickTextEquals adımı başarısız!!")
            await expect(true, e).contain(false)
        }
        await expect(txt, "listede istediğin isimde element yok").contain(text)
        await this.writeConsoleTick("elementsClickTextEquals adımı başarıyla gerçekleşti")
    }

    async checkElementUnderElements(element1, element2, text) {
        await this.writeConsoleInfo("elementsCheckUnderElementWithText adımı başladı - " + text)
        let result = false
        let txt
        await this.findElement(element1)
        try {
            let elements = await $$(element1)
            for (const el of elements) {
                txt = await el.getText()
                if (txt.includes(text)) {
                    let secondEl = await el.$(element2)
                    result = await secondEl.isExisting()
                    await console.log(result)
                    break
                }
            }
        } catch (e) {
            await this.writeConsoleFail("elementsCheckUnderElementWithText adımı başarısız!!")
            await expect(true, e).contain(false)
        }
        await expect(txt, "listede istediğin isimde element yok").contain(text)
        await expect(result, "liste olarak elemetleri buldu ama üsstündeki elementi bulamadı").contain(true)
        await this.writeConsoleTick("elementsCheckUnderElementWithText adımı başarıyla gerçekleşti")
    }

    async elementsCheckUnderElementWithText(element1, element2, text) {
        await this.writeConsoleInfo("elementsCheckUnderElementWithText adımı başladı - " + text)
        let result = false
        let txt
        await this.findElement(element1)
        try {
            let elements = await $(element1).$$(element2)
            for (const el of elements) {
                txt = await el.getText()
                if (txt.includes(text)) {
                    result = true
                    break
                }
            }
        } catch (e) {
            await this.writeConsoleFail("elementsCheckUnderElementWithText adımı başarısız!!")
            await expect(true, e).contain(false)
        }
        await expect(txt, "listede istediğin isimde element yok").contain(text)
        await this.writeConsoleTick("elementsCheckUnderElementWithText adımı başarıyla gerçekleşti")
    }

    async elementsClickUnderElementWithText(element1, element2, text) {
        await this.writeConsoleInfo("elementsClickUnderElementWithText adımı başladı - " + text)
        let result = false
        let txt
        await this.findElement(element1)
        try {
            let elements = await $(element1).$$(element2)
            for (const el of elements) {
                txt = await el.getText()
                if (txt.includes(text)) {
                    await el.click()
                    result = true
                    break
                }
            }
        } catch (e) {
            await this.writeConsoleFail("elementsClickUnderElementWithText adımı başarısız!!")
            await expect(true, e).contain(false)
        }
        await expect(txt, "listede istediğin isimde element yok").contain(text)
        await this.writeConsoleTick("elementsClickUnderElementWithText adımı başarıyla gerçekleşti")
    }

    async findElement(element) {
        await this.writeConsoleChildMethod("FindElement adımı başladı")
        let isExist = false
        let windowHeight = (await browser.getWindowSize()).height
        try {
            await $(element).waitForDisplayed()
            let elementHeight = (await $(element).getLocation()).y
            if (elementHeight > windowHeight * 4 / 5) {
                await this.scrollDown()
                await this.writeConsoleChildMethodTick("FindElement adımı başarılı")
                return await $(element)
            } else {
                await this.writeConsoleChildMethodTick("FindElement adımı başarılı")
                return await $(element)
            }
        } catch (e) {
            if (browser.isAndroid) {
                let scroll = "android=new UiScrollable(new UiSelector().scrollable(true)).flingToBeginning(3)"
                await $(scroll)
            }
            for (let i = 0; i < 10; i++) {
                await this.scrollDown()
                await browser.pause(500)
                isExist = await $(element).isExisting()
                if (isExist == true) {
                    let elementHeight = (await $(element).getLocation()).y
                    if (elementHeight > windowHeight * 4 / 5) {
                        await this.scrollDown()
                        break
                    } else {
                        break
                    }
                }
            }
            if (await $(element).isExisting()) {
                await this.writeConsoleChildMethodTick("FindElement adımı başarılı")
                return await $(element)
            } else {
                await this.writeConsoleChildMethodFail("FindElement adımı başarısız!!")
                await expect(true, "Elementi bulamadı!!!").equal(false)
            }
        }
    }

    async scrollDown() {
        let window = await browser.getWindowSize()
        if (browser.isAndroid) {

            await browser.touchAction([
                {action: 'press', x: window.width / 2, y: window.height * 2 / 4},
                {action: 'wait', ms: 1000},
                {action: 'moveTo', x: window.width / 2, y: window.height * 1 / 4},
                'release'
            ])
        } else {
            await driver.execute('mobile: swipe', {direction: 'up'});
        }
    }

    async scrollUp() {
        let window = await browser.getWindowSize()
        if (browser.isAndroid) {
            await browser.touchAction([
                {action: 'press', x: window.width / 2, y: window.height * 1 / 4},
                {action: 'wait', ms: 1000},
                {action: 'moveTo', x: window.width / 2, y: window.height * 2 / 4},
                'release'
            ])
        } else {
            await driver.execute('mobile: swipe', {direction: 'down'});
        }
    }

    async writeConsoleTick(text) {
        await console.log('\u001b[' + 32 + 'm' + '            ✓ ' + '\u001b[0m' + text)
    }

    async writeConsoleFail(text) {
        await console.log('\u001b[' + 31 + 'm' + '            ✖ ' + '\u001b[0m' + text)
    }

    async writeConsoleInfo(text) {
        await console.log('\u001b[' + 33 + 'm' + '            - ' + '\u001b[0m' + text)
    }

    async writeConsoleChildMethod(text) {
        await console.log('\u001b[' + 33 + 'm' + '                - ' + '\u001b[0m' + text)
    }

    async writeConsoleChildMethodTick(text) {
        await console.log('\u001b[' + 32 + 'm' + '                ✓ ' + '\u001b[0m' + text)
    }

    async writeConsoleChildMethodFail(text) {
        await console.log('\u001b[' + 31 + 'm' + '                ✖ ' + text + '\u001b[0m')
    }

    async phoneBack() {
        await driver.back()
    }

}

module.exports = new ElementHelper();
