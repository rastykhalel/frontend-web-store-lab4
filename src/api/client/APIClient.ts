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
            httpClient.put<Product>(`/product/${product.productId}`, product).then((res) => {
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

    /* Cart endpoints *************************************************************************/

    // create a new cart
    async createCart(): Promise<Cart> {
        return new Promise<Cart> ((resolve, reject) => {
            httpClient.post<Cart>(`/cart`).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(new Error(err.response.data.message || "Unknown error"));
            });
        });
    }

    // get a specific cart by id
    async getCartById(cartId: string): Promise<Cart> {
        return new Promise<Cart> ((resolve, reject) => {
            httpClient.get<Cart>(`/cart/${cartId}`).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(new Error(err.response.data.message || "Unknown error"));
            });
        });
    }

    // add item to cart
    async addItemToCart(cartId: string, item: CartItem): Promise<CartItem> {
        return new Promise<CartItem> ((resolve, reject) => {
            httpClient.put<CartItem>(`/cart/${cartId}/item`, item).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(new Error(err.response.data.message || "Unknown error"));
            });
        });
    }

    // get a list of all items in a cart
    async getItemsInCart(cartId: string): Promise<CartItem[]> {
        return new Promise<CartItem[]> ((resolve, reject) => {
            httpClient.get<CartItem[]>(`/cart/${cartId}/items`).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(new Error(err.response.data.message || "Unknown error"));
            });
        });
    }

    // get a specific item from a cart by id
    async getItemInCart(cartId: string, itemId: string): Promise<CartItem> {
        return new Promise<CartItem> ((resolve, reject) => {
            httpClient.get<CartItem>(`/cart/${cartId}/item/${itemId}`).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(new Error(err.response.data.message || "Unknown error"));
            });
        });
    }

    async removeItemFromCart(cartId: string, itemId: string): Promise<CartItem> {
        return new Promise<CartItem> ((resolve, reject) => {
            httpClient.delete<CartItem>(`/cart/${cartId}/item/${itemId}`).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(new Error(err.response.data.message || "Unknown error"));
            });
        });
    }

    async placeOrder(cartId: string, order: Order): Promise<Order> {
        return new Promise<Order> ((resolve, reject) => {
            httpClient.post<Order>(`/cart/${cartId}/order`).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(new Error(err.response.data.message || "Unknown error"));
            });
        });
    }
    
    /* Order endpoints ************************************************************************/

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
