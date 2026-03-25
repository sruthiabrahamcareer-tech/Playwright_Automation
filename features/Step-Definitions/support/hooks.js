const { Before, After, BeforeStep, AfterStep} = require('@cucumber/cucumber');
const { chromium } = require('playwright');

Before(async function () {
  // Launch browser and create context/page before each scenario
  this.browser = await chromium.launch({ headless: false });
  this.context = await this.browser.newContext();     
  this.page = await this.context.newPage();
});
After(async function () {
  // Close browser after each scenario
  if (this.browser) {
    await this.browser.close();
  }
});