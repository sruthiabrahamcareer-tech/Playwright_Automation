const { expect } = require('@playwright/test');
const data=require('../utils/productdetails.json');

class productDetailsPage
{ /// REView and do next plan to pass the category and product in json file instead of hardcoding******

    constructor(page,category,productname)
    {
        this.page=page;
        this.category=page.getByText(category);
        this.addproduct=page.getByText(productname)
      
    }
    async addProduct(productname,category)
    {        
      await this.category.click();
      await this.addproduct.click();
      
        this.page.on('dialog', async (dialog) => { //informing the page that there is a dialog box and we have to handle it, so we are using page.on method for handling the dialog box
         //  and we have to accept the dialog box for adding the product to the cart, so we are using dialog.accept() method for accepting the dialog box.
         expect(dialog.message()).toBe('Product added.'); // we can also validate the message of the dialog box using expect method, so we are validating the message of the dialog box to be 'Product added.'
         await dialog.accept();
        });
         await this.addToCartBtn.click();   
         console.log("Product added to cart");    
    }
}


module.exports={productDetailsPage};