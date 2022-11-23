const AddProductPage = require('../pageobjects/addProduct.page');
//const MyAccPage = require('../pageobjects/secure.page');

describe('Add Product', () => {

 it('should successfully add product to cart', async () => {
        
    
        await AddProductPage.open();
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

});