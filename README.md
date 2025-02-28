# playwright-demoqa-login-test
Automated login tests for DemoQA using Playwright. Includes positive and negative test cases, error handling, and UI validation.

This project automates login testing for [DemoQA](https://demoqa.com/login) using Playwright.

## Features
- Automates login for DemoQA
- Validates successful & failed login attempts
- Uses Playwright with Jest for structured testing
- Includes assertions for UI validation

## Test Cases
| Scenario      | Steps                             | Expected Outcome         |
|---------------|-----------------------------------|--------------------------|
| Valid Login   | Enter correct username & password | Redirect to profile page |
| Invalid Login | Enter wrong credentials           | Show error message       |
| Login Timeout | Simulate slow network             | Login should handle delay properly |



