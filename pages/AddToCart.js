const { expect } = require('@playwright/test');

class addToCartPage
{

    constructor(page)
    {
        this.page=page;
        this.product=page.getByText("Iphone 6 32gb");
        this.addToCartBtn=page.getByText('Add to cart');
      
    }
    async selectProduct()
    {
        await this.product.click();
    }
    
    async addToCart(page)
    {        
        
        this.page.on('dialog', async (dialog) => { //informing the page that there is a dialog box and we have to handle it, so we are using page.on method for handling the dialog box
         //  and we have to accept the dialog box for adding the product to the cart, so we are using dialog.accept() method for accepting the dialog box.
         expect(dialog.message()).toBe('Product added.'); // we can also validate the message of the dialog box using expect method, so we are validating the message of the dialog box to be 'Product added.'
         await dialog.accept();
        });
         await this.addToCartBtn.click();  
         console.log("Product added to cart");     
    }
}
module.exports={addToCartPage};