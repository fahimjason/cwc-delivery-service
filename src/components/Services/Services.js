import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import DeliveryCalculator from '../common/DeliveryCalculator';
import Service from '../common/Service';

const Services = () => {
    return (
        <div className="services__component">
            <div className="services_main bg-secondary pt-5">
                <h1 className="text-center fw-bold py-5">Our Services</h1>
                <div className="service-card">
                    <Row className="mx-0 py-5">
                        <Service />
                    </Row>
                </div>
                <div className="service-details bg-white">
                    <Container>
                        <Row className="mx-0 bg-secondary">
                            <Col md={6} className="px-0">
                                <div class="service-info-left d-flex justify-content-between bg-white py-5 pe-5">
                                    <div className="text-center fw-bold py-3">
                                        <h1 className="text-primary">25700+</h1>
                                        <p>Parcel Delivered</p>
                                    </div>
                                    <div className="text-center fw-bold py-3">
                                        <h1 className="text-primary">64</h1>
                                        <p>Districts Coverage</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} className="px-0">
                                <div class="service-info-right d-flex justify-content-between bg-white py-5 px-5">
                                    <div className="text-center fw-bold py-3">
                                        <h1 className="text-primary">5000+</h1>
                                        <p>Delivery Agent</p>
                                    </div>
                                    <div className="text-center fw-bold py-3">
                                        <h1 className="text-primary">8000+</h1>
                                        <p>Registered Merchants</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <DeliveryCalculator />
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default Services;