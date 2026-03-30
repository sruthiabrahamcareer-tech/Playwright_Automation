const { expect } = require('@playwright/test');
const {addToCartPage} = require('../pages/AddToCart');
const data=require('../utils/productdetails.json');

class productDetailsPage
{ 
        constructor(page)
    {
        this.page=page;
          
    }
    async getproduct(productname,category,page)
    {        
      await this.page.getByText(category).click();
      await this.page.getByText(productname).first().click()
      const addtocartobj=new addToCartPage(page);
      await addtocartobj.addToCart(page);

           
    }
}


module.exports={productDetailsPage};