/*
    Represents an item in the shopping cart.
*/
export type CartItem = {
    // a unique identifier representing this item in a shopping cart
    cartItemId: string;

    // the identifier of the shopping cart this item belongs in
    cartId: string;

    // the identifier of the product
    productId: string;

    // the price of the item in the cart
    price: number;
}
