const Base = require('../base')

class Location extends Base {
    elements =  {
        selectLocationField: () => cy.get('.h-drop.h-geo > .h-drop__head').click(),
        selectInputFrame: () => cy.get('.modal-popup__head > .inp-ic-toggle > .inp'),
        chooseSuggestItem: () => cy.get('.optgroup ')

}

    openLocationPopup(text) {
        this.elements.selectLocationField().click()
        this.elements.selectInputFrame().clear().type(`${text}{enter}`)
        this.elements.chooseSuggestItem().first().click()
    }

    findLength(text){
        this.elements.selectLocationField().click()
        this.elements.selectInputFrame().clear().type(`${text}{enter}`)
        this.elements.chooseSuggestItem()
    }
}

module.exports = new Location();