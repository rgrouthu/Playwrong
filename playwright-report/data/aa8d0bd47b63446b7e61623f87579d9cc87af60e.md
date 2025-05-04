# Test info

- Name: checkOut Flow Page >> @regression CheckOut a Product Verify
- Location: E:\Playwrong\tests\testFiles\checkoutFlow.spec.ts:22:9

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "Thank you for your order!!"
Received: "Thank you for your order!"
    at CheckOutPage.verifyOrderConfirmation (E:\Playwrong\tests\PageObjects\checkoutFlowPage.ts:43:64)
    at E:\Playwrong\tests\testFiles\checkoutFlow.spec.ts:29:9
```

# Page snapshot

```yaml
- button "Open Menu"
- img "Open Menu"
- text: "Swag Labs Checkout: Complete!"
- img "Pony Express"
- heading "Thank you for your order!" [level=2]
- text: Your order has been dispatched, and will arrive just as fast as the pony can get there!
- button "Back Home"
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
   1 | import{test,expect,Page,Locator} from '@playwright/test'
   2 | export class CheckOutPage{
   3 |     private page:Page;
   4 |     private checkOutButton:Locator;
   5 |     private firstNameField:Locator;
   6 |     private lastNameField:Locator;
   7 |     private postalCodeField:Locator;
   8 |     private continueButton:Locator;
   9 |     private finishOrderButton:Locator;
  10 |     private orderFinishConfirmMessage:Locator;
  11 | constructor(page:Page)
  12 | {
  13 |   this.page=page;
  14 |   this.firstNameField=this.page.locator("#first-name");
  15 |    this.lastNameField=this.page.locator("#last-name");
  16 |    this.postalCodeField=this.page.locator('#postal-code');
  17 |    this.continueButton=this.page.locator('#continue');
  18 |    this.finishOrderButton=this.page.locator('#finish');
  19 | this.orderFinishConfirmMessage=this.page.locator('.complete-header');
  20 | this.checkOutButton=this.page.locator('#checkout');
  21 | }
  22 |
  23 |
  24 |
  25 | async goToCartPage(){
  26 |     await this.checkOutButton.click();
  27 | }
  28 |
  29 | async enterCustomerDetails(){
  30 |    await this.firstNameField.fill('abc');
  31 |     await this.lastNameField.fill('xyz');
  32 |     await this.postalCodeField.fill('5345345');
  33 |     await this.continueButton.click();
  34 | }
  35 |
  36 | async placeOrder(){
  37 |    await this.finishOrderButton.click();
  38 |
  39 | }
  40 |
  41 | async verifyOrderConfirmation(){
  42 |     await this.orderFinishConfirmMessage.isVisible();
> 43 |     expect(await this.orderFinishConfirmMessage.textContent()).toBe('Thank you for your order!!');
     |                                                                ^ Error: expect(received).toBe(expected) // Object.is equality
  44 | }
  45 | }
```