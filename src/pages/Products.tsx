import { useEffect, useState } from 'react';
import { Container } from 'reactstrap';

import { ProductCard } from '../components/ProductCard';

import { Product } from '../api/models/Product';
import { apiClient } from '../api/client/APIClient';

export const Products = () => {
    const [cartId, setCartId] = useState<string>("");
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        // TODO: get the cartId???
    }, []);

    useEffect(() => {
        apiClient.getProducts().then((products) => {
            setProducts(products);
        });

        /*
        setProducts([
            {
                productId: "1",
                name: "Product 1",
                description: "This is a test product. This is product #1.",
                price: 100,
                image: "https://picsum.photos/300/200?id=1",
            },
            {
                productId: "2",
                name: "Product 2",
                description: "This is a test product. This is product #2.",
                price: 97,
                image: "https://picsum.photos/300/200?id=2",
            },
            {
                productId: "3",
                name: "Product 3",
                description: "This is a test product. This is product #3.",
                price: 155,
                image: "https://picsum.photos/300/200?id=3",
            }
        ]);
        */
    }, [cartId])

    const addToCart = (product: Product) => {
        apiClient.addItemToCart({
            product_id: product.id!!,
            quantity: 1
        });
    }

    return (
        <>
            <h1>Products</h1>
            <Container className="d-flex flex-wrap p-3 justify-content-center">
                {
                    products.map((product) => 
                        <div className="p-2 col-md-4 col-sm-12">
                            <ProductCard
                                key={product.id}
                                product={product}
                                addToCart={addToCart}
                            />
                        </div>
                    )
                }
            </Container>
        </>
    );
};
