import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Service = () => {
    return (
        <>
            <Col md={3}>
                <div className="service__component">
                    <div className="service_main">
                        <Card className="text-center" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Parcel Delivery</Card.Title>
                                <hr className="mx-auto w-50" />
                                <Card.Text>
                                    First-Mile Pickup and Last Mile Delivery Services for Private, Small Business and Corporate
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </Col>
            <Col md={3}>
                <div className="service__component">
                    <div className="service_main">
                        <Card className="text-center" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Parcel Delivery</Card.Title>
                                <hr className="mx-auto w-50" />
                                <Card.Text>
                                    First-Mile Pickup and Last Mile Delivery Services for Private, Small Business and Corporate
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </Col>
        </>
    );
};

export default Service;