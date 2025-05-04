import { test, expect } from '@playwright/test'
import { LoginPage } from '../PageObjects/loginPage';

test('@smoke  Login and Validate Successful Navigation', async ({ page }) => {
    const lp = new LoginPage(page);
    await lp.doLogin('standard_user', 'secret_sauce');
    await lp.verifyPostLoginNavigationURL();




})
