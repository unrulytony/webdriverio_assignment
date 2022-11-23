

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MyAccPage extends Page {
    /**
     * define selectors using getter methods
     */
    get SuccessAlert () {
        return $('div[role="alert"]');
    }

    get SuccessAddToCart () {
        return $('div[data-ui-id="message-success"]');
    }

    
    
    // open () {
    //     return super.open('customer/account');
    // }
}

module.exports = new MyAccPage();
