import {test,Page,expect} from '@playwright/test'
import {mockLogin} from '../../utils/helpers/mock_Helper'
import userData from '../../utils/testData/userData.json'

test('test with mock api helper ',async ({page})=>{
    console.log(userData)
await mockLogin(page,'**/api/login',userData)



})