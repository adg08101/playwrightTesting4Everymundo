import { test, expect } from '@playwright/test'
import config from '../../playwright.config'
import { EverymundoModule } from '../pages/module.page'

let everymundoModule
let fullUrl
let originAndDestination
let origin
let destination

test.describe('Everymundo Module Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(config.use.baseURL)
    const url = await page.url()
    everymundoModule = new EverymundoModule(page)
    fullUrl = String(url)
    originAndDestination = fullUrl.substring(url.indexOf('from-'))
    originAndDestination = originAndDestination.replace(/from-/gi, "")
    origin = originAndDestination.substring(0, originAndDestination.indexOf('-'))
    destination = originAndDestination.substring(originAndDestination.indexOf('-to-'))
    destination = destination.replace(/-to-/gi, "")
  })

  /*test('Go to the top of the module', async () => {
    const header = await everymundoModule.getModuleHeaderText()
    // Assert header is shown
    expect(header.toLowerCase()).toContain(origin)
    expect(header.toLowerCase()).toContain(destination)
    // Assert header is shown above the montly section
    expect((await everymundoModule.getModuleHeaderPosition()).y > (await everymundoModule.getMonthlySectionPosition()).y)
  })*/

  /*test('Look at the line after the the module heading', async () => {
    await everymundoModule.getOriginOrDestination(everymundoModule.originLocator).then(async (originObj: any) => {
      expect(originObj.toLowerCase()).toContain(origin)
      await everymundoModule.getOriginOrDestination(everymundoModule.destinationLocator).then((destinationObj: any) => {
        expect(destinationObj.toLowerCase()).toContain(destination)
      })
    }), (error) => {
      console.log('Please check for errors on test excecution ', error)
    }
  })*/

  /*test('Select a valid airport code from the From dropdown', async () => {
    const airport = 'FRA'

    await everymundoModule.clickFromLocator(everymundoModule.originClearSelector).then(async () => {
      await everymundoModule.typeSearchFromLocator(everymundoModule.originSelector, airport).then(async () => {
        await everymundoModule.clickAirportLocator(airport).then(async () => {
          await everymundoModule.clickFromLocator(everymundoModule.flightTypeResultSelector).then(async () => {
            let fareTotalPrice = await everymundoModule.page.locator(everymundoModule.fareTotalPrice).first().innerText()
            fareTotalPrice = fareTotalPrice.replace(/,/gi, ".")
            let farePrice = parseFloat(await everymundoModule.page.locator(everymundoModule.farePriceLocator).innerText()).toString()
            fareTotalPrice = parseFloat(fareTotalPrice).toString()
            console.log(farePrice, fareTotalPrice)
            expect(fareTotalPrice).toContain(farePrice)
          })
        })
      })
    }), (error) => {
      console.log('Please check for errors on test excecution ', error)
    }
  })*/

  /*test('Check for the skeleton screen', async () => {
    // No idea
    expect(everymundoModule.page.skeleton).toEqual(true)
  })*/

  /*test('Look at the monthly carousel section of the module', async () => {
    const currentDate = new Date()
    const currentMonthNameShort = currentDate.toLocaleString("en-US", { month: "short" });
    let year = currentDate.toLocaleString("en-US", { year: 'numeric' });

    let currentMonth = await everymundoModule.getCurrentMonthCard()

    expect(await currentMonth.locator("//span[contains(@class, 'month-fare')]").innerText()).toEqual(currentMonthNameShort)
    expect(await currentMonth.locator("//span[contains(@class, 'year-fare')]").innerText()).toEqual(year)

    let nextMonthDate = new Date()
    nextMonthDate.setMonth(currentDate.getMonth() + 1)

    if (nextMonthDate.getFullYear() != currentDate.getFullYear())
      year = nextMonthDate.getFullYear().toString()

    let nextMonth = await everymundoModule.getNextMonthCard()

    let nextMonthNameShort = nextMonthDate.toLocaleString("en-US", { month: "short" });

    expect(await nextMonth.locator("//span[contains(@class, 'month-fare')]").innerText()).toEqual(nextMonthNameShort)
    expect(await nextMonth.locator("//span[contains(@class, 'year-fare')]").innerText()).toEqual(year)

    nextMonthDate.setMonth(nextMonthDate.getMonth() + 1)
    
    if (nextMonthDate.getFullYear() != currentDate.getFullYear())
      year = nextMonthDate.getFullYear().toString()
    
    nextMonth = await everymundoModule.getNextTwoMonthCard()

    nextMonthNameShort = nextMonthDate.toLocaleString("en-US", { month: "short" });

    nextMonth = await everymundoModule.getNextTwoMonthCard()

    expect(await nextMonth.locator("//span[contains(@class, 'month-fare')]").innerText()).toEqual(nextMonthNameShort)
    expect(await nextMonth.locator("//span[contains(@class, 'year-fare')]").innerText()).toEqual(year)
  })*/
})