const  PurchaseProdPage = require('../pageobjects/purchaseProd.page');
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
it('should successfully add product to cart', async () => {
        
    
    //await AddProductPage.open();
    await AddProductPage.NaviToProd();
    //await expect(browser).toHaveUrl('https://magento.softwaretestingboard.com/men/tops-men/jackets-men.html')
    await expect (AddProductPage.SucessAddToCartMessage).toBeExisting()
    await expect (AddProductPage.SucessAddToCartMessage).toHaveTextContaining('You added Proteus Fitness Jackshirt to your')

    // await AddProductPage.menLink.moveTo();
    // await AddProductPage.menTops.waitForDisplayed({timeout: 1000});
    // await AddProductPage.menTops.moveTo();
    // await AddProductPage.menJacets.waitForDisplayed({timeout: 1000});
    // await AddProductPage.menJacets.click();
    // await AddProductPage.addProd();
    // await expect(MyAccPage.successAddToCart).toBeExisting();
    // await expect(MyAccPage.successAddToCart).toHaveTextContaining('You added')


});

    it('should successfully place order of purchase', async () => {
        
        await PurchaseProdPage.purchaseProduct(faker.address.streetAddress(),faker.address.city(),faker.address.zipCode(),faker.phone.number())
        await expect (browser).toHaveUrl('https://magento.softwaretestingboard.com/checkout/onepage/success/') ;    
            await expect(PurchaseProdPage.SuccessPurchase).toBeExisting();
            await expect(PurchaseProdPage.SuccessPurchase).toHaveTextContaining('Thank you for your purchase!');

    
});

    it('should verify purchase of order',async ()=>{

    })
});