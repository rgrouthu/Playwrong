import { test, expect, Page, Locator } from '@playwright/test'


export class addToCartPage {

    private page: Page;
    private productList: Locator;
    private addtocartButton: Locator;
    private gotoCartButton: Locator;
    private cartItems: Locator;
    private cartitemName: Locator;
    private productName:any;

    constructor(page: Page) {
        this.page = page;
        this.productList = page.locator("//div[@class='inventory_item_description']");
        this.addtocartButton = this.productList.locator("//button[contains(@id,'add-to-cart')]");
        this.gotoCartButton = page.locator("//a[@class='shopping_cart_link']");
        this.cartItems = page.locator('.cart_item').first();
        this.cartitemName = this.cartItems.locator("//div[@class='cart_item_label']/a")

    }

    async getFirstProductName(): Promise<string | null>{
        const firstProduct=this.productList.first();
        const firstProductName=firstProduct.locator("//div[@class='inventory_item_label']/a").textContent();
        return firstProductName;
    }
    async getCartItemName():Promise<string | null>{
        const cartitemText = await this.cartitemName.textContent();
        return cartitemText;
    }
    async addtocart() {   
      this.productName=await this.getFirstProductName()
        await this.addtocartButton.first().click();
        await this.gotoCartButton.click();
    }
    async verifycartitemsName() {
        expect(this.productName).toBe(await this.getCartItemName());

    }


}



