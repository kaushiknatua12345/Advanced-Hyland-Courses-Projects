//import playwright modules
import { test, expect } from '@playwright/test';
//import LoginComponent from login page
import {LoginComponent} from'./../src/app/login/login.component';

//create a test describe block

test.describe('Login Test Suite', () => {
    
    //create a before each hook to navigate to login page
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:4200/login');
    });

    //write test to check if username textbox is present
    test('Check if username textbox is present', async ({ page }) => {
        await page.getByRole('textbox', { name: 'username' });  
    } );  
    
    //write test to check if username textbox is clicked
    test('Check if username textbox is clicked', async ({ page }) => {
        await page.click('input[name="username"]');
    } );

    //write test to check if error message is displayed when username is not entered on tab out
    test('Check if error message is displayed when username is not entered on tab out', async ({ page }) => {
        await page.getByRole('textbox', { name: 'username' }).press('Tab');
        await page.getByText('This field is required');
    } );


    //Hands On
    //1. Check of password textbox is present

    //2. Check if password textbox is clicked

    //3. Check if error message is displayed when password is not entered on tab out

    //4. Check if login button is present

    //5. Check if login button is disabled when username and password are not entered

    //6. Check if login button is enabled when username and password are entered


    
});