
const navbar = document.querySelector('.p-nav');
const navBrand = document.querySelector('.navbar-brand');
const navLinks = document.querySelectorAll('.nav-link');


// navbar cambia background allo scroll
document.addEventListener('scroll',()=>{

    navLinks.forEach(link => {
        if (window.scrollY>0) {
            navbar.style.backgroundColor='var(--blue-green)';
            navBrand.style.color= 'var(--platinum)';
            link.style.color='var(--platinum)';   
            navBurger.style.color= 'var(--platinum)';
            // chiedi se così è ok ma non consono
            link.addEventListener('mouseover',()=>{
                link.style.color= 'var(--rifle-green)';
            }) 
            link.addEventListener('mouseleave',()=>{
                link.style.color= 'var(--platinum)';
            }) 
        } else {
            navbar.style.backgroundColor='transparent';
            navBrand.style.color= 'var(--rifle-green)';
            link.style.color='var(--rifle-green)';
            link.addEventListener('mouseover',()=>{
                link.style.color= 'var(--ash-grey)';
            }) 
            link.addEventListener('mouseleave',()=>{
                link.style.color= 'var(--rifle-green)';
            })            
        }
        
    });
})



