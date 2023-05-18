import { httpClient } from './HTTPClient';

import { Cart } from '../models/Cart';
import { CartItem } from '../models/CartItem';
import { Order } from '../models/Order';
import { Product } from '../models/Product';
import { User } from '../models/User';

class APIClient {
    /* Product endpoints **********************************************************************/

    // get a list of all products
    async getProducts(): Promise<Product[]> {
        return new Promise<Product[]> ((resolve, reject) => {
            httpClient.get<Product[]>(`/products`).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(new Error(err.response.data.message || "Unknown error"));
            });
        });
    }

    // create a new product
    async createProduct(product: Product): Promise<Product> {
        return new Promise<Product> ((resolve, reject) => {
            httpClient.post<Product>(`/product`, product).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(new Error(err.response.data.message || "Unknown error"));
            });
        });
    }

    // get a specific product by id
    async getProductById(productId: string): Promise<Product> {
        return new Promise<Product> ((resolve, reject) => {
            httpClient.get<Product>(`/product/${productId}`).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(new Error(err.response.data.message || "Unknown error"));
            });
        });
    }

    // update an exiting product
    async updateProduct(product: Product): Promise<Product> {
        return new Promise<Product> ((resolve, reject) => {
            httpClient.put<Product>(`/product/${product.id}`, product).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(new Error(err.response.data.message || "Unknown error"));
            });
        });
    }

    // delete an existing product by id
    async deleteProduct(productId: string): Promise<Product> {
        return new Promise<Product> ((resolve, reject) => {
            httpClient.delete<Product>(`/product/${productId}`).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(new Error(err.response.data.message || "Unknown error"));
            });
        });
    }

    /* User endpoints *********************************************************************/

    async createUser(user: User): Promise<User> {
        return new Promise<User> ((resolve, reject) => {
            httpClient.post<User>(`/user`, user).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(new Error(err.response.data.message || "Unknown error"));
            });
        });
    }

    async loginUser(email: string, password: string): Promise<User> {
        return new Promise<User> ((resolve, reject) => {
            httpClient.post<any>(`/login`, {
                email: email, 
                password: password,
            }).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(new Error(err.response.data.message || "Unknown error"));
            });
        });
    }

    /* Cart endpoints *************************************************************************/

    // add item to cart
    async addItemToCart(item: CartItem): Promise<CartItem> {
        return new Promise<CartItem> ((resolve, reject) => {
            httpClient.put<CartItem>(`/cart/add`, item).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(new Error(err.response.data.message || "Unknown error"));
            });
        });
    }

    // get a list of all items in a cart
    async getItemsInCart(): Promise<CartItem[]> {
        return new Promise<CartItem[]> ((resolve, reject) => {
            httpClient.get<CartItem[]>(`/cart/items`).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(new Error(err.response.data.message || "Unknown error"));
            });
        });
    }

    // get a specific item from a cart by id
    async getItemInCart(itemId: string): Promise<CartItem> {
        return new Promise<CartItem> ((resolve, reject) => {
            httpClient.get<CartItem>(`/cart/item/${itemId}`).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(new Error(err.response.data.message || "Unknown error"));
            });
        });
    }

    async removeItemFromCart(itemId: string): Promise<CartItem> {
        return new Promise<CartItem> ((resolve, reject) => {
            httpClient.delete<CartItem>(`/cart/item/${itemId}`).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(new Error(err.response.data.message || "Unknown error"));
            });
        });
    }
    
    /* Order endpoints ************************************************************************/

    async placeOrder(): Promise<Order> {
        return new Promise<Order> ((resolve, reject) => {
            httpClient.post<Order>(`/order`).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(new Error(err.response.data.message || "Unknown error"));
            });
        });
    }

    // get a specific order by id
    async getOrderById(orderId: string): Promise<Order> {
        return new Promise<Order> ((resolve, reject) => {
            httpClient.get<Order>(`/order/${orderId}`).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(new Error(err.response.data.message || "Unknown error"));
            });
        });
    }

}

export const apiClient = new APIClient();
