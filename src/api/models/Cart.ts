/*
    Represents a customer shopping cart.
*/
export type Cart = {
    // a unique identifier representing this shopping cart
    productId: string;

    // the date the cart was created
    createdAt: Date;
}
