const { Given, When, Then } = require('@cucumber/cucumber');


         Given('User is on the application main page', async function () {
           // Write code here that turns the phrase above into concrete actions
            await this.page.goto('https://demoblaze.com/');
         });

  

         When('User enters the details {string} and {string} then click on signup button', async function (username, password) {
           // Write code here that turns the phrase above into concrete actions
           await this.page.locator('#signin2').click();
           await this.page.locator('#sign-username').fill(username);
           await this.page.locator('#sign-password').fill(password);
           await this.page.getByLabel('Sign up').click();
         });



         Then('Verify {string} message is shown',async function (string) {
           // Write code here that turns the phrase above into concrete actions
             this.page.on('dialog', async dialog => {
               await  expect(dialog.message()).toHaveText(string);
                await dialog.accept();
             });
         });