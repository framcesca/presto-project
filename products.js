fetch('./annunci.json')
.then(response => response.json())
.then(products => {
    // ELEMENTI DOM
    const wrapper = document.querySelector('#productsWrapper');
    const categoryInput = document.querySelector('#categoryInput');

    // FUNZIONI
    // funzione per popolare la griglia di card
    function populateProducts() {
        products.forEach((product) => {
            // creo il div 
            let cardProduct = document.createElement('div');
            // dò le classi al div creato
            cardProduct.classList.add('col-12', 'col-sm-6', 'col-lg-4', 'align-items-center', 'justify-content-center', 'py-5', 'px-4');
            // per filtrare per ordine crescente/decrescente
            cardProduct.setAttribute('product-id', product.id)
            // aggiungo il contenuto del div
            cardProduct.innerHTML = `
            <button href="" class="p-0 p-card lastCard" id="lastCardBtn">
                <img src="./media/giradischi.jpg" class="img-fluid card__image" alt="" />
                <div class="card__overlay">
                    <div class="card__header">
                        <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
                        <img class="card__thumb" src="./media/profile-img.jpg" alt="" />
                        <div class="card__header-text  text-start">
                            <h3 class="card__title fw-boldest fw-boldest">${product.name}</h3>
                            <span class="card__tagline fw-light">${product.category}</span>            
                            <span class="card__status fw-boldest">${product.price}$</span>
                        </div>
                    </div>
                    <p class="card__description text-center fw-bolder fs-6">Vedi articolo <span><i class="fa-solid fa-chevron-right"></i></span></p>
                </div>
            </button>
            `

            wrapper.appendChild(cardProduct);
        });
    };

    // funzione per popolare i filtri delle category
    function populateCategoryFilter() {
        // creo array con tutte le category
        let categories = products.map(product=>{
            return product.category;
        })   
        // lo strsformo in un set per eliminare le ripetizioni
        let uniqueCategories = new Set(categories);
        // creo le option dei filtri a partire dal set senza ripetizioni
        uniqueCategories.forEach((category) => {
            let option = document.createElement('option');
            option.setAttribute('value', category);
            option.innerHTML = category;
            categoryInput.appendChild(option);
        });
    }





    // EVENTI E RICHIAMI FUNZIONI 
    populateProducts();
    populateCategoryFilter();
});