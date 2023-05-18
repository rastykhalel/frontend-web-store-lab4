import { useEffect, useState } from 'react';
import { Container, Col, Row, Table } from 'reactstrap';

import { OrderForm } from '../components/OrderForm';
import { OrderSummary } from '../components/OrderSummary';
import { ShoppingCartItem } from '../components/ShoppingCartItem';

import { CartItem } from '../api/models/CartItem';
import { Customer } from '../api/models/Customer';
import { apiClient } from '../api/client/APIClient';

export const ShoppingCart = () => {
    const [customer, setCustomer] = useState<Customer>();
    const [cartId, setCartId] = useState<string>("");
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [cartSubTotal, setCartSubTotal] = useState<number>(0);
    const [creditCardNumber, setCreditCardNumber] = useState<string>("");

    useEffect(() => {
        // TODO: get the customer???
        // TODO: get the cartId???
    }, []);

    useEffect(() => {
        apiClient.getItemsInCart(cartId).then((cartItems) => {
            setCartItems(cartItems);
        });

        /*
        setCartItems([
            {
                cartItemId: "1",
                cartId: cartId,
                productId: "1",
                price: 122
            },
            {
                cartItemId: "2",
                cartId: cartId,
                productId: "2",
                price: 86
            },
            {
                cartItemId: "3",
                cartId: cartId,
                productId: "3",
                price: 21
            },
        ]);
        */
    }, [cartId]);

    useEffect(() => {
        updateSubTotal();
    }, [cartItems]);

    const updateSubTotal = () => {
        setCartSubTotal(cartItems.map(item => item.price).reduce((a, b) => { return a + b; }, 0));
    }

    const removeFromCart = (cartItem: CartItem) => {
        let id = cartItem.cartItemId!!;
        apiClient.removeItemFromCart(cartId, id).then(() => {
            setCartItems(cartItems.filter(item => item.cartItemId != id ));
        });
        setCartItems(cartItems.filter(item => item.cartItemId != id ));
    }

    const placeOrder = () => {
        apiClient.placeOrder(cartId, {
            cartId: cartId,
            name: customer?.name!!,
            creditCard: creditCardNumber,
            shippingAddress: customer?.address!!,
            createdAt: new Date()
        }).then(() => {
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
                                key={cartItem.cartItemId}
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
