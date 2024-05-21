// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (email, password) => {
    cy.get('.form-group > input[placeholder="Ваш email или номер телефона"]').type(email)
    cy.get('.form-group > input[placeholder="Пароль"]').type(email)
    cy.get('.modal-popup-form > form > :nth-child(4) > .btn').click()
})
Cypress.Commands.add('register', (firstName, lastName) => {
    cy.get('div:nth-child(1).form-group > input[type="text"][data-v-fd734934].inp.inp--lg').type(firstName)
    cy.get('div:nth-child(2).form-group > input[type="text"][data-v-fd734934].inp.inp--lg').type(lastName)
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('waitForLoader', () => {
    cy.get('.section-preloader__mask').should('not.exist');
    cy.get('[data-v-452793d0=""][data-v-9d8db992=""] > .modal-popup').should('be.visible').and('not.be.disabled')
});
