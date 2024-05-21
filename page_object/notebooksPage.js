const Base = require('./base');

class Notebooks extends Base {
    get minPriceFilter() {
        return cy.get('#filter-price > .filter-body > :nth-child(1) > .form-row > :nth-child(1) > .inp')
    }

    get maxPriceFilter() {
        return cy.get('#filter-price > .filter-body > :nth-child(1) > .form-row > :nth-child(2) > .inp')
    }

    get otherFilterSettings() {
        return cy.get('.filter-popular')
    }

    get filterSelected() {
        return cy.get('.filter-selected')
    }

    get favoritesBtn() {
        return cy.get('.c-actions > [title="В избранное"] > .ic-favorite').eq(4)
    }

    get openLoginPage() {
        return cy.get('[style=""] > .modal-popup')
    }

    get notificationBtn() {
        return cy.get('.c-actions > [title="Сообщить о снижении цены"] > .ic-notify').eq(4)
    }

    get emailNotificationInput() {
        return cy.get('#emerging_email')
    }

    get checkboxAllow() {
        return cy.get('form > div:nth-child(2) > div > label > input[type=checkbox]')
    }

    get sendBtn() {
        return cy.get('[style=""] > .modal-popup > .modal-popup__body > .modal-popup-form > :nth-child(3) > .btn')
    }

    get addToCartBtn() {
        return cy.get('.c-controls .btn')
    }
    get cardTitle(){
        return cy.get('[data-v-452793d0=""][data-v-9d8db992=""] > .modal-popup > .modal-popup__head > .modal-popup-heading')
    }

    setPrice(minCost, maxCost, someSettings) {
        this.minPriceFilter.clear().type(`${minCost}{enter}`);
        this.maxPriceFilter.clear().type(`${maxCost}{enter}`);
        this.otherFilterSettings.contains(someSettings).click()
    }

    addToFavorites() {
        this.favoritesBtn.click()
    }

    sendNotification(email) {
        this.notificationBtn.click()
        this.emailNotificationInput.type(email)
        this.checkboxAllow.check({force: true})
    }

    addItemToCart(index) {
        this.addToCartBtn.eq(index).click()
    }
}

module.exports = new Notebooks();