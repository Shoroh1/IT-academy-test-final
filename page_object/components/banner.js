const Base = require('../base')

class Banner extends Base {
    get bannerPanel() {
        return cy.get('.carousel-hero > .carousel-slider');
    }

    get slideInBanner() {
        return cy.get('.carousel-slider.swiper-container-initialized.swiper-container-horizontal > .swiper-wrapper > .swiper-slide.ec-banner')
    }

}

module.exports = new Banner();
