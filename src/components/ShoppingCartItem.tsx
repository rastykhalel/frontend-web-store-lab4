import { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import { Trash3Fill } from 'react-bootstrap-icons';

import { CartItem } from '../api/models/CartItem';
import { Product } from '../api/models/Product';
import { apiClient } from '../api/client/APIClient';

const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

export interface ShoppingCartItemProps {
    cartItem: CartItem;
    removeFromCart: (cartItem: CartItem) => void;
}

export const ShoppingCartItem = ({
    cartItem,
    removeFromCart,
    ...props
}: ShoppingCartItemProps) => {
    const [product, setProduct] = useState<Product>();

    useEffect(() => {
        apiClient.getProductById(cartItem.product_id).then((product) => {
            setProduct(product);
        });

        /*
        setProduct({
            id: "1",
            name: "Product 1",
            description: "This is a test product. This is product #1.",
            price: 100,
            image_url: "https://picsum.photos/300/200?id=1",
        });
        */
    }, []);

    return(
        <tr>
            <th scope="row">{product?.name}</th>
            <td>{currencyFormatter.format(product?.price || 0)}</td>
            <td>
                <Button color="danger" onClick={() => { removeFromCart(cartItem) }}>
                    <Trash3Fill color="white" />
                </Button>
            </td>
        </tr>
    );
}
