import { test, expect, Page, Locator, Browser } from '@playwright/test'
import { LoginPage } from '../PageObjects/loginPage'
import { addToCartPage } from '../PageObjects/addToCartPage'
import { CheckOutPage } from '../PageObjects/checkoutFlowPage'
import { RemoveCart } from '../PageObjects/removeFromCart'
import { SortItems } from '../PageObjects/sortItemPage'


test.describe('@regression sort Items', () => {

    let lp: LoginPage;
    let ap: addToCartPage;
    let cop: CheckOutPage;
    let rc: RemoveCart;
    let sort: SortItems;
    let context: any;
    let page: Page;
    test.beforeAll('Initialise Objects', async ({ browser }) => {
        context = await browser.newContext();
        page = await context.newPage();
        lp = new LoginPage(page);
        ap = new addToCartPage(page);
        cop = new CheckOutPage(page);
        rc = new RemoveCart(page);
        sort = new SortItems(page)
    });

    test('@smoke Add a Product to Cart and Verify', async () => {

        await lp.doLogin('standard_user', 'secret_sauce');
    



        if (expect(sort.verifySortContainerVisibilty())) {
            console.log(await sort.verifySortContainerVisibilty())
            expect(await sort.verifyHightoLowSort()).toBeTruthy();
            expect(await sort.verifyLowtoHighSort()).toBeTruthy();
        }
        else {
            console.log('sort icon visibility status', expect(await sort.verifySortContainerVisibilty))
        }






    });



})


/* await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
    await page.locator('.product_sort_container').isVisible();
    await page.selectOption('.product_sort_container',{value:"lohi"});
    const itemPrices= await page.locator('.inventory_item_price').allTextContents();
    let priceList:number[]=[];
    for(const price of itemPrices){
        priceList.push(parseFloat(price.split('$')[1]))    
    }
    const isSorted =priceList.every((val,i,a)=>i===0||a[i-1]<=val);
    expect(isSorted).toBeTruthy()
    console.log(priceList)

    await page.selectOption('.product_sort_container',{value:"hilo"});
    const itemPrices2= await page.locator('.inventory_item_price').allTextContents();
    let priceList2:number[]=[];
    for(const price of itemPrices2){
        priceList2.push(parseFloat(price.split('$')[1]))    
    }
    console.log(priceList2)
const isSorted2=priceList2.every((val,i,a)=>i===0||a[i-1]>=val);
expect(isSorted2).toBeTruthy()


 */