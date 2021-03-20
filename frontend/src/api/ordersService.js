import { API, Auth } from 'aws-amplify';
import { ClearCart } from './cartService';

export async function loadUserOrders(setUserOrders) {

    let userOrders = JSON.parse(localStorage.getItem('userOrders'));

    if(!userOrders) { // User orders needs to be retrieved from database
        const userData = await Auth.currentUserInfo();
        const userId = userData.attributes.email;

        userOrders = await API.get("minion-shop", "/orders/"+userId+"");


        userOrders.sort((a, b) => b.createdAt - a.createdAt);
    }

    if(!userOrders) userOrders = [];

    setUserOrders(userOrders);
    localStorage.setItem('userOrders', JSON.stringify(userOrders));

    return userOrders;
}

export async function createOrder(userCart, setUserCart, setUserOrders) {

    const userData = await Auth.currentUserInfo();
    const userId = userData.attributes.email;

    const myInit = {
        body: {
            userId: userId,
            items: userCart
        }
    }

    await API.post("minion-shop", "/checkout", myInit);

    ClearOrders(setUserOrders);
    ClearCart(setUserCart);
}

export function ClearOrders(setUserOrders) {
    setUserOrders(null);
    localStorage.setItem('userOrders', JSON.stringify(null));
}