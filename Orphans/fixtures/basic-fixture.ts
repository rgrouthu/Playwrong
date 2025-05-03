import{test as base,expect} from '@playwright/test'

export const test=base.extend<{fakeUser:{id:number,name:string}}>({
    fakeUser: async ({},use)=>{
        const user={id:1,name:'Alice'} 
        use(user)
    }
})

