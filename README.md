# Playwright Automation Framework

This project is a browser automation framework built with Playwright for testing the DemoBlaze web application. It covers key user flows such as login, signup, invalid login attempts, product selection, cart operations, purchase flow, and logout.

The framework follows the Page Object Model (POM) design pattern to keep tests clean, reusable, and maintainable. It also includes Cucumber BDD-style scenarios, JSON-based test data, authentication state reuse, Allure reporting, and Jenkins integration for CI/CD execution.

## Table of Contents
- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Key Features](#key-features)
- [Project Structure](#project-structure)
- [Test Coverage](#test-coverage)
- [Setup and Installation](#setup-and-installation)
- [Running Tests](#running-tests)
- [Reporting](#reporting)
- [CI/CD with Jenkins](#cicd-with-jenkins)
- [Notes](#notes)

## Overview

This repository demonstrates how to automate end-to-end testing for a real-world e-commerce website using Playwright. The focus is on validating user interactions in the browser and ensuring the application behaves correctly across common scenarios.

The framework is designed to:
- reduce duplication in test logic
- support reusable page methods
- handle test data efficiently
- generate detailed reports
- integrate with Jenkins for automated execution

## Technologies Used

- JavaScript
- Node.js
- Playwright
- Playwright Test
- Cucumber (BDD)
- Page Object Model (POM)
- JSON for test data
- Allure Reports
- Jenkins
- Git and GitHub
- npm
- Chrome/Chromium browser

## Key Features

### 1. Playwright-based UI Automation
Automates browser interactions such as:
- navigating pages
- clicking buttons
- filling forms
- validating text and dialogs
- checking product flows

### 2. Page Object Model (POM)
The project separates page-specific locators and actions into reusable classes, which makes the tests easier to maintain and scale.

Example:
- LoginPage.js
- AddToCart.js
- CartCheckoutPage.js
- LogoutPage.js
- productDetailsPage.js

### 3. Test Cases for Core Functionalities
The automated tests cover:
- Valid login
- Invalid username
- Invalid password
- Invalid credentials
- New user registration
- Product selection
- Add to cart
- Checkout flow
- Logout

### 4. Authentication State Reuse
The framework saves authenticated browser state using Playwright storageState so that logged-in sessions can be reused for tests that require an authenticated user.

This reduces repeated login steps and saves test execution time.

### 5. JSON-Based Test Data
Test data is stored in JSON files for easier maintenance and reuse. This includes credentials and product information.

Examples:
- utils/logincredentials.json
- utils/productdetails.json

### 6. Cucumber BDD Support
BDD scenarios are implemented using Cucumber to support behavior-driven testing style.

Files included:
- features/newusersignup.feature
- features/Step-Definitions/newusersignup.js

### 7. Custom Playwright Fixtures
The framework uses custom fixtures to initialize reusable test setup and share browser context across tests.

File:
- utils/fixtures.js

### 8. Allure Reporting
Allure is used to generate rich test execution reports that help visualize:
- passed and failed test cases
- execution duration
- screenshots and traces for failures
- overall test outcome

### 9. Jenkins Integration
The project is prepared to run in a Jenkins pipeline environment so that tests can be triggered automatically as part of CI/CD.

This helps in:
- continuous validation
- early bug detection
- automated quality checks on pull requests or builds

## Project Structure

```text
Playwright_Automation/
├── auth/
│   └── demoblaze-auth.json
├── features/
│   ├── newusersignup.feature
│   ├── newuserspopupclosebtn.feature
│   ├── newuserspopupclosebtn.js
│   └── Step-Definitions/
│       └── newusersignup.js
├── pages/
│   ├── AddToCart.js
│   ├── CartCheckoutPage.js
│   ├── LoginPage.js
│   ├── LogoutPage.js
│   └── productDetailsPage.js
├── tests/
│   ├── Login.spec.js
│   ├── Logout.spec.js
│   ├── Newusersignup.spec.js
│   ├── Purchase.spec.js
│   └── auth.setup.js
├── utils/
│   ├── fixtures.js
│   ├── logincredentials.json
│   └── productdetails.json
├── .gitignore
├── README.md
├── package.json
├── playwright.config.js
├── package-lock.json
└── reports/
