
const {test,expect} = require('@playwright/test');
const dataset=require('../utils/logincredentials.json');
const {LoginPage} = require('../pages/LoginPage');

test.beforeEach(async({page})=>{
    await page.goto('https://demoblaze.com/');
    })
test('ValidLogin',async({page})=> 
{
    const user = dataset[2]["valid user"];
    const loginpageobj=new LoginPage(page);
    await loginpageobj.login(user.username,user.password);//forgot to add await, so the TC was failing continuously.
    console.log("Login successful with valid credentials");
    await expect(page.locator('#nameofuser')).toHaveText(`Welcome ${user.username}`)

});

test('Login with invalid username',async({page})=> 
{
    const user = dataset[3]["invalid username"];
    const loginpageobj=new LoginPage(page);
    page.on('dialog', async (dialog) => { 
    expect(dialog.message()).toBe('User does not exist.'); // we can also validate the message of the dialog box using expect method, so we are validating the message of the dialog box to be 'Product added.'
    await dialog.accept();
    });
    await loginpageobj.login(user.username,user.password);


});

test('Login with invalid password',async({page})=> 
{

    const user = dataset[4]["invalid password"];
    const loginpageobj=new LoginPage(page);
     page.on('dialog', async (dialog) => { 
    expect(dialog.message()).toBe('Wrong password.'); // we can also validate the message of the dialog box using expect method, so we are validating the message of the dialog box to be 'Product added.'
    await dialog.accept();
    });
    await loginpageobj.login(user.username,user.password);

});

test('Login with invalid credentials',async({page})=> 
{
    const user = dataset[5]["invalid credentials"];
    const loginpageobj=new LoginPage(page);
    page.on('dialog', async (dialog) => { 
    expect(dialog.message()).toBe('User does not exist.'); // we can also validate the message of the dialog box using expect method, so we are validating the message of the dialog box to be 'Product added.'
    await dialog.accept();
    });
    await loginpageobj.login(user.username,user.password);//forgot to add await, so the TC was failing continuously.


});

