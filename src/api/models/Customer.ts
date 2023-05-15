/*
    Represents a customer of the web store.
*/
export type Customer = {
    // a unique identifier representing this customer
    customerId: string;

    // the customer's full name
    name: string;

    // the customer's shipping address
    address: string;
}
