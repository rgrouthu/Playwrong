import { test, expect, Page, Locator } from '@playwright/test'
import { addToCartPage } from '../PageObjects/addToCartPage';
import { LoginPage } from '../PageObjects/loginPage'


test.describe('@addToCart Add a Product to Cart and Verify',()=>{
    let loginpage:LoginPage;
    let addtocartpage:addToCartPage;
    test.beforeEach(async({page})=>{
        loginpage= new LoginPage(page);
        addtocartpage= new addToCartPage(page);
        await loginpage.doLogin('standard_user', 'secret_sauce');


    });

    test('should add product to cart and verify cart item name', async () => {

        await addtocartpage.addtocart();
        await addtocartpage.verifycartitemsName();
    });
    
})

