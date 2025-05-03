import {test,expect,Page,Locator} from '@playwright/test'
test('@checkOut CheckOut a Product Verify',async({page})=>{

 
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
    const productList=await page.locator("//div[@class='inventory_item_description']").first();
    await productList.locator("//button[contains(@id,'add-to-cart')]").click();
    await page.locator("//a[@class='shopping_cart_link']").click();
    await page.locator('#checkout').click();
    await page.locator('#first-name').fill('abc');
    await page.locator('#last-name').fill('xyz');
    await page.locator('#postal-code').fill('34343');
    await page.locator('#continue').click();
    await page.locator('#finish').click();
    const orderFinish=await page.locator('.complete-header').isVisible();
    expect(await page.locator('.complete-header').textContent()).toBe('Thank you for your order!');

    





});