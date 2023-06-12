import test from "../Support/Fixtures/messageFixture";

test.describe('verify the chat text', () => {
    test( 'verify the element',async ({ login }) => {

        await login.loginPage();
        //await login.messagePage();
        //await login.mediaPost();
        //await login.sendMsgWithoutSelectImage();
        await login.functionalityOfToggleButton()
        await login.mediaSelectFromLocalFile();
        
    })
    
    
})

