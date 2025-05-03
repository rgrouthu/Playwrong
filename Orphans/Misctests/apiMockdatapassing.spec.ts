import { test, expect, Page } from '@playwright/test';
import userData from '../../utils/userData.json'; // adjust path as needed
//import mockUser from '../../utils/mockUser.json'
import arrData from '../../utils/arrData.json'

import fs from 'fs'
import path from 'path'


test('basic api validation', async ({ page }) => {
    for(const ad of arrData){
            console.log(ad)
    }

/* console.log(typeof(userData.age));
console.log(typeof(userData.name));
console.log(JSON.stringify(mockUser))
console.log(JSON.stringify(mockUser)) */
const filePath = path.resolve(__dirname,'../../utils/mockUser.json')
const jsonData = JSON.parse(fs.readFileSync(filePath,'utf-8'))
console.log(jsonData)
    await page.route('endpoint url', async route => {
        const mockResponse = {
            status: 200,
            name: 'Ram Ganesh',
            content: 'application/json',
               body: JSON.stringify(jsonData)

        };


        await route.fulfill(mockResponse);

    })

})




