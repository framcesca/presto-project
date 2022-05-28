fetch('./annunci.json')
.then(response => response.json())
.then(products => {
    // ELEMENTI DOM
    const wrapper = document.querySelector('#productsWrapper');
    const categoryInput = document.querySelector('#categoryInput');
    // const searchBtn = document.querySelector('#searchBtn');
    const searchInput = document.querySelector('#searchInput');
    const minInput = document.querySelector('#minInput');
    const maxInput = document.querySelector('#maxInput');

    
    // FUNZIONI
    // funzione per popolare la griglia di card
    function populateProducts() {
        products.forEach((product) => {
            // creo il div 
            let cardProduct = document.createElement('div');
            // dò le classi al div creato
            cardProduct.classList.add('col-12', 'col-sm-6', 'col-lg-4', 'align-items-center', 'justify-content-center', 'py-5', 'px-4', 'product-element');
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
    };

    // funzione per filtrare in base a categoria, prezzo 
    function filterProducts() {
        // catturo i value degli input
        let selectedCategory = categoryInput.value;
        let searched = searchInput.value;
        let selectedMin = Number(minInput.value);
        let selectedMax = Number(maxInput.value) == 0 ? Infinity : Number(maxInput.value);;

        // filtro per search (uso include)
        let filteredBySearch = products.filter(product =>{
            return product.name.toLowerCase().includes(searched.toLowerCase());
        });
        // contatenazione con filtro per category
        let filteredByCategory = filteredBySearch.filter(product =>{
            return product.category === selectedCategory || selectedCategory == 'all';
        });
        // contatenazione con filtro per min
        let filteredByMin = filteredByCategory.filter(product =>{
            return Number(product.price) > selectedMin;
        });
        // contatenazione con filtro per max
        let filteredByMax = filteredByMin.filter(product =>{
            return Number(product.price) < selectedMax;
            // mappo per avere tutti i products filtrati
        }).map(product => {
            return product.id;
        });

        // richiamo la funzione che mostra i products in base ai filtri
        showHideProductsDomElements(filteredByMax);

    };


    // funzione per mostrare o nascondere card in base ai fltri
    function showHideProductsDomElements(filteredByMax) {
        let domProducts = document.querySelectorAll('.product-element');

        domProducts.forEach(domElement => {
            // creo l'id al product
            let productId = Number(domElement.getAttribute('product-id'));
            // in base al filtro, tolgo e emtto la classe display-none
            if(filteredByMax.includes(productId)){
                domElement.classList.remove('d-none')
            } else {
                domElement.classList.add('d-none')
            }
        })
    };





    // EVENTI E RICHIAMI FUNZIONI 

    // aggiundo l'event listener per il bottone filtra
    filterBtn.addEventListener('click', filterProducts)



    populateProducts();
    populateCategoryFilter();
});