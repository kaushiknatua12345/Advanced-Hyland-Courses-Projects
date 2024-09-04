import { expect, Locator, Page } from '@playwright/test';

//create a page object model for signup page to submit form on button click
export class Register {
    private page: Page;
    private name: Locator;
    private employeeCode: Locator;
    private email: Locator;
    private password: Locator;
    private submit: Locator;
    private reset: Locator;

    constructor(page: Page) {
        this.page = page;
        this.name = this.page.locator('id=Name');
        this.employeeCode = this.page.locator('id=employeeCode');
        this.email = this.page.locator('id=email');
        this.password = this.page.locator('id=password');
        this.submit = this.page.locator('id=Register');
        this.reset = this.page.locator('id=Reset');
    }

    async fillForm(name: string, employeeCode: string, email: string, password: string) {
        await this.name.fill(name);
        await this.employeeCode.fill(employeeCode);
        await this.email.fill(email);
        await this.password.fill(password);
        await this.submit.click();
    }

    

    async resetForm() {
        await this.reset.click();
    }


    


}

    
    