import { Locator, Page, expect } from "@playwright/test";

class LoginPage{
   page: Page;
    username_Field: Locator;
    password_Field: Locator;
    login_Field: Locator;
   constructor( page: Page){

    this.page=page;
    this.username_Field = page.getByPlaceholder('Username');
    this.password_Field = page.getByPlaceholder('Password');
    this.login_Field =page.getByRole('button', {name : " Login "});
   }
   async enterUsername() {
    await this.username_Field.fill("Admin");
   }

   async enterPassword(){

   await this.password_Field.fill('admin123');
   }

   async click_Button(){

    await this.login_Field.click();
   }
   async loginPage(){

    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(this.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
   }


}
export default LoginPage