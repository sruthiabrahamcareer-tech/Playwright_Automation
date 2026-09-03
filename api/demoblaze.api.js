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
  const encodedPassword = Buffer.from(password).toString('base64');

    const response = await this.request.post(
      `${this.baseUrl}/login`,
      {
        data: {
          username: username,
          password: encodedPassword
        }
      }
    );

    expect(response.status()).toBe(200);

    return await response.text();
  }

}

module.exports = { DemoBlazeApi };