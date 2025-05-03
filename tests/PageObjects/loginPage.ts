import { expect, Locator, Page } from '@playwright/test'
export class LoginPage {
    private page: Page;
    private baseURL: string = 'https://www.saucedemo.com/';
    private userName: Locator;
    private passWord: Locator;
    private loginButton: Locator;
    private expectedNavigationUrl: string = 'https://www.saucedemo.com/inventory.html';
    private inventory: Locator;
    constructor(page: Page) {
        this.page = page;
        this.userName = page.locator('#user-name');
        this.passWord = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.inventory = page.locator('.inventory_item');
    }


    async doLogin(loginUsername: string, loginPassword: string): Promise<void> {

        await this.page.goto(this.baseURL);
        await this.userName.fill(loginUsername);
        await this.passWord.fill(loginPassword);
        await this.loginButton.click();
    }

    async verifyPostLoginNavigationURL() {

        await expect(this.page).toHaveURL(this.expectedNavigationUrl);
        await expect(this.inventory.first()).toBeVisible();
    }


}

