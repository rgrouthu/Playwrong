# Test info

- Name: @removeFromCart Remove a Product from Cart and Verify
- Location: E:\Playwrong\tests\testFiles\removeFromCart.spec.ts:2:5

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
    at E:\Playwrong\tests\testFiles\removeFromCart.spec.ts:13:19
```

# Page snapshot

```yaml
- button "Open Menu"
- img "Open Menu"
- text: Swag Labs Your Cart QTY Description
- button "Go back Continue Shopping":
  - img "Go back"
  - text: Continue Shopping
- button "Checkout"
- contentinfo:
  - list:
    - listitem:
      - link "Twitter":
        - /url: https://twitter.com/saucelabs
    - listitem:
      - link "Facebook":
        - /url: https://www.facebook.com/saucelabs
    - listitem:
      - link "LinkedIn":
        - /url: https://www.linkedin.com/company/sauce-labs/
  - text: © 2025 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
   1 | import {test,expect,Page,Locator} from '@playwright/test'
   2 | test('@removeFromCart Remove a Product from Cart and Verify',async({page})=>{
   3 | await page.goto('https://www.saucedemo.com/');
   4 | await page.locator('#user-name').fill('standard_user');
   5 | await page.locator('#password').fill('secret_sauce');
   6 | await page.locator('#login-button').click();
   7 | const productList=await page.locator("//div[@class='inventory_item_description']").first();
   8 | await productList.locator("//button[contains(@id,'add-to-cart')]").click();
   9 | await page.locator("//a[@class='shopping_cart_link']").click();
  10 | const cartItems=await page.locator('.cart_item_label').first(); 
  11 | await cartItems.locator("//div[@class='item_pricebar']/button").click();
  12 | const emptyCart= await cartItems.isVisible();
> 13 | expect(emptyCart).toBeTruthy();
     |                   ^ Error: expect(received).toBeTruthy()
  14 |
  15 |
  16 | });
```