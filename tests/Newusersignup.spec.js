const {test,expect} = require('@playwright/test');
const dataset=require('../utils/logincredentials.json');

test.beforeEach(async({page})=>{
    await page.goto('https://demoblaze.com/');
})


test('User signup',async({page})=>
{
    const newuserdata1=dataset[0]["new user1"];
    await page.locator('#signin2').click();
    await page.locator('#sign-username').fill(newuserdata1.username);
    await page.locator('#sign-password').fill(newuserdata1.password);
    await page.getByLabel('Sign up').click();
    
});


test('Check Close button in the signup popup',async({page})=>
{

    const newuserdata2=dataset[1]["new user2"];
    await page.locator('#signin2').click();
    const dialog = page.getByRole('dialog', { name: 'Sign up' });// we have to use the role of the dialog box to get the dialog box because there are multiple close buttons in the page and if we directly use the close button code then it will click on the first close button which is not our target, so we have to enter into the dialog box first then use the close button code for closing the dialog box
    await expect(dialog).toBeVisible();
    await page.locator('#sign-username').fill(newuserdata2.username);
    await page.locator('#sign-password').fill(newuserdata2.password);
    await dialog.getByText('Close', { exact: true }).click(); // there are multiple close texts so direct close text will fail, so we have to enter into the dailog box first then use the close button code for closing the dailog box

    
});