const Base = require('../page_object/base')

class Smartphones extends Base {
    elements = {
        changeSort: () => cy.get('.filter-line > .inp-dropdown > .btn').click(),
        selectRatingSorting: () => cy.get('.inp-dropdown__list > :nth-child(3) > .inp-box > .inp-box__label > .inp-box__view').click(),
        clickCompareBtnFirstPhone: () => cy.get(':nth-child(1) > :nth-child(1) > .card-product-full > :nth-child(3) > .c-actions > [title="В сравнение"] > .ic-compare').click(),
        clickCompareBtnSecondPhone: () => cy.get(':nth-child(1) > :nth-child(3) > .card-product-full > :nth-child(3) > .c-actions > [title="В сравнение"] > .ic-compare').click(),
        openAddedCompareItem: () => cy.get('.h-added-drop.h-drop.js-drop-select > .n-item.js-drop-select-trigger > .n-item__icon.ic-compare').click(),
        goToCompareBtn: () => cy.get('.h-drop__bttns > .btn').click(),
        getItemInCarousel: () => cy.get('.carousel-compare-main > .carousel-slider').find('.card-product')
    }

    selectManyPhones(){
        this.elements.changeSort()
        this.elements.selectRatingSorting()
        this.elements.clickCompareBtnFirstPhone()
        this.elements.clickCompareBtnSecondPhone()
        this.elements.openAddedCompareItem()
        this.elements.goToCompareBtn()
    }
}


module.exports = new Smartphones()