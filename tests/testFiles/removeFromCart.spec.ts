import {test,expect,Page,Locator,Browser} from '@playwright/test'
import {LoginPage} from '../PageObjects/loginPage'
import {addToCartPage} from '../PageObjects/addToCartPage'
import {CheckOutPage} from '../PageObjects/checkoutFlowPage'
import{RemoveCart} from '../PageObjects/removeFromCart' 
 

test.describe('@regression product removal from cart',()=>{

let lp:LoginPage;
let ap:addToCartPage;
let cop:CheckOutPage;
let rc:RemoveCart;
let context:any;
let page:Page;
test.beforeAll('Initialise Objects',async({browser})=>{
    context= await browser.newContext();
    page= await context.newPage(); 
    lp= new LoginPage(page);
    ap = new addToCartPage(page);
    cop= new CheckOutPage(page);
    rc= new RemoveCart(page);
})



    test('@regression Remove a Product from Cart and Verify',async()=>{
        await lp.doLogin('standard_user','secret_sauce');
        await ap.addtocart();
        await rc.navigateToCartPage();
        await rc.removeCartItems();
        expect(await rc.verifyEmptyCart()).toBeFalsy();




    }); 
})




/* await page.goto('https://www.saucedemo.com/');
await page.locator('#user-name').fill('standard_user');
await page.locator('#password').fill('secret_sauce');
await page.locator('#login-button').click();
const productList=await page.locator("//div[@class='inventory_item_description']").first();
await productList.locator("//button[contains(@id,'add-to-cart')]").click();
await page.locator("//a[@class='shopping_cart_link']").click();
const cartItems=await page.locator('.cart_item_label').first(); 
await cartItems.locator("//div[@class='item_pricebar']/button").click();
const emptyCart= await cartItems.isVisible();
expect(emptyCart).toBeTruthy(); */
