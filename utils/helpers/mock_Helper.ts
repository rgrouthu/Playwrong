import{Page,test,expect}  from '@playwright/test'

export async function mockLogin(page:Page,url:string,mockResponse:any){
    await page.route(url,async route=>{
        await route.fulfill({
            status:200,
            contentType:'application/json',
            body:JSON.stringify(mockResponse)
        })
    })



}