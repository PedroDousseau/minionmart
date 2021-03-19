import { API } from 'aws-amplify';

export async function LoadProducts(setProducts) {

    let productCatalog = JSON.parse(localStorage.getItem('productCatalog'));

    if(!productCatalog) { // Product catalog needs to be retrieved from database
        productCatalog = await API.get("minion-shop", "/products");
    }

    if(!productCatalog) productCatalog = [];

    setProducts(productCatalog);
    localStorage.setItem('productCatalog', JSON.stringify(productCatalog));
}