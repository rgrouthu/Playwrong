import{Page,expect,test} from '@playwright/test'
import { LoginPage } from '../PageObjects/loginPage';
import { addToCartPage } from '../PageObjects/addToCartPage';



test('Injections using evaluate',async({page})=>{


  await page.goto('https://login.yahoo.com/?.src=ym&pspid=159600001&activity=mail-direct&.lang=en-IN&.intl=in&.done=https%3A%2F%2Fmail.yahoo.com%2Fd%3F.lang%3Den-IN');
   // Navigate to Google
const staySigninLocator=await page.evaluate(()=>{

  const element = document.getElementById('persistent');
  element?.click()
  return element ? (element as HTMLInputElement).checked : null; // Return true/false if checked
 

})

expect(staySigninLocator).toBeNull();
});
