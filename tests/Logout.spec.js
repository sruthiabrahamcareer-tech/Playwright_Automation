const {expect} = require('@playwright/test');
const dataset=require('../utils/logincredentials.json');
const {LoginPage} = require('../pages/LoginPage');
const {LogoutPage} = require('../pages/LogoutPage');
const {test} = require('../utils/fixtures');
  
    test('Logout Functionality',async({customtext,page})=>
    {
        const logoutpageobj=new LogoutPage(page);
        await logoutpageobj.logout();

    });