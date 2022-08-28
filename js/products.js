const baseUrl = "https://flower-power.one/wp-json/wc/store/products"
const productContainer = document.querySelector(".products");

async function getProducts(url){
    const response = await fetch(url);
    const products = await response.json();
    createHTML(products)
}


getProducts(baseUrl);

function createHTML(products){
    products.forEach(function(product){
        productContainer.innerHTML += `<div class="product">
        <h2>${product.name}</h2>
        <img src="${product.images[0].src}" alt="${product.name}">
        </div>`;
    })
}

