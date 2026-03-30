
//purchase.spec.js
const {expect} = require('@playwright/test');
const {test} = require('../utils/fixtures');
const {addToCartPage} = require('../pages/AddToCart');
const {productDetailsPage} = require('../pages/productDetailsPage');
const {CartPage} = require('../pages/CartCheckoutPage');
const data=require('../utils/productdetails.json');

 /* ************** TEST 1: ******************************************************* */
   // Below Test is for adding the product to the cart 

    test('Selecting and adding product to cart',async({customtext,page})=>
    {
        
       const addtocartobj=new addToCartPage(page);
       await addtocartobj.selectProduct();
       await addtocartobj.addToCart(page);
         
       });


/* ************** TEST 2: ******************************************************* */

   test('Add product under phone category and pass till purchase',async({customtext,page})=>
{
    
    const product1 = data[0]["product1"];
    const productdetailsobj=new productDetailsPage(page);
    const cartpageobj=new CartPage(page);
    await productdetailsobj.getproduct(product1.productname,"Phones",page);
    await cartpageobj.goToCart(product1);
  });

/* ************** TEST 3: ******************************************************* */
test('Add product under monitors category and do till purchase',async({customtext,page})=>
{
     
    const product2 = data[1]["product2"];
    const productdetailsobj=new productDetailsPage(page);
    const cartpageobj=new CartPage(page);
    await productdetailsobj.getproduct(product2.productname,"Monitors",page);
    await cartpageobj.goToCart(product2);
    
});