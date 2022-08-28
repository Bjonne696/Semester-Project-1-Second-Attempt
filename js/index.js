const baseUrl = "http://localhost/flower-power/wp-json/wc/store/products"

async function getProduct(url){
    const response = await fetch(url);
    const products = response.json();
    console.log(products);
}


getProducts(baseUrl);