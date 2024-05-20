const mainPage = require('../../page_object/mainPage');
const searchField = require('../../page_object/components/search')
const banner = require('../../page_object/components/banner')


describe('5element home page tests', () => {
    beforeEach(() => {
        cy.clearAllCookies();
    });

    it('search field validation ', () => {
        cy.visit('https://5element.by/');
        searchField.inputTextInSearchField('iPhone')
        expect((searchField.findError.should('contain', "404")))
    });

    it('should inspect address in display', () => {
        cy.visit('https://5element.by/');
        mainPage.magazineSelector("пр-т Победителей, 65/1 (ТЦ «Замок», 4 этаж)");
        expect(mainPage.showAddressName.should('be.visible'));
    });

    it('checking banner has greater than one slide', () => {
        cy.visit('https://5element.by/');
        expect(banner.bannerPanel.should('be.visible'))
        expect(banner.slideInBanner.should('have.length.greaterThan', 1))
    });

})