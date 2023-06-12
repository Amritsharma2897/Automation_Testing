import fixture from "../Support/Fixtures/myFixure"

import LoginPage from '../Support/pages/loginPage';

fixture.describe('login with valid credential', () => {

   fixture('loginPage', async ({ login,admin }) => {

        await login.loginPage();
        await login.enterUsername();
        await login.enterPassword();
        await login.click_Button();
        await admin.adminPage();
        
        
    })
    
    
})
 