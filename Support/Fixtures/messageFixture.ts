import{test as basetest} from '@playwright/test'

import messagePage from '../pages/message'

const test = basetest.extend<{

login: messagePage;
//message: messagePage;
//media: messagePage;

}>
({
    login: async({page},use) =>{

        const login = new messagePage(page);
        await use(login)
    }
    // message: async({page},use) =>{

    //     const message = new messagePage(page)
    //     await use(message);

    // },
    // media: async({page}, use) => {

    // }
})
 export default test