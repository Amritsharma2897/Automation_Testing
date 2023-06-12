import{test as basetest} from '@playwright/test'
import LoginPage from '../pages/loginPage'
import AdminPage from '../pages/adminPage'


const fixture = basetest.extend<{
    login: LoginPage;
    admin: AdminPage;
}>
({
login: async({page}, use)=>
 {
   const login = new LoginPage(page)
   await use(login);
},
admin: async({page}, use)=>{

    const admin = new AdminPage(page)
    await use(admin);

}

})
export default fixture;




