const Base = require('../base')

class Search extends Base {

    get displaySearchField() {
        return cy.get('.h-search > :nth-child(2) > .inp').invoke("attr", 'style', 'display:block')
    }

    get findBtn() {
        return cy.get(' form:nth-child(2) > button.btn.btn--clear');
    }

    get findError() {
        return cy.get('.section-error')
    }

    inputTextInSearchField(text) {
       this.displaySearchField.click()
        this.displaySearchField.type(text, {force:true})
        this.findBtn.click({force: true})
    }
}


module.exports = new Search()