const { expect } = require('@playwright/test');

class DemoBlazeApi {

  constructor(request) {
    this.request = request;
    this.baseUrl = 'https://api.demoblaze.com';
  }

  async getProducts() {
    const response = await this.request.get(
      `${this.baseUrl}/entries`
    );

    expect(response.status()).toBe(200);

    return await response.json();
  }

  async login(username, password) {
    const response = await this.request.post(
      `${this.baseUrl}/login`,
      {
        data: {
          username: username,
          password: password
        }
      }
    );

    expect(response.status()).toBe(200);

    return await response.text();
  }

}

module.exports = { DemoBlazeApi };