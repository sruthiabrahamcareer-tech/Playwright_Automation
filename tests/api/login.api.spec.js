const { test, expect } = require('@playwright/test');
const { DemoBlazeApi } = require('../../api/demoblaze.api');
const  dataset  = require('../../utils/logincredentials.json');

test('Login through API', async ({ request }) => {

    const user = dataset[2]["valid user"];
  const api = new DemoBlazeApi(request);

  const response = await api.login(
    user.username,
    user.password);
    console.log(user.username);
    console.log(user.password);
  

  console.log(response);

  expect(response).toContain('Auth_token');
});