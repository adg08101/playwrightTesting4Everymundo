import type { Page } from  '@playwright/test';

export class EverymundoModule {
    readonly page: Page
    moduleHeaderLocator = '[data-em-cmp=fare-title--header]'
    originLocator = "css=[placeholder='Select origin']"
    destinationLocator = "css=[placeholder='Select destination']"
    fromAirportCloseLocator = "//i[text()='close']"
    originClearSelector = "//div[@data-att='origin-selector']/descendant::i[text()='close']"
    originSelector = "css=[placeholder='Input Origin']"
    flightTypeResultSelector = "//span[contains(text(), 'Flight Type')]"
    fareTotalPrice = "//span[contains(@class, 'fare-total-price')]"
    farePriceLocator = "//span[contains(@class, 'horizontal-fare-price')]"
    airportSelectors = {
      FRA: '[data-att=FRA]'
    }

    constructor(page:Page) {
        this.page=page
    }

    async getModuleHeaderText() {
      return await this.page.locator(this.moduleHeaderLocator).locator('h1').innerText()
    }

    async getModuleHeaderPosition() {
      return await this.page.locator(this.moduleHeaderLocator).boundingBox()
    }

    async getMonthlySectionPosition() {
       return await this.page.locator('div.w-full').first().boundingBox()
    }

    async getOriginOrDestination(locator:string) {
      return await this.page.locator(locator).inputValue()
    }

    async clickFromLocator(locator:string) {
      await this.page.locator(locator).first().click()
    }

    async typeSearchFromLocator(locator:string, text:string) {
       await this.page.type(locator, text)
    }

    async clickAirportLocator(airportId:string) {
       switch (airportId) {
         case 'FRA':
           await this.clickFromLocator(this.airportSelectors.FRA)
           break
         default:
           console.log('Select proper Airport Id')
           break
       }
    }

    /*async pressEnter() {
       await this.page.keyboard.press('Enter')
    }

    async searchResult() {
       return this.page.innerText(this.firstResultLocator)
    }

    async goToFirstResult() {
       this.page.click(this.firstResultLocator)
    }*/
}