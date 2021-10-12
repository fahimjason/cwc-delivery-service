import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import logoImage from '../../assets/images/logo-image-sm.png';
import logoIcon from '../../assets/images/logo-icon.png';
import { Link } from 'react-router-dom';


const Footer = () => {
    library.add(fab,);

    return (
        <div className="footer__component bg-dark">
            <div className="footer_main text-white py-3">
                <Container>
                    <div className="px-5">
                        <Row>
                            <Col md={6}>
                                <Row>
                                    <h3 className="text-white">About CWE </h3>
                                    <Col md={6}>
                                        <ul className="list-unstyled">
                                            <li><Link to="/" className="text-white text-decoration-none">Careers at</Link></li>
                                            <li><Link to="/" className="text-white text-decoration-none">Customer suliliort</Link></li>
                                            <li><Link to="/" className="text-white text-decoration-none">Blog</Link></li>
                                            <li><Link to="/" className="text-white text-decoration-none">Careers at</Link></li>
                                            <li><Link to="/" className="text-white text-decoration-none">Customer suliliort</Link></li>
                                            <li><Link to="/" className="text-white text-decoration-none">Blog</Link></li>
                                        </ul>
                                    </Col>
                                    <Col md={6}>
                                        <ul className="list-unstyled">
                                            <li><Link to="/" className="text-white text-decoration-none">Booking terms</Link></li>
                                            <li><Link to="/" className="text-white text-decoration-none">Privacy policy</Link></li>
                                            <li><Link to="/" className="text-white text-decoration-none">Website terms</Link></li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={6}>
                                <Row>
                                    <h3 className="text-white">Services</h3>
                                    <Col md={6}>
                                        <ul className="list-unstyled">
                                            <li><Link to="/" className="text-white text-decoration-none">Parcel Delivery</Link></li>
                                            <li><Link to="/" className="text-white text-decoration-none">Warehousing</Link></li>
                                            <li><Link to="/" className="text-white text-decoration-none">Bulk Shipment</Link></li>
                                            <li><Link to="/" className="text-white text-decoration-none">Line Houl</Link></li>
                                            <li><Link to="/" className="text-white text-decoration-none">Logistics Services</Link></li>
                                        </ul>
                                    </Col>
                                    <Col md={6}>
                                        <ul className="list-unstyled">
                                            <li><Link to="/" className="text-white text-decoration-none">Logistics Services</Link></li>
                                            <li><Link to="/" className="text-white text-decoration-none">Customizable Solution</Link></li>
                                            <li><Link to="/" className="text-white text-decoration-none">Line Houl</Link></li>
                                            <li><Link to="/" className="text-white text-decoration-none">Warehousing</Link></li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                    <Row className="footer_info">
                        <Col md={6}>
                            <div className="footer_info d-flex align-items-center fw-bold">
                                <img src={logoImage} alt="not-found" />
                                <p className="ps-3">Call Us: 0170000000</p>
                                <p className="ps-3">Email: CWC@gmail.com</p>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="text-sm-center">
                                <img src={logoIcon} alt="not-found" />
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="social-icons d-flex align-items-center">
                                <div className="px-2 py-1 rounded-circle border">
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </div>
                                <div className="px-2 py-1 rounded-circle border mx-1">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </div>
                                <div className="px-2 py-1 rounded-circle border">
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div className="copy_right">
                        <hr className="w-50 mx-auto pt-0 mt-0" />
                        <p className="text-center">Copyright &copy; {new Date().getFullYear()} CWC. All rights reserved. Privacy Policy Terms and Condition</p>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Footer;