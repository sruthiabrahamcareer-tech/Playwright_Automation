const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
         Given('User is on the site main page', async function () {
           // Write code here that turns the phrase above into concrete actions
            await this.page.goto('https://demoblaze.com/');
         });

  

         When('User enters the details {string} and {string} then click on close button', async function (username, password) {
           // Write code here that turns the phrase above into concrete actions
            await this.page.locator('#signin2').click();
              const dialog = this.page.getByRole('dialog', { name: 'Sign up' });// we have to use the role of the dialog box to get the dialog box because there are multiple close buttons in the page and if we directly use the close button code then it will click on the first close button which is not our target, so we have to enter into the dialog box first then use the close button code for closing the dialog box
              await expect(dialog).toBeVisible();
              await this.page.locator('#sign-username').fill('testuser1');
              await this.page.locator('#sign-password').fill('testpassword1');
              await dialog.getByText('Close', { exact: true }).click();
         });



         Then('Verify popup closed and main page is shown', async function () {
           // Write code here that turns the phrase above into concrete actions
          await expect(this.page.locator('#nava')).toBeVisible(); // after closing the popup we will verify the main page is shown by checking the visibility of the signup button which is only visible in the main page
         });