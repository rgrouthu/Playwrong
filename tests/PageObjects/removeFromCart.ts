import {test,Page,Locator,expect} from '@playwright/test'
export class RemoveCart{
private page:Page;
private cartButton:Locator;
private cartItems:Locator;
private removeFromCartButton:Locator;

constructor(page)
{
this.page=page;
this.cartButton=page.locator("//a[@class='shopping_cart_link']");
this.cartItems=page.locator('.cart_item_label').first();
this.removeFromCartButton=this.cartItems.locator("//div[@class='item_pricebar']/button");
}

async navigateToCartPage(){
   await this.cartButton.click();


}
async removeCartItems(){
    await this.removeFromCartButton.click();
}
async verifyEmptyCart(): Promise<boolean>{
   const isEmptyCart= await this.cartItems.isVisible();
   return isEmptyCart;
}

}