const mainPage = require("../../page_object/mainPage");
const loginFrame = require("../../page_object/components/loginFrame");
const {LOGIN} = require('../../helpers/constants')


describe('Checking the login page for your personal account', () => {
  beforeEach(() => {
    cy.clearAllCookies();
  });

  it('verify login unsuccessful for user not founding', () => {
    cy.visit('https://5element.by/')
    mainPage.loginPageButton.click()
    loginFrame.enterEmail(LOGIN.EMAIL)
    loginFrame.enterPassword(LOGIN.PASSWORD)
    loginFrame.clickLoginBtn();
    expect(loginFrame.elements.errorText().should('contain', 'Пользователь не найден.'));
  })

  it('should register a new user', () => {
    cy.visit('https://5element.by/')
    mainPage.loginPageButton.click()
    loginFrame.openRegisterForm();
    loginFrame.enterFirstName(LOGIN.FIRST_NAME);
    loginFrame.enterLastName(LOGIN.LAST_NAME);
    expect(loginFrame.elements.getCodeBtn().should('be.disabled'))
    loginFrame.enterPhoneNumber(LOGIN.PHONE_NUMBER)
    expect(loginFrame.elements.getCodeBtn().should('be.enabled'))

  });
})