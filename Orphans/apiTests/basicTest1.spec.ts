import{test,expect,request} from '@playwright/test'
import { waitForDebugger } from 'inspector';
import { Context } from 'vm';
test('basic get call',async({request})=>{
const response = await request.get('https://jsonplaceholder.typicode.com/users');
expect(response.status()).toBe(200);
const body=await response.json();
console.log(body);
expect (body.length).toBeLessThan(11);




});
test('basic post call',async({request})=>{
const response=await request.post('https://jsonplaceholder.typicode.com/users',{data:{
    name: 'John Doe',
      email: 'john@example.com'
}

});
expect(response.status()).toBe(201);
const body = await response.json();
expect(body.name).toBe('John Doe')

 
});


test('basic api put call',async({request})=>{

const response = await request.put('https://jsonplaceholder.typicode.com/users/1',{data:{
name: 'Updated Name'
}});
console.log(response);
expect(response.ok()).toBeTruthy();


});


test('DELETE user', async ({ request }) => {
    const response = await request.delete('https://jsonplaceholder.typicode.com/users/1');
    expect(response.status()).toBe(200);
  });
  

  //Example: API with Auth Token

test('API with Auth Token',async({request})=>{
  
    const token ='token here';
    const response= await request.get('https://api.example.com/data',{
        headers:{
            Authorization:`Bearer${token}`
        }
    });
    expect(response.status()).toBe(200);  

})




test.describe('API Suite',()=>{

let apiContext:Context;

test.beforeAll(async({playwright})=>{
apiContext=await playwright.request.newContext({
    baseURL:'https://jsonplaceholder.typicode.com',
    extraHTTPHeaders:{
        'Authorization': `Bearer your-token`,
        'Content-Type': 'application/json'
    }
});

test('get call',async ()=>{
    const response= await apiContext.get('/posts')
    expect(response.status()).toBe(200)

})


test('post call',async()=>{
  const response =await apiContext.post('/posts',{
    data:{
        title:'foo',
        body:'bar',
        userID:1
    }
  });

  expect(response.ok()).toBeTruthy();
  
    


})

});









})