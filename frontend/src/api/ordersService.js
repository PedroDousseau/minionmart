import { API, Auth } from 'aws-amplify';
import { ClearCart } from './cartService';

export async function loadUserOrders(setUserOrders) {

    let userOrders = JSON.parse(localStorage.getItem('userOrders'));

    if(!userOrders) { // User orders needs to be retrieved from database
        const userData = await Auth.currentUserInfo();
        const userId = userData.attributes.email;

        userOrders = await API.get("minion-shop", "/orders/"+userId+"");
    }

    if(!userOrders) userOrders = [];

    setUserOrders(userOrders);
    localStorage.setItem('userOrders', JSON.stringify(userOrders));

    return userOrders;
}

export async function createOrder(userCart, setUserCart, setUserOrders) {

    const userOrders = await loadUserOrders(setUserOrders);
        

    const userData = await Auth.currentUserInfo();
    const userId = userData.attributes.email;

    const myInit = {
        body: {
            userId: userId,
            items: userCart
        }
    }

    const newOrder = await API.post("minion-shop", "/checkout", myInit);

      let orders = userOrders.slice();
      orders.push(newOrder);

      setUserOrders(orders);
      localStorage.setItem('userOrders', JSON.stringify(orders));
      ClearCart(setUserCart);
}

export function ClearOrders(setUserOrders) {
    setUserOrders([]);
    localStorage.setItem('userOrders', JSON.stringify([]));
}