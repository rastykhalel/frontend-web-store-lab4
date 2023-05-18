/*
    Represents a product offerred by the web store.
*/
export type Product = {
    // a unique identifier representing this product
    id?: string;

    // the name of the product
    name: string;

    // a detailed description of the product
    description: string;

    // the current price of the product
    price: number;

    // a URL to a photo of the product
    image_url?: string;
}
