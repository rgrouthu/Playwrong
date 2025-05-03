import {test,expect,Page,Locator} from '@playwright/test'
test('@removeFromCart Remove a Product from Cart and Verify',async({page})=>{
await page.goto('https://www.saucedemo.com/');
await page.locator('#user-name').fill('standard_user');
await page.locator('#password').fill('secret_sauce');
await page.locator('#login-button').click();
const productList=await page.locator("//div[@class='inventory_item_description']").first();
await productList.locator("//button[contains(@id,'add-to-cart')]").click();
await page.locator("//a[@class='shopping_cart_link']").click();
const cartItems=await page.locator('.cart_item_label').first(); 
await cartItems.locator("//div[@class='item_pricebar']/button").click();
const emptyCart= await cartItems.isVisible();
expect(emptyCart).toBeTruthy();


});