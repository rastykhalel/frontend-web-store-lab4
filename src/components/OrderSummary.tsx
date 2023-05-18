import { useEffect, useState } from 'react';
import { Button, Table} from 'reactstrap';

const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

export interface OrderSummaryProps {
    subTotal: number;
    taxRate: number;
    shipping: number;
    placeOrder: () => void;
}

export const OrderSummary = ({
    subTotal,
    taxRate,
    shipping,
    placeOrder,
    ...props
}: OrderSummaryProps) => {
    const [totalTax, setTotalTax] = useState<number>(0);
    const [grandTotal, setGrandTotal] = useState<number>(0);

    useEffect(() => {
        console.log(`subTotal=${subTotal}`);
        setTotalTax(subTotal * taxRate);
    }, [subTotal, taxRate]);

    useEffect(() => {
        setGrandTotal(subTotal + totalTax + shipping);
    }, [subTotal, totalTax, shipping]);

    return (
        <>
            <h5>Order Summary</h5>
            <Table>
                <tr>
                    <th scope="row">Subtotal</th>
                    <td>{currencyFormatter.format(subTotal)}</td>
                </tr>
                <tr>
                    <th scope="row">Tax</th>
                    <td>{currencyFormatter.format(totalTax)}</td>
                </tr>
                <tr>
                    <th scope="row">Shipping</th>
                    <td>{currencyFormatter.format(shipping)}</td>
                </tr>
                <tr>
                    <th scope="row">TOTAL</th>
                    <td>{currencyFormatter.format(grandTotal)}</td>
                </tr>
            </Table>
            <Button onClick={placeOrder}>Place order</Button>
        </>
    );
}
