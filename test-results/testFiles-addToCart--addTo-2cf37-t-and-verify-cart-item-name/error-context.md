# Test info

- Name: @addToCart Add a Product to Cart and Verify >> should add product to cart and verify cart item name
- Location: E:\Playwrong\tests\testFiles\addToCart.spec.ts:17:9

# Error details

```
Error: page.goto: net::ERR_CONNECTION_CLOSED at https://www.saucedemo.com/
Call log:
  - navigating to "https://www.saucedemo.com/", waiting until "load"

    at LoginPage.doLogin (E:\Playwrong\tests\PageObjects\loginPage.ts:21:25)
    at E:\Playwrong\tests\testFiles\addToCart.spec.ts:12:25
```

# Page snapshot

```yaml
- heading "This site can’t be reached" [level=1]
- paragraph:
  - strong: www.saucedemo.com
  - text: unexpectedly closed the connection.
- paragraph: "Try:"
- list:
  - listitem: Checking the connection
  - listitem:
    - link "Checking the proxy and the firewall":
      - /url: "#buttons"
  - listitem:
    - link "Running Windows Network Diagnostics":
      - /url: javascript:diagnoseErrors()
- text: ERR_CONNECTION_CLOSED
- button "Reload"
- button "Details"
```

# Test source

```ts
   1 | import { expect, Locator, Page } from '@playwright/test'
   2 | export class LoginPage {
   3 |     private page: Page;
   4 |     private baseURL: string = 'https://www.saucedemo.com/';
   5 |     private userName: Locator;
   6 |     private passWord: Locator;
   7 |     private loginButton: Locator;
   8 |     private expectedNavigationUrl: string = 'https://www.saucedemo.com/inventory.html';
   9 |     private inventory: Locator;
  10 |     constructor(page: Page) {
  11 |         this.page = page;
  12 |         this.userName = page.locator('#user-name');
  13 |         this.passWord = page.locator('#password');
  14 |         this.loginButton = page.locator('#login-button');
  15 |         this.inventory = page.locator('.inventory_item');
  16 |     }
  17 |
  18 |
  19 |     async doLogin(loginUsername: string, loginPassword: string): Promise<void> {
  20 |
> 21 |         await this.page.goto(this.baseURL);
     |                         ^ Error: page.goto: net::ERR_CONNECTION_CLOSED at https://www.saucedemo.com/
  22 |         await this.userName.fill(loginUsername);
  23 |         await this.passWord.fill(loginPassword);
  24 |         await this.loginButton.click();
  25 |     }
  26 |
  27 |     async verifyPostLoginNavigationURL() {
  28 |
  29 |         await expect(this.page).toHaveURL(this.expectedNavigationUrl);
  30 |         await expect(this.inventory.first()).toBeVisible();
  31 |     }
  32 |
  33 |
  34 | }
  35 |
  36 |
```