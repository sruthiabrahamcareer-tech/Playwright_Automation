const { test, expect } = require('@playwright/test');
const { DemoBlazeApi } = require('../../api/demoblaze.api');

test.describe('DemoBlaze API Tests', () => {

  test('Get product list', async ({ request }, testInfo) => {

    const api = new DemoBlazeApi(request);

    const response = await api.getProducts();

    console.log(response);

    expect(response.Items.length).toBeGreaterThan(0);

    await testInfo.attach('API Response', {
      body: JSON.stringify(response, null, 2),
      contentType: 'application/json'
    });

  });

});