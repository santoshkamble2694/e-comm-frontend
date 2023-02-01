import React from 'react'
import { Link } from 'react-router-dom';
import { Col, Container, Form, Row, Button } from 'react-bootstrap'
import { useFormik } from 'formik';
import * as Yup from "yup"
import { ROUTES } from '../../utils/Routes';
import "./index.css"

//form validation
const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email format").required("Email is a required field"),
    password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is a required field"),
})

const Login = () => {

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values)
        },
    });

    return (
        <Container>
            <Row>
                <Col md="6" className='login__form--container'>
                    <Form style={{ width: "100%" }} onSubmit={formik.handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control 
                                name='email'
                                type="email" 
                                placeholder="Enter email" 
                                value={formik.values.email}
                                onChange={formik.handleChange}
                            />
                            {formik.touched.email && Boolean(formik.errors.email) && (
                                <Form.Text className="text-danger">
                                    {formik.errors.email}
                                </Form.Text>
                            )}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                name='password'
                                type="password" 
                                placeholder="Password" 
                                value={formik.values.password}
                                onChange={formik.handleChange}
                            />
                            {formik.touched.password && Boolean(formik.errors.password) && (
                                <Form.Text className="text-danger">
                                    {formik.errors.password}
                                </Form.Text>
                            )}
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    <p className='pt-2'>Don't have an account? <Link to={ROUTES.SIGN_UP}>Create account</Link></p>
                </Col>
                <Col md="6" className='signup-image'>

                </Col>
            </Row>
        </Container>
    )
}

export default Login