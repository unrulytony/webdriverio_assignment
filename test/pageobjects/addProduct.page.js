//const { default: $ } = require('webdriverio/build/commands/browser/$');
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AddProductPage extends Page {
    /**
     * define selectors using getter methods
     */

    // get whatNewLink(){
    //     return $('a[id="ui-id-3"]')     
    // }

    // get itemSize () {
    //     return $('#option-label-size-143-item-169')
    // }
    // get ItemTee () {
    //     return $('img[alt="Gobi HeatTec® Tee"]');
    // }
    // get itemColor () {
    //     return $('#option-label-color-93-item-56');

    // }

    // get AddCartbutton () {
    //     return $('li:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > button:nth-child(4)')
    // }
     get menLink (){
        return $('#ui-id-5');
     }

     get menTops (){
        return $('#ui-id-17');
     }

     get menJacets (){
        return $('#ui-id-19');

     }
     get menProd (){
        return $('img[alt="Proteus Fitness Jackshirt"]');

     }
     get itemSize () {
        return $('#option-label-size-143-item-169')
    }
    get itemColor () {
        return $('#option-label-color-93-item-56');
    }
    get AddCartbutton () {
        return $('#product-addtocart-button')
    }
    get SucessAddToCartMessage(){
        return $('div[data-bind="html: $parent.prepareMessageForHtml(message.text)"]')

    }

    async NaviToProd (){
      
        await this.menLink.moveTo()
        await this.menTops.waitForDisplayed();
        await this.menTops.moveTo();
        await this.menJacets.waitForDisplayed();
        await this.menJacets.click();
        await this.menProd.click();
        await this.itemSize.click();
        await this.itemColor.click();
        await this.AddCartbutton.click();



        //await this.whatNewLink.click();
        // await this.ItemTee.click();
        // await this.itemSize.click();
        // await this.itemColor.click();
        // await this.AddCartbutton.waitForDisplayed();
        // await this.AddCartbutton.click();
    }
    
    open () {
        return super.open('what-is-new.html');
    }
}

module.exports = new AddProductPage();
