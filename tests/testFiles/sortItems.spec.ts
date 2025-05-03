import {test,expect,Page,Locator} from '@playwright/test'
test('@sort Add a Product to Cart and Verify',async({page})=>{
    await page.goto('https://www.saucedemo.com/');
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



  
  
    // const itemsCount= itemPrices.count();
   











});