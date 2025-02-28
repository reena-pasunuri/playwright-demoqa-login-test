import { Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly usernameInput: string;
    readonly passwordInput: string;
    readonly loginButton: string;
    readonly profileButton: string;
    readonly errorMessage: string;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = '#userName';
        this.passwordInput = '#password';
        this.loginButton = '#login';
        this.profileButton = '#submit';  // Appears on successful login
        this.errorMessage = '#name'; // Shows error message on failure
    }

    async navigate() {
        await this.page.goto('https://demoqa.com/login');
    }

    async login(username: string, password: string) {
        await this.page.fill(this.usernameInput, username);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.loginButton);
    }

    async isLoginSuccessful(): Promise<boolean> {
        return await this.page.locator(this.profileButton).isVisible();
    }

    async getErrorMessage(): Promise<string> {
        return await this.page.locator(this.errorMessage).textContent() ?? "";
    }
}
