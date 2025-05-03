// tests/fixtures/basic-fixture.spec.ts
import { test as base, expect } from '@playwright/test';
import { promises } from 'dns';

const test = base.extend<{customMessage:string}>({
    customMessage:async ({},use)=>{
        await use('Hello world')
    }
});

test('use custom Fixture',async({customMessage})=>{
console.log(customMessage);


})


//create a authtoken fixture
const test2 = base.extend<{AuthToken}>({AuthToken: async ({},use)=>{
    const token=await getauthToken();
    await use(token)
}})



async function getauthToken():Promise<string>{
    return 'mockeddata123'
}   

test2('vasantham',async({AuthToken})=>{
    console.log(AuthToken);
})