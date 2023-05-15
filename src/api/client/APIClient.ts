import { httpClient } from './HTTPClient';

import { Cart } from '../models/Cart';
import { CartItem } from '../models/CartItem';
import { Customer } from '../models/Customer';
import { Product } from '../models/Product';

class APIClient {
    /* Product endpoints **********************************************************************/

    // get a list of all products
    async getProducts(): Promise<Product[]> {
        return new Promise<Product[]> ((resolve, reject) => {
            httpClient.get<Product[]>(`/products`).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(err);
            });
        });
    }

    // create a new product
    async createProduct(product: Product): Promise<Product> {
        return new Promise<Product> ((resolve, reject) => {
            httpClient.post<Product>(`/product`, product).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(err);
            });
        });
    }

    // get a specific product by id
    async getProductById(productId: string): Promise<Product> {
        return new Promise<Product> ((resolve, reject) => {
            httpClient.get<Product>(`/product/${productId}`).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(err);
            });
        });
    }

    // update an exiting product
    async updateProduct(product: Product): Promise<Product> {
        return new Promise<Product> ((resolve, reject) => {
            httpClient.put<Product>(`/product/${product.productId}`, product).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(err);
            });
        });
    }

    // delete an existing product by id
    async deleteProduct(productId: string): Promise<Product> {
        return new Promise<Product> ((resolve, reject) => {
            httpClient.delete<Product>(`/product/${productId}`).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(err);
            });
        });
    }

    /* Customer endpoints *********************************************************************/

    async createCustomer(customer: Customer): Promise<Customer> {
        return new Promise<Customer> ((resolve, reject) => {
            httpClient.post<Customer>(`/customer`, customer).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(err);
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
                reject(err);
            });
        });
    }

    // get a specific cart by id
    async getCartById(cartId: string): Promise<Cart> {
        return new Promise<Cart> ((resolve, reject) => {
            httpClient.get<Cart>(`/cart/${cartId}`).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(err);
            });
        });
    }

    // add item to cart
    async addItemToCart(cartId: string, item: CartItem): Promise<CartItem> {
        return new Promise<CartItem> ((resolve, reject) => {
            httpClient.put<CartItem>(`/cart/${cartId}/item`, item).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(err);
            });
        });
    }

    // get a list of all items in a cart
    async getItemsInCart(cartId: string): Promise<CartItem[]> {
        return new Promise<CartItem[]> ((resolve, reject) => {
            httpClient.get<CartItem[]>(`/cart/${cartId}/items`).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(err);
            });
        });
    }

    // get a specific item from a cart by id
    async getItemInCart(cartId: string, itemId: string): Promise<CartItem> {
        return new Promise<CartItem> ((resolve, reject) => {
            httpClient.get<CartItem>(`/cart/${cartId}/item/${itemId}`).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(err);
            });
        });
    }

    async removeItemFromCart(cartId: string, itemId: string): Promise<CartItem> {
        return new Promise<CartItem> ((resolve, reject) => {
            httpClient.delete<CartItem>(`/cart/${cartId}/item/${itemId}`).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(err);
            });
        });
    }
    
    /* Order endpoints ************************************************************************/

}

export const apiClient = new APIClient();
