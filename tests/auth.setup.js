const { test: setup, expect } = require('@playwright/test');
const dataset=require('../utils/logincredentials.json');
const {LoginPage} = require('../pages/LoginPage');

setup('Login to DemoBlaze and save authentication', async ({ page }) => {

   const user = dataset[2]["valid user"];
  // Open DemoBlaze
  await page.goto('https://demoblaze.com/');
  const loginpageobj=new LoginPage(page);
        console.log(user.username);
        console.log(user.password);
        await loginpageobj.login(user.username,user.password);
        await expect(page.locator('#nameofuser')).toHaveText(`Welcome ${user.username}`)

  // Open login popup
  // await page.getByRole('link', { name: 'Log in' }).click();

  // Enter credentials from JSON
  // await page.locator('#loginusername').fill(loginData.username);
  // await page.locator('#loginpassword').fill(loginData.password);

  // Click Login
  // await page.getByRole('button', { name: 'Log in' }).click();

  // Confirm login succeeded
  // await expect(page.locator('#nameofuser'))
  //  .toContainText(loginData.username);

  // Save authenticated browser state
  await page.context().storageState({
    path: 'auth/demoblaze-auth.json'
  });

});