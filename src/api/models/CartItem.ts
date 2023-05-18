/*
    Represents an item in the shopping cart.
*/
export type CartItem = {
    // a unique identifier representing this item in a shopping cart
    id?: string;

    // the identifier of the shopping cart this item belongs in
    user_id?: string;

    // the identifier of the product
    product_id: string;

    // the quantity of items
    quantity: number;
}
