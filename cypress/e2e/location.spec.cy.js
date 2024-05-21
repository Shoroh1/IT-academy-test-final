const location = require('../../page_object/components/location')

describe('store location selection tests', () =>{
    beforeEach(() => {
        cy.clearAllCookies();
    });


    it('should select the first element on request ', () => {
        cy.visit('https://5element.by/')
        location.openLocationPopup('Барановичи')
        expect(location.elements.selectLocationField().should('contain.text', "Барановичи"))
    });

    it('should check the list for quantity', () => {
        cy.visit('https://5element.by/')
        location.findLength('Барановичи')

        expect(location.elements.chooseSuggestItem().should('have.length', 2))
    });
})