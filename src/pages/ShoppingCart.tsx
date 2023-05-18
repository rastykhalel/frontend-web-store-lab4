import { useEffect, useState } from 'react';
import { Container, Col, Row, Table } from 'reactstrap';

import { OrderForm } from '../components/OrderForm';
import { OrderSummary } from '../components/OrderSummary';
import { ShoppingCartItem } from '../components/ShoppingCartItem';

import { CartItem } from '../api/models/CartItem';
import { User } from '../api/models/User';
import { apiClient } from '../api/client/APIClient';

export const ShoppingCart = () => {
    const [user, setUser] = useState<User>();
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [cartSubTotal, setCartSubTotal] = useState<number>(0);
    const [creditCardNumber, setCreditCardNumber] = useState<string>("");

    useEffect(() => {
        apiClient.getItemsInCart().then((cartItems) => {
            setCartItems(cartItems);
        });

        
        setCartItems([
            {
                id: "1",
                product_id: "1",
                quantity: 1
            },
            {
                id: "2",
                product_id: "2",
                quantity: 2
            },
            {
                id: "3",
                product_id: "3",
                quantity: 5
            },
        ]);
        
    }, []);

    useEffect(() => {
        updateSubTotal();
    }, [cartItems]);

    const updateSubTotal = () => {
        // TODO: setCartSubTotal(cartItems.map(item => item.price).reduce((a, b) => { return a + b; }, 0));
    }

    const removeFromCart = (cartItem: CartItem) => {
        let id = cartItem.id!!;
        apiClient.removeItemFromCart(id).then(() => {
            setCartItems(cartItems.filter(item => item.id != id ));
        });
        setCartItems(cartItems.filter(item => item.id != id ));
    }

    const placeOrder = () => {
        apiClient.placeOrder().then(() => {
            setCartItems([]);
        });
    }

    return (
        <>
            <h1>Shopping cart</h1>

            <Container className="text-start">
                <Table hover responsive>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        cartItems.map((cartItem) => 
                            <ShoppingCartItem
                                key={cartItem.id}
                                cartItem={cartItem}
                                removeFromCart={removeFromCart}
                            />
                        )
                    }
                    </tbody>
                </Table>
            </Container>

            <Container className="text-start">
                <Row className="row-cols-2">
                    <Col className="col-9">
                        <OrderForm />
                    </Col>
                    <Col className="col-3">
                        <OrderSummary
                            subTotal={cartSubTotal}
                            taxRate={0}
                            shipping={0}
                            placeOrder={placeOrder}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    );
};
