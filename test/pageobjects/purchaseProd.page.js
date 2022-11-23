const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class PurchaseProdPage extends Page {
    /**
     * define selectors using getter methods
     */
    get cartIcon () {
        return $(`a[data-bind="scope: 'minicart_content'"]`);
    }

    // get SuccessAddToCart () {
    //     return $('div[data-ui-id="message-success"]');
    // }
    get viewOrder(){
        return $('a[data-bind="attr: {href: shoppingCartUrl}"]')
    }

    get proceedToCheckoutBtn(){
        return $('button[data-role="proceed-to-checkout"]')
    }
    get addressInput(){
        return $('input[name="street[0]"]')
    }
    get cityInput(){
        return $('input[name="city"]')
    }
    get stateSelector(){
        return $('select[name="region_id"]')
    }
    get zipInput(){
        return $('input[name="postcode"]')
    }
    get countrySelector(){
        return $('select[name="country_id"]')

    }
    get phoneInput(){
        return $('input[name="telephone"]')

    }
    get shippingMethodSelector(){
        //return $('input[value="flatrate_flatrate"]')
        //return $(`div[name='shippingAddress.region_id'] option[value='1']`)
        return $('.radio:nth-of-type(1)')
    }
    get nextBtn () {
        return $('button[data-role="opc-continue"]')
    }
    get placeOrderBtn () {
        //return $('button[title="Place Order"]')
        return $('button.action.primary.checkout')

    }
    get sucessPurchase(){
        return $('main[id="maincontent"] div h1')
    }
    get continueShoppingBtn () {
        return $('main[id="maincontent"] div div div div div a')
    }

    async purchaseProduct(address,city,zip,phone){
        await this.cartIcon.click()
        await this.viewOrder.click()
        await this.proceedToCheckoutBtn.click()
        await this.addressInput.setValue(address)
        await this.cityInput.setValue(city)
        await this.stateSelector.selectByAttribute('data-title','Alabama')
        await this.zipInput.setValue(zip)
        await this.phoneInput.setValue(phone)
        //await this.shippingMethodSelector.getValue()
        //await this.shippingMethodSelector.isSelected()
        await this.shippingMethodSelector.click()
        // await this.nextBtn.waitForDisplay({timeout:1000})
        await this.nextBtn.scrollIntoView()

        await this.nextBtn.click()
        //await this.placeOrderBtn.waitForDisplay()
        await  this.placeOrderBtn.click()
        //await this.continueShoppingBtn.waitForDisplay()
        await this.continueShoppingBtn.click()

    }


    
    // open () {
    //     return super.open('customer/account');
    // }
}

module.exports = new PurchaseProdPage();