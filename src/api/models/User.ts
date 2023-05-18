/*
    Represents a user of the web store.
*/
export type User = {
    // a unique identifier representing this user
    id?: string;

    // the user's full name
    name: string;

    // the user's email address
    email: string;

    // the user's password
    password?: string;
}
