import {test} from '@playwright/test'

test('save state after login',async({page,context})=>{
    await page.goto('https://rahulshettyacademy.com/client');
   await page.fill('#userEmail','rgrouthu@example.com');
    await  page.fill('#userPassword','Client@123');
    await page.locator('#login').click();
    await page.waitForSelector("//i[contains(@class,'fa-sign-out')]"); 

await page.context().storageState({path:'state.json'})

})



