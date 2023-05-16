import {
    Col,
    Container,
    Form,
    FormGroup,
    Input,
    Label,
    Row,
} from 'reactstrap';

export const OrderForm = () => {
    return (
        <>
            <h5>Payment</h5>
            <Container>
                <Form className="text-start">
                    <Row className="row-cols-3">
                        <Col className="col-12 p-2">
                            <FormGroup>
                                <Label for="ccNumber">Credit card number</Label>
                                <Input
                                    id="ccNumber"
                                    name="ccNumber"              
                                />
                            </FormGroup>
                        </Col>
                        <Col className="col-6 p-2">
                            <FormGroup>
                                <Label for="ccName">Name on card</Label>
                                <Input
                                    id="ccName"
                                    name="ccName"
                                />
                            </FormGroup>
                        </Col>
                        <Col className="col-3 p-2">
                            <FormGroup>
                                <Label for="ccExpiration">Expiration date</Label>
                                <Input
                                    id="ccExpiration"
                                    name="ccExpiration"
                                />
                            </FormGroup>
                        </Col>
                        <Col className="col-3 p-2">
                            <FormGroup>
                                <Label for="ccVerify">CVV</Label>
                                <Input
                                    id="ccVerify"
                                    name="ccVerify"
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </>
    );
}
