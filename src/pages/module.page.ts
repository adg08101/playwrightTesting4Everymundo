import type { Page } from  '@playwright/test';

export class EverymundoModule {
    readonly page: Page
    moduleHeaderLocator = '[data-em-cmp=fare-title--header]'
    originLocator = "css=[placeholder='Select origin']"
    destinationLocator = "css=[placeholder='Select destination']"
    fromAirportCloseLocator = "//i[text()='close']"
    originClearSelector = "//div[@data-att='origin-selector']/descendant::i[text()='close']"
    originSelector = "css=[placeholder='Input Origin']"
    destinationSelector = "css=[placeholder='Input destination']"
    flightTypeResultSelector = "//span[contains(text(), 'Flight Type')]"
    fareTotalPrice = "//span[contains(@class, 'fare-total-price')]"
    farePriceLocator = "//span[contains(@class, 'horizontal-fare-price')]"
    skeletonSelector = "//*[contains(@class, 'skeleton')]"
    currentMontCardSelector = "//div[contains(@class, 'rec-carousel-item-0')]"
    nextMontCardSelector = "//div[contains(@class, 'rec-carousel-item-1')]"
    nextTwoMontCardSelector = "//div[contains(@class, 'rec-carousel-item-2')]"
    nextThreeMontCardSelector = "//div[contains(@class, 'rec-carousel-item-3')]"
    nextFourMontCardSelector = "//div[contains(@class, 'rec-carousel-item-4')]"
    nextFiveMontCardSelector = "//div[contains(@class, 'rec-carousel-item-5')]"
    monthlyScrollRightSelector = "//button[@aria-label='Next months']"
    airportSelectors = {
      FRA: '[data-att=FRA]',
      DEL: '[data-att=DEL]',
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

    async getCurrentMonthCard() {
      return this.page.locator(this.currentMontCardSelector)
    }

    async getNextMonthCard() {
      return this.page.locator(this.nextMontCardSelector).first()
    }

    async getNextTwoMonthCard() {
      return this.page.locator(this.nextTwoMontCardSelector)
    }

    async getMonthCard(month:string) {
      switch (month) {
        case '03':
          return this.page.locator(this.nextThreeMontCardSelector)
         case '04':
          return this.page.locator(this.nextFourMontCardSelector)
         case '05':
          return this.page.locator(this.nextFiveMontCardSelector)
        default:
          console.log('Select proper Month')
          break
      }
   }
}