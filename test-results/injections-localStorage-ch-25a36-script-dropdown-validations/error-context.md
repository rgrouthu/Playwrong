# Test info

- Name: checking addinitscript >> dropdown validations
- Location: E:\Playwrong\tests\injections\localStorage.spec.ts:87:5

# Error details

```
Error: locator.click: Error: Selector "//frameset[@frameborder='1']" resolved to <frameset rows="50%,50%" frameborder="1">…</frameset>, <iframe> was expected
Call log:
  - waiting for locator('//frameset[@frameborder=\'1\']').contentFrame().locator('#content')

    at E:\Playwrong\tests\injections\localStorage.spec.ts:143:41
```

# Test source

```ts
   43 |
   44 | /* test.use({storageState:'state.json'})
   45 | test('reuse saved login state',async({page})=>{
   46 | await page.goto('https://rahulshettyacademy.com/client');
   47 | console.log(await page.url());
   48 | await page.pause();
   49 |
   50 |
   51 |
   52 | })
   53 |  */
   54 |
   55 | test.describe('checking addinitscript',()=>{
   56 | //let  token:string;
   57 |
   58 | /* test.beforeAll('Login and use the token in other steps',async({request})=>{
   59 |       const response=  await request.post('https://rahulshettyacademy.com/api/ecom/auth/login',{
   60 |             data:{"userEmail":"rgrouthu@example.com",
   61 |                 "userPassword":"Client@123"}
   62 |         })
   63 |
   64 |         const responsedata= await response.json();
   65 |         token=responsedata.token;
   66 | console.log(token)
   67 | })
   68 |
   69 | test('reuse catched token',async({page})=>{
   70 |     
   71 |     await page.addInitScript((tokenvalue)=>{
   72 |         window.localStorage.setItem('token',tokenvalue);
   73 |     },token)
   74 |     await page.goto('https://rahulshettyacademy.com/client');
   75 |     console.log(await page.url());
   76 |     await page.screenshot({path:'ss.jpg'}) 
   77 |     expect(await page.screenshot()).toMatchSnapshot('ss.png')
   78 |     await page.locator('value').textContent();
   79 |     await page.locator('value').allTextContents();
   80 |     await page.locator('value').first().textContent();
   81 |     await page.locator('locator').last().textContent();
   82 |     await page.locator('denver').nth(2).textContent();
   83 |     //incase if we want to wait for the whole content to load 
   84 |
   85 |    //dropdown 
   86 | }) */
   87 | test('dropdown validations',async({page,context})=>{
   88 | /* await page.goto('https://www.saucedemo.com/');
   89 | await page.fill('#user-name','standard_user');
   90 | await page.fill('#password','secret_sauce');
   91 | await page.click('#login-button');
   92 | await page.locator('.product_sort_container').selectOption({value:'az'});
   93 | await page.locator('.product_sort_container').selectOption({index:3});
   94 | await page.locator('.product_sort_container').selectOption({label:'Name (Z to A)'});
   95 | await page.pause();
   96 |
   97 | await page.locator('').getAttribute('ekdhotheen')
   98 | expect(page.locator('')).toHaveAttribute('name','rgriouthu');
   99 |
  100 |
  101 | const webPage2=await page.context().waitForEvent('page'); */
  102 |
  103 | /* await page.goto('https://the-internet.herokuapp.com/windows');
  104 | const [newTab1] =await Promise.all([
  105 |      page.context().waitForEvent('page'),
  106 |
  107 |  page.click("//a[@href='/windows/new']"),page.click("//a[@href='/windows/new']"),page.click("//a[@href='/windows/new']")
  108 | ])
  109 |
  110 | console.log(newTab1.url())
  111 | await page.bringToFront();
  112 | await page.pause();
  113 | console.log(newTab2.url())
  114 | await page.bringToFront();
  115 | await page.pause();
  116 | console.log(page.url())
  117 |
  118 | await page.locator('').pressSequentially(''); */
  119 |
  120 | /*  await page.goto('https://www.saucedemo.com/');
  121 | await page.fill('#user-name','standard_user');
  122 | await page.fill('#password','secret_sauce');
  123 | await page.click('#login-button');
  124 | await page.locator('.product_sort_container').selectOption({index:3});
  125 | await page.getByText('Sauce Labs Backpack').click();
  126 | await page.pause();
  127 | await page.goBack();
  128 | await page.pause();
  129 | await page.goForward();
  130 |
  131 | page.on('dialog',dialog => dialog.accept())
  132 | page.on('dialog',dialog=>dialog.dismiss())
  133 | await page.locator('').hover({
  134 |     position: {
  135 |         x: 22,
  136 |         y: 33
  137 |     }
  138 | }) */
  139 |
  140 |     await page.goto('https://the-internet.herokuapp.com/nested_frames');
  141 |     const framesPage=page.frameLocator("//frameset[@frameborder='1']");
  142 |     await page.pause();
> 143 |    await framesPage.locator('#content').click();
      |                                         ^ Error: locator.click: Error: Selector "//frameset[@frameborder='1']" resolved to <frameset rows="50%,50%" frameborder="1">…</frameset>, <iframe> was expected
  144 |     await page.pause();
  145 | });
  146 |
  147 | //childwindowshandling
  148 |
  149 |
  150 | });
```