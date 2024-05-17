const mainPage = require('../../page_object/mainPage');
const cookies = require('../../page_object/components/cookies')
const loginFrame = require('../../page_object/components/loginFrame')
const smartphones = require('../../page_object/smartphonesPage')
const searchField = require('../../page_object/components/search')
const notebooks = require('../../page_object/notebooksPage')
const banner = require('../../page_object/components/banner')


describe('5element test', () => {
    it.skip('verify login unsuccessful for user not founding', () => {
        cy.visit('https://5element.by/')
        cookies.declineCookiesBtn.wait(2000).click()
        mainPage.loginPageButton.click()
        loginFrame.enterEmail('example@example.com')
        loginFrame.enterPassword('123456789')
        loginFrame.clickLoginBtn();
        expect(loginFrame.elements.errorText().should('contain', 'Пользователь не найден.'));
    })
    it.skip('opens a page in the catalog offer', () => {
        cy.visit('https://5element.by/');
        cookies.declineCookiesBtn.wait(2000).click()
        mainPage.enterSuggestItem("Техника для дома")
        expect(mainPage.showSectionName.should('contain', 'Техника для дома'));
    });
    it.skip('adding a product to comparison ', () => {
        cy.visit('https://5element.by/catalog/377-smartfony')
        cookies.declineCookiesBtn.wait(2000).click()
        smartphones.selectManyPhones()
        expect(smartphones.elements.getItemInCarousel().should('have.length', 2))
    });

    it.skip('search field validation ', () => {
        cy.visit('https://5element.by/');
        searchField.inputTextInSearchField('iPhone')
        cookies.declineCookiesBtn.wait(2000).click()
        expect((searchField.findError.should('contain', "404")))
    });

    it.skip('should inspect address in display', () => {
        cy.visit('https://5element.by/');
        mainPage.magazineSelector("пр-т Победителей, 65/1 (ТЦ «Замок», 4 этаж)");
        expect(mainPage.showAddressName.should('be.visible'));
    });

    it.skip('should open categories', () => {
        cy.visit('https://5element.by/');
        mainPage.enterSuggestItem("Ноутбуки и компьютеры")
        mainPage.addItem("Ноутбуки")
        expect(mainPage.showCategoriesTitleText.should('contain', "Ноутбуки"))
    });

    it.skip('should visible filter label', () => {
        cy.visit('https://5element.by/catalog/1383-noutbuki');
        notebooks.setPrice("945", "3000", "Windows")
        expect(notebooks.filterSelected.should('be.visible'))
    });

    it.skip('checking banner has greater than one slide', () => {
        cy.visit('https://5element.by/');
        expect(banner.bannerPanel.should('be.visible'))
        expect(banner.slideInBanner.should('have.length.greaterThan', 1))
    });

})