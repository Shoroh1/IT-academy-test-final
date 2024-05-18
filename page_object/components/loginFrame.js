const Base = require('../base')

class LoginField extends Base {
    elements = {
        emailInput: () => cy.get('.form-group > input[placeholder="Ваш email или номер телефона"]'),
        passwordInput: () => cy.get('.form-group > input[placeholder="Пароль"]'),
        loginBtn: () => cy.get('.modal-popup-form > form > :nth-child(4) > .btn'),
        errorText: () => cy.get('form > :nth-child(1) > .inp-required'),
        registerBtn: () => cy.get('.modal-popup__body > :nth-child(3) > a'),
        firstNameInput: () => cy.get('[data-v-452793d0=""][style=""] > .modal-popup > .modal-popup__body > .modal-popup-form > form > :nth-child(1) > .inp'),
        lastNameInput: () => cy.get('[data-v-452793d0=""][style=""] > .modal-popup > .modal-popup__body > .modal-popup-form > form > :nth-child(2) > .inp'),
        numberInput: () => cy.get('form > :nth-child(4) > .inp'),
        getCodeBtn: () => cy.get('.modal-popup-form > form > :nth-child(5) > .btn')
    }

    enterEmail(email) {
        this.elements.emailInput().clear();
        this.elements.emailInput().type(email);
    }

    enterPassword(password) {
        this.elements.passwordInput().clear();
        this.elements.passwordInput().type(password);
    }

    clickLoginBtn() {
        this.elements.loginBtn().click()
    }

    openRegisterForm() {
        this.elements.registerBtn().click();
    }

    enterFirstName(name) {
        this.elements.firstNameInput().clear();
        this.elements.firstNameInput().type(name)
    }

    enterLastName(lastname) {
        this.elements.lastNameInput().clear();
        this.elements.lastNameInput().type(lastname)
    }
    enterPhoneNumber(number) {
        this.elements.numberInput().type(number)
    }
}

module.exports = new LoginField()