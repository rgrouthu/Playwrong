import{test,expect,request} from '@playwright/test'

test('chaining concept',async({request})=>{
const response= await request.post('https://jsonplaceholder.typicode.com/users',{
    data:{
name:'Alice',
email:'alice@example.com'
    }
});
expect(response.ok()).toBeTruthy();
const createduser= await response.json();
const user = createduser.id;

const getResponse=await request.get(`https://jsonplaceholder.typicode.com/users/${user}`)

const getResponseBody= await getResponse.json();
expect(getResponseBody.name).toBe('Alice')






})
