const mainPage = require("../../page_object/mainPage");
const notebooks = require("../../page_object/notebooksPage");
const cart = require("../../page_object/components/cart")

const {LOGIN, CATALOG} = require('../../helpers/constants')

describe('cart tests', () => {
    beforeEach(() => {
        cy.clearAllCookies();
    });

    it('should add item to cart', () => {
        cy.visit('https://5element.by/');
        mainPage.enterSuggestItem(CATALOG.LAPTOP_PC)
        mainPage.ChooseCategory("Ноутбуки")
        notebooks.addItemToCart(3)
        expect(notebooks.cardTitle.should('contain', CATALOG.ADD_CART))
        cy.waitForLoader()
        cart.updateCounter(2)
        cart.elements.counterValue().should('have.value', 3)
        cart.elements.counterValue().should('contain.value', 3)
        cart.removeCounter(2)
        cart.elements.counterValue().should('have.value', 1)
        cart.elements.counterValue().should('contain.value', 1)

    })

    it('add and remove position in cart', () => {
        cy.visit('https://5element.by/');
        mainPage.enterSuggestItem(CATALOG.LAPTOP_PC)
        mainPage.ChooseCategory("Ноутбуки")
        notebooks.addItemToCart(2)
        cy.waitForLoader()
        cart.elements.goToCart()
        cart.addServices(1)
        cart.elements.sectionProducts().should('be.visible')
        cart.elements.sectionProducts().should('not.be.empty')
        cart.addAdditionalProduct(2)
        cart.elements.sectionProducts().should('have.length', 2)
        cart.elements.totalPrice().should('contain', 1483)
        cart.removePosition(1)
    })

})