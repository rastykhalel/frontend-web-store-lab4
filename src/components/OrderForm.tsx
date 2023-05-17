import {
    Col,
    Container,
    FormGroup,
    Label,
    Row,
} from 'reactstrap';
import {
    ErrorMessage,
    Field,
    Form,
    Formik,
    FormikProps
} from 'formik';
import valid from 'card-validator';
import * as Yup from 'yup';

export const OrderForm = () => {
    const initialValues = {
        ccNumber: '',
        ccName: '',
        ccExpiration: '',
        ccVerify: '',
    };

    const validationSchema = Yup.object().shape({
        ccNumber: Yup
            .string()
            .required('Credit card number is required')
            .test('test-cc-number', 'Credit card number is invalid', value => valid.number(value).isValid),
        ccName: Yup
            .string()
            .required('Name on card is required')
            .min(4, 'Name on card is too short')
            .test('test-person-name', 'Name on card appears invalid', value => value.split(" ").length >= 2),
        ccExpiration: Yup
            .date()
            .required('Expiration is required'),
        ccVerify: Yup
            .string()
            .matches(/^[0-9]+$/, 'CVV should be digits only')
            .min(3, 'CVV is invalid')
            .max(4, 'CVV is invalid')
            .required('CVV is required'),
    });

    const submitOrder = (fields: any) => {
        // TODO
    };

    return (
        <>
            <h5>Payment</h5>
            <Container>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={submitOrder}
                >
                    {({ dirty, errors, touched, isValid, submitForm }: FormikProps<any>) => (
                        <Form className="text-start">
                            <Row className="row-cols-3">
                                <Col className="col-12 p-2">
                                    <FormGroup>
                                        <Label for="ccNumber">Credit card number</Label>
                                        <Field
                                            id="ccNumber"
                                            name="ccNumber"              
                                            type="text"
                                            className={`form-control${
                                                errors.ccNumber && touched.ccNumber ? ' is-invalid' : ''
                                            }`}
                                        />
                                        <ErrorMessage name="ccNumber" component="div" className="invalid-feedback" />
                                    </FormGroup>
                                </Col>
                                <Col className="col-6 p-2">
                                    <FormGroup>
                                        <Label for="ccName">Name on card</Label>
                                        <Field
                                            id="ccName"
                                            name="ccName"
                                            type="text"
                                            className={`form-control${
                                                errors.ccName && touched.ccName ? ' is-invalid' : ''
                                            }`}
                                        />
                                        <ErrorMessage name="ccName" component="div" className="invalid-feedback" />
                                    </FormGroup>
                                </Col>
                                <Col className="col-3 p-2">
                                    <FormGroup>
                                        <Label for="ccExpiration">Expiration date</Label>
                                        <Field
                                            id="ccExpiration"
                                            name="ccExpiration"
                                            type="text"
                                            className={`form-control${
                                                errors.ccExpiration && touched.ccExpiration ? ' is-invalid' : ''
                                            }`}
                                        />
                                        <ErrorMessage name="ccExpiration" component="div" className="invalid-feedback" />
                                    </FormGroup>
                                </Col>
                                <Col className="col-3 p-2">
                                    <FormGroup>
                                        <Label for="ccVerify">CVV</Label>
                                        <Field
                                            id="ccVerify"
                                            name="ccVerify"
                                            type="text"
                                            className={`form-control${
                                                errors.ccVerify && touched.ccVerify ? ' is-invalid' : ''
                                            }`}
                                        />
                                        <ErrorMessage name="ccVerify" component="div" className="invalid-feedback" />
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Form>
                    )}
                </Formik>
            </Container>
        </>
    );
}
