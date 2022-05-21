// CAROSELLO
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


// validation form
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
})()
