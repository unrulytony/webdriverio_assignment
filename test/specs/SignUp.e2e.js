const AddProductPage = require('../pageobjects/addProduct.page');
const CreateAccPage = require('../pageobjects/createAcc.page');
const MyAccPage = require('../pageobjects/secure.page');
const { faker } = require('@faker-js/faker');
describe('Create Account', () => {
    it('should successfully create account with valid credentials', async () => {
        await CreateAccPage.open();

        
        await CreateAccPage.login(faker.name.firstName(),faker.name.lastName(),faker.internet.email(),'Unrul#ja','Unrul#ja');
            await expect (browser).toHaveUrl('https://magento.softwaretestingboard.com/customer/account/') ;    
            await expect(MyAccPage.SuccessAlert).toBeExisting();
            await expect(MyAccPage.SuccessAlert).toHaveTextContaining('Thank you for registering with Fake Online Clothing Store');
    

    
});
    // it('should successfully add product to cart', async () => {
        
    //     await AddProductPage.open();
    //     await AddProductPage.addProduct();
    //     await expect(AddProductPage.successAddToCart).toBeExisting();
    //     await expect(AddProductPage.successAddToCart).toHaveTextContaining('You added')


    // });
});