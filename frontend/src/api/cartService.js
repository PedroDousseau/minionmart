export function LoadCart(setUserCart) {
    const cart = JSON.parse(localStorage.getItem('userCart')) || [];
    setUserCart(cart);
}

export function AddToCart(userCart, setUserCart, product, amount = 1) {
    const cart = userCart.slice();

    const index = cart.findIndex((el) => el.product.productId === product.productId);

    if(index === -1) { // Product not on cart
        cart.push({
            product: product,
            amount: amount
        });
    } else { // Product already on cart
        cart[index].amount = amount;
    }

    setUserCart(cart);
    localStorage.setItem('userCart', JSON.stringify(cart));
}

export function RemoveFromCart(userCart, setUserCart, product) {
    const cart = userCart.slice();

    const index = cart.findIndex((el) => el.product.productId === product.productId);

    cart.splice(index, 1);

    setUserCart(cart);
    localStorage.setItem('userCart', JSON.stringify(cart));
}

export function ClearCart(setUserCart) {
    setUserCart([]);
    localStorage.setItem('userCart', JSON.stringify([]))
}