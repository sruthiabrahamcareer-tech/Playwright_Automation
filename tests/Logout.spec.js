const {test,expect} = require('@playwright/test');
const dataset=require('../utils/logincredentials.json');
const {LoginPage} = require('../pages/LoginPage');
const {LogoutPage} = require('../pages/LogoutPage');
//const {test} = require('../utils/fixtures');
  
/* *********************   TEST 5   ******************* */
    test('Logout Functionality',async({page})=>
    {
           await page.goto('/');
        const logoutpageobj=new LogoutPage(page);
        await logoutpageobj.logout();

    });