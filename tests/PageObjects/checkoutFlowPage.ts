import{test,expect,Page,Locator} from '@playwright/test'
export class CheckOutPage{
    private page:Page;
    private checkOutButton:Locator;
    private firstNameField:Locator;
    private lastNameField:Locator;
    private postalCodeField:Locator;
    private continueButton:Locator;
    private finishOrderButton:Locator;
    private orderFinishConfirmMessage:Locator;
constructor(page:Page)
{
  this.page=page;
  this.firstNameField=this.page.locator("#first-name");
   this.lastNameField=this.page.locator("#last-name");
   this.postalCodeField=this.page.locator('#postal-code');
   this.continueButton=this.page.locator('#continue');
   this.finishOrderButton=this.page.locator('#finish');
this.orderFinishConfirmMessage=this.page.locator('.complete-header');
this.checkOutButton=this.page.locator('#checkout');
}



async goToCartPage(){
    await this.checkOutButton.click();
}

async enterCustomerDetails(){
   await this.firstNameField.fill('abc');
    await this.lastNameField.fill('xyz');
    await this.postalCodeField.fill('5345345');
    await this.continueButton.click();
}

async placeOrder(){
   await this.finishOrderButton.click();

}

async verifyOrderConfirmationMessage(): Promise<string | null>{
    await this.orderFinishConfirmMessage.isVisible();
    const successfullMessage =await this.orderFinishConfirmMessage.textContent();
    return successfullMessage
    //expect(await this.orderFinishConfirmMessage.textContent()).toBe('Thank you for your order!');
}
}