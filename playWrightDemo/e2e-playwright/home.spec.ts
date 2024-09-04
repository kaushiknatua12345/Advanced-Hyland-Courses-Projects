import { test, expect } from '@playwright/test';
import {HomeComponent} from './../src/app/home/home.component';

test('test', async ({ page }) => {
  await page.goto('http://localhost:4200/');
 
 //write test for h1 tag found under Home Component    
    // await page.getByRole('heading', { name: 'Employee Management System' });
    await page.getByRole('heading', { name: 'Employee Management System' });   

 // await page.getByRole('heading', { name: 'Employee Management System' });
  await page.getByRole('link', { name: 'Login' });
  
  //write test code for link to navigate to login component
  await page.goto('http://localhost:4200/login');

});