import { test, Page, Locator, expect } from '@playwright/test'
export class SortItems {
    private page: Page;
    private sortContainer: Locator;

    private itemPrices: Locator;

    constructor(page) {
        this.page = page;
        this.sortContainer = page.locator('.product_sort_container');
       
        this.itemPrices = page.locator('.inventory_item_price');

    }
    async verifySortContainerVisibilty(): Promise<boolean> {
        const isContainerVisible = await this.sortContainer.isVisible()
        return isContainerVisible;
    }
    async verifyLowtoHighSort(): Promise<boolean> {
       await this.page.selectOption('.product_sort_container', { value: "lohi" });
        const itemPrices = await this.itemPrices.allTextContents();
        let priceList: number[] = [];
        for (const price of itemPrices) {
            priceList.push(parseFloat(price.split('$')[1]))
        }
        const isSortedLowtoHigh = priceList.every((val, i, a) => i === 0 || a[i - 1] <= val);
        console.log(priceList)
        console.log(isSortedLowtoHigh);

        return isSortedLowtoHigh;

    }

    async verifyHightoLowSort(): Promise<boolean> {
        await this.page.selectOption('.product_sort_container', { value: "hilo" });
        const itemPrices2 = await this.itemPrices.allTextContents();
        let priceList2: number[] = [];
        for (const price of itemPrices2) {
            priceList2.push(parseFloat(price.split('$')[1]))
        }
        console.log(priceList2)
        const isSortedHightoLow = priceList2.every((val, i, a) => i === 0 || a[i - 1] >= val);
        console.log(isSortedHightoLow);
        return isSortedHightoLow;


    }

}