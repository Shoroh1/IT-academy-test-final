const mainPage = require("../../page_object/mainPage");
const smartphones = require("../../page_object/smartphonesPage");
const notebooks = require("../../page_object/notebooksPage");
const {LOGIN, CATALOG} = require('../../helpers/constants')


describe('catalog tests', () => {
    beforeEach(() => {
        cy.clearAllCookies();
    });

    it('opens a page in the catalog offer', () => {
        cy.visit('https://5element.by/');
        mainPage.enterSuggestItem(CATALOG.HOME_TECH)
        expect(mainPage.showSectionName.should('contain', CATALOG.HOME_TECH));
    });

    it('adding a product to comparison ', () => {
        cy.visit('https://5element.by/catalog/377-smartfony')
        smartphones.selectManyPhones()
        expect(smartphones.elements.getItemInCarousel().should('have.length', 2))
        expect(smartphones.elements.getItemInCarousel().should('be.visible'))
        expect(smartphones.elements.getItemInCarousel().should('have.data', 'product_id'))
        expect(smartphones.elements.getItemInCarousel().should('have.length.gte', 1))
    })
    it('should open categories', () => {
        cy.visit('https://5element.by/');
        mainPage.enterSuggestItem(CATALOG.LAPTOP_PC)
        mainPage.ChooseCategory("Ноутбуки")
        expect(mainPage.ShowNotebooksItems.should('be.visible'))
        expect(mainPage.ShowNotebooksItems.should('have.length.gte', 10))

    });

    it('should visible filter label', () => {
        cy.visit('https://5element.by/catalog/1383-noutbuki');
        notebooks.setPrice("945", "3000", "Windows")
        expect(notebooks.filterSelected.should('be.visible'))
    });
    it('should add product to favorites', () => {
        cy.visit('https://5element.by/');
        mainPage.enterSuggestItem(CATALOG.LAPTOP_PC)
        mainPage.ChooseCategory("Ноутбуки")
        notebooks.addToFavorites()
        expect(notebooks.openLoginPage.should('be.visible'))
    })
    it('Should show a window for sending discount information', () => {
        cy.visit('https://5element.by/');
        mainPage.enterSuggestItem(CATALOG.LAPTOP_PC)
        mainPage.ChooseCategory("Ноутбуки")
        notebooks.sendNotification(LOGIN.EMAIL)
        expect(notebooks.sendBtn.should('be.enabled'))
    })
})