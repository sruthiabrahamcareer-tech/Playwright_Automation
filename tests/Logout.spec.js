const {expect} = require('@playwright/test');
const dataset=require('../utils/logincredentials.json');
const {LoginPage} = require('../pages/LoginPage');
const {test} = require('../utils/fixtures');
  
    test('Logout Functionality',async({customtext,page})=>
    {
        await page.locator("//a[@id='logout2']").click();
        console.log("Logout successful");
        await expect(page.locator("//a[@id='login2']")).toBeVisible();

    });