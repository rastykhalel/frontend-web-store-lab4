import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {
    Button,
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
import * as Yup from 'yup';

import styled from 'styled-components';

import { apiClient } from '../api/client/APIClient';

const BackendErrorMessage = styled.div`
    color: #ff0000;
`;

export const LoginForm = () => {
    const navigate = useNavigate();

    const [backendError, setBackendError] = useState<string | undefined>(undefined);

    const initialValues = {
        emailAddress: '',
        password: '',
    };

    const validationSchema = Yup.object().shape({
        emailAddress: Yup
            .string()
            .email('Invalid email address')
            .required('Email address is required'),
        password: Yup
            .string()
            .min(6, 'Password requires at least 6 characters')
            .required('Password is required'),
    });

    const loginUser = (fields: any) => {
        setBackendError(undefined);
        apiClient.loginUser(fields.emailAddress, fields.password).then(() => {
            navigate("/");
        }).catch((err) => {
            setBackendError(err.message);
        });
    };

    return (
        <Container>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={loginUser}
            >
                {({ dirty, errors, touched, isValid, submitForm }: FormikProps<any>) => (
                    <Form className="text-start">
                        <Row className="row-cols-4 justify-content-md-center">
                            <Col className="col-4 p-2">
                                <FormGroup>
                                    <Label for="emailAddress">Email address</Label>
                                    <Field
                                        id="emailAddress"
                                        name="emailAddress"              
                                        type="text"
                                        className={`form-control${
                                            errors.emailAddress && touched.emailAddress ? ' is-invalid' : ''
                                        }`}
                                    />
                                    <ErrorMessage name="emailAddress" component="div" className="invalid-feedback" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="password">Password</Label>
                                    <Field
                                        id="password"
                                        name="password"              
                                        type="text"
                                        className={`form-control${
                                            errors.password && touched.password ? ' is-invalid' : ''
                                        }`}
                                    />
                                    <ErrorMessage name="password" component="div" className="invalid-feedback" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row className="row-cols-4 justify-content-md-center">
                            <Col className="col-4 p-2">
                                <BackendErrorMessage
                                    className={`${(backendError === undefined) ? 'invisible' : 'visible'}`}
                                >
                                    {backendError}
                                </BackendErrorMessage>
                            </Col>
                        </Row>
                        <Row className="row-cols-4 justify-content-md-center">
                            <Col className="col-4 p-2">
                                <Button
                                    block
                                    disabled={!(isValid && dirty)}
                                    onClick={submitForm}
                                >
                                    Login
                                </Button>
                            </Col>
                        </Row>
                        <Row className="row-cols-4 justify-content-md-center text-center">
                            <Col className="col-4 p-2">
                                Don't have an account? <a href="/signup">Sign up</a>
                                <br />
                                Forgot your password? <a href="/reset-password">Reset password</a>
                            </Col>
                        </Row>
                    </Form>
                )}
            </Formik>
        </Container>
    );
}
