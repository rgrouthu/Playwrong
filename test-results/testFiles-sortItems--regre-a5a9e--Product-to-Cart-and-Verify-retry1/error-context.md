# Test info

- Name: @regression sort Items >> @smoke Add a Product to Cart and Verify
- Location: E:\Playwrong\tests\testFiles\sortItems.spec.ts:28:5

# Error details

```
Error: page.selectOption: Target page, context or browser has been closed
Call log:
  - waiting for locator('.product_sort_container')

    at SortItems (E:\Playwrong\tests\PageObjects\sortItemPage.ts:12:41)
    at E:\Playwrong\tests\testFiles\sortItems.spec.ts:25:10
```

# Test source

```ts
   1 | import { test, Page, Locator, expect } from '@playwright/test'
   2 | export class SortItems {
   3 |     private page: Page;
   4 |     private sortContainer: Locator;
   5 |     private itemPricesLowtoHigh: Locator;
   6 |     private itemPricesHightoLow: Locator;
   7 |     private itemPrices: Locator;
   8 |
   9 |     constructor(page) {
  10 |         this.page = page;
  11 |         this.sortContainer = page.locator('.product_sort_container');
> 12 |         this.itemPricesLowtoHigh = page.selectOption('.product_sort_container', { value: "lohi" });
     |                                         ^ Error: page.selectOption: Target page, context or browser has been closed
  13 |         this.itemPricesHightoLow = page.selectOption('.product_sort_container', { value: "hilo" });
  14 |         this.itemPrices = page.locator('.inventory_item_price');
  15 |
  16 |     }
  17 |     async verifySortContainerVisibilty(): Promise<boolean> {
  18 |         const isContainerVisible = await this.sortContainer.isVisible()
  19 |         return isContainerVisible;
  20 |     }
  21 |     async verifyLowtoHighSort(): Promise<boolean> {
  22 |         await this.itemPricesLowtoHigh
  23 |         const itemPrices = await this.itemPrices.allTextContents();
  24 |         let priceList: number[] = [];
  25 |         for (const price of itemPrices) {
  26 |             priceList.push(parseFloat(price.split('$')[1]))
  27 |         }
  28 |         const isSortedLowtoHigh = priceList.every((val, i, a) => i === 0 || a[i - 1] <= val);
  29 |         console.log(priceList)
  30 |         console.log(isSortedLowtoHigh);
  31 |
  32 |         return isSortedLowtoHigh;
  33 |
  34 |     }
  35 |
  36 |     async verifyHightoLowSort(): Promise<boolean> {
  37 |         await this.itemPricesHightoLow
  38 |         const itemPrices2 = await this.itemPrices.allTextContents();
  39 |         let priceList2: number[] = [];
  40 |         for (const price of itemPrices2) {
  41 |             priceList2.push(parseFloat(price.split('$')[1]))
  42 |         }
  43 |         console.log(priceList2)
  44 |         const isSortedHightoLow = priceList2.every((val, i, a) => i === 0 || a[i - 1] >= val);
  45 |         console.log(isSortedHightoLow);
  46 |         return isSortedHightoLow;
  47 |
  48 |
  49 |     }
  50 |
  51 | }
```