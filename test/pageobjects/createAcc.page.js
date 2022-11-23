

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CreateAccPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputFirstName () {
        return $('#firstname');
    }

    get inputLastName () {
        return $('#lastname');
    }

    get inputEmail () {
        return $('#email_address');
    }

    get inputPassword () {
        return $('input[id="password"]');
    }

    get inputConfirmPassword () {
        return $('#password-confirmation');
    }

    get btnSubmit () {
        return $('button[title="Create an Account"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (fname,lname,email,pword,cpword) {
        await this.inputFirstName.setValue(fname);
        await this.inputLastName.setValue(lname);
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(pword);
        await this.inputConfirmPassword.setValue(cpword);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('customer/account/create/');
    }
}

module.exports = new CreateAccPage();
