import React from 'react';
import { Carousel, Col, Form, Row } from 'react-bootstrap';
import banner from '../../assets/images/banner.png'

const HomeMain = () => {
    return (
        <div className="home__main__component">
            <div className="home_main py-5">
                <Row className="mx-0 align-items-center">
                    <Col md={6} className="px-0">
                        <Carousel>
                            <Carousel.Item interval={1000}>
                                <img
                                    className="d-block w-100"
                                    src={banner}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={500}>
                                <img
                                    className="d-block w-100"
                                    src={banner}
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={banner}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col md={6} className="px-0">
                        <div class="text-center py-3">
                            <h1 className="text-primary fw-bold py-2">Do Fast Delivery</h1>
                            <Form>
                                <Row className="align-items-center mx-0">
                                    <Col md={9} sm={12} className="my-1">
                                        <Form.Control id="inlineFormInputName" className="bg-secondary py-3" placeholder="" required />
                                    </Col>
                                    <Col md={3} xs={12} className="my-1">
                                        <button type="submit" class="btn btn-primary py-3 fw-bold">Track Parcel</button>
                                    </Col>
                                    <Form.Label htmlFor="inlineFormInputName" className="fw-bold">
                                        With us, you may get your courier delivered is the safest way possible!
                                    </Form.Label>
                                </Row>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default HomeMain;