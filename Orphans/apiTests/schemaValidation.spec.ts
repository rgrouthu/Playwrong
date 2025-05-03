import{test,expect,request} from '@playwright/test'
import{z} from 'zod'
import{Ajv} from'ajv'
import addFormats from 'ajv-formats';

const ajv = new Ajv();
addFormats(ajv);

const userSchema=z.object({
        id: z.number(),
        name: z.string(),
        username: z.string(),
        email: z.string().email(),
        address: z.object({
          street: z.string(),
          suite: z.string(),
          city: z.string(),
          zipcode: z.string(),
          geo: z.object({
            lat: z.string(),
            lng: z.string(),
          }),
        }),
        phone: z.string(),
        website: z.string(),
        company: z.object({
          name: z.string(),
          catchPhrase: z.string(),
          bs: z.string(),
        }),
      });

test('validate response schema',async ({request})=>{
const response =await request.get('https://jsonplaceholder.typicode.com/users/1');
expect(response.ok()).toBeTruthy();
const body = await response.json();
const parsedData = userSchema.safeParse(body);
if (!parsedData.success) {
    console.log(parsedData.error.format()); // Pretty object-based error message
    console.log(parsedData.error.issues);  // Detailed array of issues
  }

expect(parsedData.success).toBe(true);


})



const userSchema1={
    type: 'object',
    properties: {
      id: { type: 'number' },
      name: { type: 'string' },
      email: { type: 'string', format: 'email' },
    },
    required: ['id', 'name', 'email'],
};


test('schema validation using ajv',async({request})=>{
const response = await request.get('https://jsonplaceholder.typicode.com/users/1');
const body = response.json();
const validateUserChema= ajv.compile(userSchema1);
const validateResult= validateUserChema(body)

if(!validateResult){
    console.log('error log',validateUserChema.errorsa)
}


});