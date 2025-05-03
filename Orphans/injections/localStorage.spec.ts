import { test, expect } from '@playwright/test'

/* test('Playwright cookies testing', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/client', { waitUntil: 'domcontentloaded' });
    await page.evaluate(() => {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODE0NmNkN2ZjNzY1NDFhYWQ0YTkwZTciLCJ1c2VyRW1haWwiOiJyZ3JvdXRodUBleGFtcGxlLmNvbSIsInVzZXJNb2JpbGUiOjg4MDk4ODgwOTgsInVzZXJSb2xlIjoiY3VzdG9tZXIiLCJpYXQiOjE3NDYxNjkwNjQsImV4cCI6MTc3NzcyNjY2NH0.3TfKaN3WTJi3aB8bUcJod6J2Sk98dUFRq_OFA3SvZ04');
        sessionStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODE0NmNkN2ZjNzY1NDFhYWQ0YTkwZTciLCJ1c2VyRW1haWwiOiJyZ3JvdXRodUBleGFtcGxlLmNvbSIsInVzZXJNb2JpbGUiOjg4MDk4ODgwOTgsInVzZXJSb2xlIjoiY3VzdG9tZXIiLCJpYXQiOjE3NDYxNjkwNjQsImV4cCI6MTc3NzcyNjY2NH0.3TfKaN3WTJi3aB8bUcJod6J2Sk98dUFRq_OFA3SvZ04');


    })
    await page.reload();

    await page.getByRole('button', { name: 'Sign Out' }).isVisible();
    await page.pause();
})


test('Playwright cookie injection', async ({ page, context }) => {

    await context.addCookies([
        {
            name: 'session-username',
            value: 'standard_user',
            domain: 'www.saucedemo.com',
            path: '/',
            expires: Math.floor(new Date('2025-05-02T10:33:52.000Z').getTime() / 1000),
            httpOnly: false
        }]

    )

    await page.goto('https://www.saucedemo.com/',{waitUntil:'load'});
    const cookiedata= await context.cookies();
    console.log(cookiedata)






})
 */

/* test.use({storageState:'state.json'})
test('reuse saved login state',async({page})=>{
await page.goto('https://rahulshettyacademy.com/client');
console.log(await page.url());
await page.pause();



})
 */

test.describe('checking addinitscript',()=>{
//let  token:string;

/* test.beforeAll('Login and use the token in other steps',async({request})=>{
      const response=  await request.post('https://rahulshettyacademy.com/api/ecom/auth/login',{
            data:{"userEmail":"rgrouthu@example.com",
                "userPassword":"Client@123"}
        })

        const responsedata= await response.json();
        token=responsedata.token;
console.log(token)
})

test('reuse catched token',async({page})=>{
    
    await page.addInitScript((tokenvalue)=>{
        window.localStorage.setItem('token',tokenvalue);
    },token)
    await page.goto('https://rahulshettyacademy.com/client');
    console.log(await page.url());
    await page.screenshot({path:'ss.jpg'}) 
    expect(await page.screenshot()).toMatchSnapshot('ss.png')
    await page.locator('value').textContent();
    await page.locator('value').allTextContents();
    await page.locator('value').first().textContent();
    await page.locator('locator').last().textContent();
    await page.locator('denver').nth(2).textContent();
    //incase if we want to wait for the whole content to load 

   //dropdown 
}) */
test('dropdown validations',async({page,context})=>{
/* await page.goto('https://www.saucedemo.com/');
await page.fill('#user-name','standard_user');
await page.fill('#password','secret_sauce');
await page.click('#login-button');
await page.locator('.product_sort_container').selectOption({value:'az'});
await page.locator('.product_sort_container').selectOption({index:3});
await page.locator('.product_sort_container').selectOption({label:'Name (Z to A)'});
await page.pause();

await page.locator('').getAttribute('ekdhotheen')
expect(page.locator('')).toHaveAttribute('name','rgriouthu');


const webPage2=await page.context().waitForEvent('page'); */

/* await page.goto('https://the-internet.herokuapp.com/windows');
const [newTab1] =await Promise.all([
     page.context().waitForEvent('page'),

 page.click("//a[@href='/windows/new']"),page.click("//a[@href='/windows/new']"),page.click("//a[@href='/windows/new']")
])

console.log(newTab1.url())
await page.bringToFront();
await page.pause();
console.log(newTab2.url())
await page.bringToFront();
await page.pause();
console.log(page.url())

await page.locator('').pressSequentially(''); */

/*  await page.goto('https://www.saucedemo.com/');
await page.fill('#user-name','standard_user');
await page.fill('#password','secret_sauce');
await page.click('#login-button');
await page.locator('.product_sort_container').selectOption({index:3});
await page.getByText('Sauce Labs Backpack').click();
await page.pause();
await page.goBack();
await page.pause();
await page.goForward();

page.on('dialog',dialog => dialog.accept())
page.on('dialog',dialog=>dialog.dismiss())
await page.locator('').hover({
    position: {
        x: 22,
        y: 33
    }
}) */

    await page.goto('https://the-internet.herokuapp.com/nested_frames');
    const framesPage=page.frameLocator("//frameset[@frameborder='1']");
    await page.pause();
   await framesPage.locator('#content').click();
    await page.pause();
});

//childwindowshandling


});