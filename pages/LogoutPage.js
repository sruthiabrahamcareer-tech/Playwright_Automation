const { expect } = require('@playwright/test');
class LogoutPage
{

    constructor(page)
    {
        this.page=page;
        this.logoutbtn=page.locator("//a[@id='logout2']")
        this.loginbtn=page.locator("//a[@id='login2']")
    }
    async logout()
    {        
        await this.logoutbtn.click();
         console.log("Logout successful");
                await expect(this.loginbtn).toBeVisible();
    }
}
module.exports=({LogoutPage});