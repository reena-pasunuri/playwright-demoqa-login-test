import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('DemoQA Login Tests - POM', () => {
    
    test('✅ Successful Login', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigate();
        await loginPage.login('testuser', 'Test@1234');

        const success = await loginPage.isLoginSuccessful();
        expect(success).toBe(true);
    });

    test('❌ Failed Login - Wrong Password', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigate();
        await loginPage.login('testuser', 'WrongPass123');

        const errorMsg = await loginPage.getErrorMessage();
        expect(errorMsg).toContain('Invalid username or password!');
    });

});
