import { API } from 'aws-amplify';

export async function LoadProducts(setProducts) {
    let productCatalog;

    const localProductCatalog = JSON.parse(localStorage.getItem('productCatalog'));
 
    if(!localProductCatalog) {
        productCatalog = await API.get("minion-shop", "/products");
        localStorage.setItem('productCatalog', JSON.stringify(productCatalog));
    } else {
        productCatalog = localProductCatalog;
    }

    if(!productCatalog) productCatalog = [];

    setProducts(productCatalog);
    
}