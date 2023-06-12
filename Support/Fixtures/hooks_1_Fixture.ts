import{test as basetest} from '@playwright/test'
import orangeHRM from '../pages/hooks_1'

const fixture = basetest.extend<{

    orangePage: orangeHRM;
}>
({
    orangePage: async({page},use) =>
    {
       const orangePage = new orangeHRM(page);
       await use(orangePage);
    }
})
export default fixture;
