import { test, expect, Page, Locator, Browser } from '@playwright/test';
import { LoginPage } from '../PageObjects/loginPage';
import { addToCartPage } from '../PageObjects/addToCartPage';
import { CheckOutPage } from '../PageObjects/checkoutFlowPage';

test.describe('checkOut Flow Page', () => {

    let lp: LoginPage;
    let acp: addToCartPage;
    let check: CheckOutPage;


    test.beforeEach(async ({ page }) => {
        lp = new LoginPage(page);
        acp = new addToCartPage(page)
        check = new CheckOutPage(page);

    })



    test('@regression CheckOut a Product Verify', async ({ page }) => {

        await lp.doLogin('standard_user', 'secret_sauce');
        await acp.addtocart();
        await check.goToCartPage();
        await check.enterCustomerDetails();
        await check.placeOrder();
     expect(await check.verifyOrderConfirmationMessage()).toBe('Thank you for your order!');


    });
});