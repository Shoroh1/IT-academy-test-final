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
    })
    it('should open categories', () => {
        cy.visit('https://5element.by/');
        mainPage.enterSuggestItem(CATALOG.LAPTOP_PC)
        mainPage.addItem("Ноутбуки")
        expect(mainPage.showCategoriesTitleText.should('contain', "Ноутбуки"))
    });

    it('should visible filter label', () => {
        cy.visit('https://5element.by/catalog/1383-noutbuki');
        notebooks.setPrice("945", "3000", "Windows")
        expect(notebooks.filterSelected.should('be.visible'))
    });
    it('should add product to favorites', () => {
        cy.visit('https://5element.by/');
        mainPage.enterSuggestItem(CATALOG.LAPTOP_PC)
        mainPage.addItem("Ноутбуки")
        notebooks.addToFavorites()
        expect(notebooks.openLoginPage.should('be.visible'))
    })
    it('Should show a window for sending discount information', () => {
        cy.visit('https://5element.by/');
        mainPage.enterSuggestItem(CATALOG.LAPTOP_PC)
        mainPage.addItem("Ноутбуки")
        notebooks.sendNotification(LOGIN.EMAIL)
        expect(notebooks.sendBtn.should('be.enabled'))
    })
    it('should add item to cart', () => {
        cy.visit('https://5element.by/');
        mainPage.enterSuggestItem(CATALOG.LAPTOP_PC)
        mainPage.addItem("Ноутбуки")
        notebooks.addItemToCart(3)
        expect(notebooks.cardTitle.should('contain', CATALOG.ADD_CART))
    })
})