// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 
   [
    ['list'],
    ['allure-playwright', {
      resultsDir: 'allure-results'
    }]
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    baseURL: 'https://demoblaze.com',
   

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    screenshot: 'only-on-failure', // to capture screenshot only when the test fails, it will save the screenshot in the test-results folder with the name of the test and the timestamp.
    video: 'retain-on-failure', // to capture video only when the test fails, it will save the video in the test-results folder with the name of the test and the timestamp.
    headless: true,// to run the tests in headed mode, it will open the browser and run the tests in it. By default it is true, which means it will run the tests in headless mode, it will not open the browser and run the tests in the background.
    launchOptions: {
    slowMo: 3000
  
  }
  },

  /* Configure projects for major browsers */
  projects: [
// Test for API endpoints
     {
    name: 'api',
    testMatch: /.*\.api\.spec\.js/
  },


    //creates saved authentication state for the user, so that we can use it in the other tests, and we don't have to login again and again, and also it will save time in the test execution.
      {
      name: 'setup',
      testMatch: /.*\.setup\.js/
    },

     // Login + Signup tests
    // NO saved authentication
    {
      name: 'unauthenticated',
      testMatch: [
        /Login\.spec\.js/,
        /Newusersignup\.spec\.js/
      ],

      use: {
        ...devices['Desktop Chrome'],
        storageState: {
          cookies: [],
          origins: []
        }
      }
    },

    // Purchase + Logout tests
    // Uses saved authentication
    {
      name: 'authenticated',
      testMatch: [
        /Purchase\.spec\.js/,
        /Logout\.spec\.js/
      ],
    

    //{      name: 'chromium',
      use: { ...devices['Desktop Chrome'] ,
      storageState: 'auth/demoblaze-auth.json'},
           dependencies: ['setup']

    },
/*
   {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
*/
    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

