import { useEffect, useState } from 'react';
import { Button, Table} from 'reactstrap';

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
                    <td>${subTotal}</td>
                </tr>
                <tr>
                    <th scope="row">Tax</th>
                    <td>${totalTax}</td>
                </tr>
                <tr>
                    <th scope="row">Shipping</th>
                    <td>${shipping}</td>
                </tr>
                <tr>
                    <th scope="row">TOTAL</th>
                    <td>${grandTotal}</td>
                </tr>
            </Table>
            <Button onClick={placeOrder}>Place order</Button>
        </>
    );
}
