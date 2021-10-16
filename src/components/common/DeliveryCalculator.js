import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DeliveryCalculator = () => {
    return (
        <div className="delivery__calculator__component">
            <div className="delivery-calculator_main pb-5">
                <h1 className="text-center fw-bold">Delivery Calculator</h1>
                <h4 className="text-center fw-normal">Get an idea of your delivery charges in advance for the</h4>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Row className="g-2">
                            <Col md>
                                <Form.Label className="fw-bold">Product weight</Form.Label>
                                <Form.Select className="py-3 bg-secondary" aria-label="Floating label select example">
                                    <option></option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </Col>
                            <Col md>
                                <Form.Label className="fw-bold">Product</Form.Label>
                                <Form.Select className="py-3 bg-secondary" aria-label="Floating label select example">
                                    <option></option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Row className="g-2">
                            <Col md>
                                <Form.Label className="fw-bold">Pickup</Form.Label>
                                <Form.Select className="py-3 bg-secondary" aria-label="Floating label select example">
                                    <option></option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </Col>
                            <Col md>
                                <Form.Label className="fw-bold">Delivery</Form.Label>
                                <Form.Select className="py-3 bg-secondary" aria-label="Floating label select example">
                                    <option></option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </Col>
                        </Row>
                    </Form.Group>
                    <div className="delivery-btn text-center pt-2">
                        <Button variant="primary" className="btn btn-lg text-white bg-primary border-0 py-3 px-5 mx-auto" type="submit">
                            Check
                        </Button>
                        <p className="fw-bold">Want to know how much it can cost to send your parcel to any location? <Link to="/" className="text-primary text-decoration-none"><span>See List</span></Link> </p>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default DeliveryCalculator;