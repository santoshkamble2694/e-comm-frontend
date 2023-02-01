import React from 'react'
import { Link } from 'react-router-dom';
import { Col, Container, Form, Row, Button } from 'react-bootstrap'
import { useFormik } from 'formik';
import * as Yup from "yup"
import { ROUTES } from '../../utils/Routes';
import "./index.css"

//form validation
const validationSchema = Yup.object().shape({
    name: Yup.string().min(2, "Name must be at least 2 characters").required("Name is a required field"),
    email: Yup.string().email("Invalid email format").required("Email is a required field"),
    password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is a required field"),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is a required field'),
})

const Signup = () => {

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
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
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                name='name'
                                type="text"
                                placeholder="Enter Name"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                isInvalid={!!(formik.errors.name && formik.touched.name)}
                            />
                            {formik.touched.name && Boolean(formik.errors.name) && (
                                <Form.Text className="text-danger">
                                    {formik.errors.name}
                                </Form.Text>
                            )}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                name='email'
                                type="email"
                                placeholder="Enter email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                isInvalid={!!(formik.errors.email && formik.touched.email)}
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
                                isInvalid={!!(formik.errors.password && formik.touched.password)}
                            />
                            {formik.touched.password && Boolean(formik.errors.password) && (
                                <Form.Text className="text-danger">
                                    {formik.errors.password}
                                </Form.Text>
                            )}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                name='confirmPassword'
                                type="password"
                                placeholder="Confirm Password"
                                value={formik.values.confirmPassword}
                                onChange={formik.handleChange}
                                isInvalid={!!(formik.errors.confirmPassword && formik.touched.confirmPassword)}
                            />
                            {formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword) && (
                                <Form.Text className="text-danger">
                                    {formik.errors.confirmPassword}
                                </Form.Text>
                            )}
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        <p className='pt-2'>Already have an account? <Link to={ROUTES.SIGN_IN}>SignIn</Link></p>
                    </Form>
                </Col>
                <Col md="6" className='signin-image'>

                </Col>
            </Row>
        </Container>
    )
}

export default Signup