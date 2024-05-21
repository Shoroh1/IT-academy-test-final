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
    cy.login(LOGIN.EMAIL, LOGIN.PASSWORD)
    expect(loginFrame.elements.errorText().should('contain', 'Пользователь не найден.'));
  })

  it('should register a new user(register btn disabled)', () => {
    cy.visit('https://5element.by/')
    mainPage.loginPageButton.click()
    loginFrame.elements.registerBtn();
    cy.register(LOGIN.FIRST_NAME, LOGIN.LAST_NAME);
    expect(loginFrame.elements.getCodeBtn().should('be.disabled'))
  });

  it('should register a new user(register btn enabled)', () => {
    cy.visit('https://5element.by/')
    mainPage.loginPageButton.click()
    loginFrame.elements.registerBtn();
    cy.register(LOGIN.FIRST_NAME, LOGIN.LAST_NAME);
    loginFrame.enterPhoneNumber(LOGIN.PHONE_NUMBER)
    expect(loginFrame.elements.getCodeBtn().should('be.enabled'))
  });
})