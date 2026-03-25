const base=require('@playwright/test');
const dataset=require('../utils/logincredentials.json');
const {LoginPage} = require('../pages/LoginPage');
const test =base.test.extend({
    customtext:async({page},use)=> //use keyword is used for using the custom fixture 
    // in the test case, so we are using use keyword for using the custom fixture in the 
    // test case, and we have to pass the page object in the custom fixture
    //  for performing the actions on the page, so we are passing the page object in the custom fixture.
    {
        await page.goto('https://demoblaze.com/');
       
        const user = dataset[2]["valid user"];
        const loginpageobj=new LoginPage(page);
        console.log(user.username);
        console.log(user.password);
        await loginpageobj.login(user.username,user.password);
        await use(page)//saying we are passing this to the test case, 
        // so that the test case can use this page object for performing the
        //  actions on the page. In the latest version of playwright test, we have to the use(page) to avoid flakyness in the TC's
    }
})
module.exports={test}
