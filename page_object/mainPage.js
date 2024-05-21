const Base = require('./base');

class MainPage extends Base {
    get loginPageButton() {
        return cy.get(':nth-child(3) > .h-drop__head').click()
    }
    get openCatalogMenu() {
        return cy.get('.js-mm-opener')
    }
    get selectSuggestItem(){
        return cy.get('ul.catalog-navigation-list');
    }

    get showSectionName(){
        return cy.get('.section-part > .section-heading > .section-heading__title');
    }

    get selectNavbarItem() {
        return cy.get('.h-nav__item > .h-nav__link[href="/shops"]').click()
    }

    get selectAddressList(){
        return cy.get('.shop-item-wrap')
    }

    get allShopsCity() {
        return cy.get('.shop-list > ul').find('li')
    }

    get showAddressName(){
        return cy.get('.section-heading__title')
    }

    get selectCategories(){
        return cy.get('.filter-categories a')
    }

    get ShowNotebooksItems() {
        return cy.get('.catalog-default > .catalog').find('.card-product-full')
    }


    enterSuggestItem(itemText) {
        this.openCatalogMenu.click();
        this.selectSuggestItem.contains(`${itemText}`).click()
    }

    magazineSelector(address) {
        this.selectNavbarItem
        this.selectAddressList.contains(`${address}`).click()
    }

    ChooseCategory(categories){
        this.selectCategories.contains(`${categories}`).click()
    }


}

module.exports = new MainPage()