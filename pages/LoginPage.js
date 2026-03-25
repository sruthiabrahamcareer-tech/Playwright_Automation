const { expect } = require('@playwright/test');
class LoginPage
{
 constructor(page) //implemented pagefactory design pattern, so created a constructor to initialize the 
 // locators and page object. 
 // so this can be reused across multiple test cases.
 {
this.page=page;
this.accountloginbtn=page.locator("//a[@id='login2']")
this.uname=page.locator("//input[@id='loginusername']")
this.pass=page.locator("//input[@id='loginpassword']")
this.loginbtn=page.locator("//button[@onclick='logIn()']")
 }
async login(username,password)
{
   // await this.page.waitForLoadState('domcontentloaded');
   //await this.accountloginbtn.waitFor({ state: 'visible' });
    await this.accountloginbtn.click();
    await this.uname.fill(username);
    await this.pass.fill(password);
    await this.loginbtn.click();
       
}
}
module.exports={LoginPage};