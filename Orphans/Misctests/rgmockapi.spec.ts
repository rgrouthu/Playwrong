import { test, Page, expect } from '@playwright/test'
import mockUser from '../../utils/userData.json'


//basic test
test('basic api flow check', async ({ page }) => {


    /* await page.route('url',async route=>{
    await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(mockUser),
    
    }) */


    await page.route('endpointurl', async route => {
        await route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify(mockUser),
        })

    })
    console.log(mockUser)
});

//abort a api
test('abort api', async ({ page }) => {
    await page.route('endpoint', route => route.abort())

})


//add delays 

test('add Delays', async ({ page }) => {

    await page.route('//endpoints', async route => {
        await new Promise(r => setTimeout(r, 3000))
        await route.continue();
    })


})

//abort 

test('abort api2', async ({ page }) => {
    await page.route('sample endppoint', async route => { await route.abort() })


})


//internal server error 


test('Internalspi', async ({ page }) => {

    await page.route('matching endpooint', route => {
        route.fulfill({
            status: 500,
            body: 'Internal server error'
        })
    })

})




test('conditionalMocking', async ({ page }) => {
    let userName: string = 'admin11';
    console.log(userName)

    await page.route('', async (route) => {
        if (userName === 'admin') {
            console.log('valid user');
            await route.fulfill({
                status: 200,
                body: JSON.stringify({ user: 'sam', pwd: 'john' })
            });
        } else {
            console.log('invalid user');
            await route.fulfill({
                status: 401,
                body: JSON.stringify({ error: 'unauthorized user' })
            });
        }
    });
    console.log(userName)
});
    // You can continue adding assertions here, depending on what you want to test
    

//advanced mocking 


test('Advanced mocking by modifying live response',async ({page})=>{
    const originalResponse=page.request.fetch('url');
    const body=await (await originalResponse).json();
    body.items.push({id:999,name:'Mocked Item'});
await page.route('**/login/api',async route=>{
    await route.fulfill({
        body: JSON.stringify(body),
    })

})



})