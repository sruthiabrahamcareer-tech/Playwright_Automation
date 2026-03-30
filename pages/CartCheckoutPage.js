const { expect } = require('@playwright/test');

class CartPage {
  constructor(page) {
    this.page = page;

    this.cartLink = page.locator('#cartur');
    this.placeorderBtn = page.getByRole('button', { name: 'Place Order' });

    this.nameInput = this.page.locator('#name');
    this.countryInput = this.page.locator('#country');
    this.cityInput = this.page.locator('#city');
    this.cardInput = this.page.locator('#card');
    this.monthInput = this.page.locator('#month');
    this.yearInput = this.page.locator('#year');
    this.purchaseBtn = this.page.getByRole('button', { name: 'Purchase' });

    this.successMsg = page.getByRole('heading', {
      name: 'Thank you for your purchase!'});
    this.okBtn = page.getByRole('button', { name: 'OK' });
  }

  async openOrderModal() {
  console.log('Before click');
  console.log('Place Order visible:', await this.placeorderBtn.isVisible());
  console.log('Place Order enabled:', await this.placeorderBtn.isEnabled());
    await this.page.pause();
  await this.placeorderBtn.click()
  console.log('Clicked Place Order')
}

  async fillOrderForm(cartproduct) {

    await this.nameInput.fill(cartproduct.customername);
      await this.page.pause();
    await this.countryInput.fill(cartproduct.country);
    await this.cityInput.fill(cartproduct.city);
    await this.cardInput.fill(cartproduct.card);
    await this.monthInput.fill(cartproduct.month);
    await this.yearInput.fill(cartproduct.year);
  }

  async submitOrder() {
    await expect(this.purchaseBtn).toBeVisible();
    await expect(this.purchaseBtn).toBeEnabled();
    await this.purchaseBtn.click();
    await expect(this.successMsg).toBeVisible();
    await this.okBtn.click();
  }

  async goToCart(cartproduct) {
    await this.cartLink.click();
   // await expect(this.page).toHaveURL(/cart\.html/);

     await this.openOrderModal();
    await this.page.pause();
    await this.fillOrderForm(cartproduct);
    await this.submitOrder();
  }
}

module.exports = { CartPage };