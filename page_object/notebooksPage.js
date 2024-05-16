const Base = require('./base');

class Notebooks extends Base {
    get minPriceFilter(){
        return cy.get('#filter-price > .filter-body > :nth-child(1) > .form-row > :nth-child(1) > .inp')
    }

    get maxPriceFilter(){
        return cy.get('#filter-price > .filter-body > :nth-child(1) > .form-row > :nth-child(2) > .inp')
    }

    get otherFilterSettings(){
        return cy.get('.filter-popular')
    }

    get filterSelected(){
        return cy.get('.filter-selected')
    }

    setPrice(minCost, maxCost, someSettings){
        this.minPriceFilter.clear().type(`${minCost}{enter}`);
        this.maxPriceFilter.clear().type(`${maxCost}{enter}`);
        this.otherFilterSettings.contains(someSettings).click()
    }
}

module.exports = new Notebooks();