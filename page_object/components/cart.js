const Base = require('../base')

class Cart extends Base {
    elements = {
        counterMinusBtn:() => cy.get('[data-type="minus"]'),
        counterPlusBtn: () => cy.get('[data-type="plus"]'),
        addServicesBtn: () => cy.get('.c-services').find('.services-card-full > .services-card-full__body > .c-controls > .btn'),
        goToCart:() => cy.get('[href="/cart"]').click(),
        counterValue: () => cy.get('.c-part-row > :nth-child(3) > .input-counter-wrap > .input-counter > .input-counter-field'),
        servicesHover: () => cy.get('.c-services-trigger').click(),
        sectionProducts: () => cy.get('.section-product-body').find('.c-controls > :nth-child(2) > .c-controls-btn > span'),
        carouselProduct: () => cy.get('.carousel-products > .carousel-slider').find('.card-product > .c-controls > .btn'),
        totalPrice: () => cy.get('.shopping-order-total')
    }

    updateCounter(counterPlus){
        Cypress._.times(counterPlus, () => {
            this.elements.counterPlusBtn().click()
        })
    }

    removeCounter(counterMinus){
        Cypress._.times(counterMinus, () =>{
            this.elements.counterMinusBtn().click()
        })
    }
    addServices(index){
        this.elements.servicesHover()
        this.elements.addServicesBtn().eq(index).click()
    }
    addAdditionalProduct(index){
        this.elements.carouselProduct().eq(index).click()
    }

    removePosition(num) {
        this.elements.sectionProducts().eq(num).click()
    }

}

module.exports = new Cart();