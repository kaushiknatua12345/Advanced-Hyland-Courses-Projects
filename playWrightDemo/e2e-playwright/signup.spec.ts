import{test,expect} from '@playwright/test';
import {Register} from '../pages/Register.page';

//create a test to check blank data error message from Register Page Object Model
test('Check For Blank Textboxes',async ({page}) => {

    //before each hook to navigate to register page
    await page.goto('http://localhost:4200/signup');
    const register = new Register(page);

    //call fillForm method from Register Page Object Model
    await register.fillForm('','','','');
    await page.waitForTimeout(3000);
});


//create test for filling form but invalid password
test('Check for invalid password message',async ({page}) => {

    //before each hook to navigate to register page
    await page.goto('http://localhost:4200/signup');
    const register = new Register(page);

    //call fillForm method from Register Page Object Model
    await register.fillForm('John','1234','john@yahoo.in','abcd');
    await page.waitForTimeout(3000);
}
);

//create test for filling form but invalid email
test('Check for invalid email message',async ({page}) => {

    //before each hook to navigate to register page
    await page.goto('http://localhost:4200/signup');
    const register = new Register(page);

    //call fillForm method from Register Page Object Model
    await register.fillForm('John','1234','john','abcd1234');
    await page.waitForTimeout(3000);
}
);  

//create test with valid data
test('Check for valid data',async ({page}) => {

    //before each hook to navigate to register page
    await page.goto('http://localhost:4200/signup');
    const register = new Register(page);

    //call fillForm method from Register Page Object Model
    await register.fillForm('John','1234','john@hyland.com','abcd1234');
    await page.waitForTimeout(3000);
});












