const Base = require('../base')

class LoginField extends Base {
    elements = {
        errorText: () => cy.get('form > :nth-child(1) > .inp-required'),
        registerBtn: () => cy.get('.modal-popup__body > :nth-child(3) > a').click(),
        numberInput: () => cy.get('form > :nth-child(4) > .inp'),
        getCodeBtn: () => cy.get('.modal-popup-form > form > :nth-child(5) > .btn')
    }


    enterPhoneNumber(number) {
        this.elements.numberInput().type(number)
    }
}

module.exports = new LoginField()