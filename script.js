const swiper = new Swiper('.last-prod-carousel', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 10,
    // loop: true,
    
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },
    
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        800: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 75,
        },
    },


    
});