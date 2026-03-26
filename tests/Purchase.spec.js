
//purchase.spec.js
const {expect} = require('@playwright/test');
const {test} = require('../utils/fixtures');

const {addToCartPage} = require('../pages/AddToCart');

 /* ************** TEST 1: ******************************************************* */
   // Below Test is for adding the product to the cart 

    test.only('Selecting and adding product to cart',async({customtext,page})=>
    {
        
       const addtocartobj=new addToCartPage(page);
       await addtocartobj.addToCart();
         
       });
/* ************** TEST 2: ******************************************************* */
//Below Test is for adding the product to the cart and then doing the purchase of that product, 
// so we are filling all the details in the place order form and then clicking on the purchase button
//  and validating the purchase successful message.

   test('Add product under phone category and pass till purchase',async({customtext,page})=>
{
    
    const product1 = data[0]["product1"];
    await page.getByText(product1.productname).first().click();

    // Handling the dialog box which is coming after clicking on the add to cart button, so we are using page.on method for handling the dialog box and we are validating the message of the dialog box to be 'Product added.' and then accepting the dialog box using dialog.accept() method.
        
                page.on('dialog', async (dialog) => { 
                expect(dialog.message()).toBe('Product added.'); // we can also validate the message of the dialog box using expect method, so we are validating the message of the dialog box to be 'Product added.'
                await dialog.accept();
                 });

    await page.getByText('Add to cart').click();
    await page.pause()
    await page.locator("//a[@id='cartur']").click();
    await page.locator("//button[@class='btn btn-success']").click()
    await page.locator("//input[@id='name']").fill(product1.customername)
    await page.locator("//input[@id='country']").fill(product1.country)
    await page.locator("//input[@id='city']").fill(product1.city)
    await page.locator("//input[@id='card']").fill(product1.card)
    await page.locator("//input[@id='month']").fill(product1.month)
    await page.locator("//input[@id='year']").fill(product1.year)
    await page.locator("//button[@onclick='purchaseOrder()']").click()
    await expect(page.getByRole('heading', { name: 'Thank you for your purchase!' }))
     .toBeVisible();
    await page.getByRole('button', { name: 'OK' }).click();
   });

test('Add product under monitors category and do till purchase',async({customtext,page})=>
{
    const product2=data[1]["product2"];
    await page.getByText('Monitors').click();
    await page.getByText(product2.productname).click();

        page.on('dialog', async (dialog) => 
            { //informing the page that there is a dialog box and we have to handle it, so we are using page.on method for handling the dialog box
            //  and we have to accept the dialog box for adding the product to the cart, so we are using dialog.accept() method for accepting the dialog box.
            expect(dialog.message()).toBe('Product added.'); // we can also validate the message of the dialog box using expect method, so we are validating the message of the dialog box to be 'Product added.'
            await dialog.accept();
            });
    await page.getByText('Add to cart').click();
    await page.pause()
    await page.locator("//a[@id='cartur']").click();
    await page.locator("//button[@class='btn btn-success']").click()//click placeorder button
    await page.locator("//input[@id='name']").fill(product2.customername)
    await page.locator("//input[@id='country']").fill(product2.country)
    await page.locator("//input[@id='city']").fill(product2.city)
    await page.locator("//input[@id='card']").fill(product2.card)
    await page.locator("//input[@id='month']").fill(product2.month)
    await page.locator("//input[@id='year']").fill(product2.year)
    await page.locator("//button[@onclick='purchaseOrder()']").click()
    await expect(page.getByRole('heading', { name: 'Thank you for your purchase!' }))
    .toBeVisible();
          //await page.locator("//button[@fdprocessedid='a510ea']").click()
    await page.getByRole('button', { name: 'OK' }).click();
    
});