import { faCog, faFighterJet, faGlobe, faHandHoldingHeart, faHeadset, faHotel, faTruck, faWarehouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'


const Header = () => {
    return (
        <div className="header__main">
            <Navbar className="pt-0 shadow-sm px-5" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#"> <img src={logo} className="img-fluid" alt="logo" /> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0 fw-bold"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={Link} to='/home' className="rounded-bottom">Home</Nav.Link>
                            <Nav.Link as={Link} to='/about' className="rounded-bottom">About Us</Nav.Link>
                            <NavDropdown className="rounded-bottom" title="Services" id="navbarScrollingDropdown">
                                <ul className="d-flex list-unstyled">
                                    <li>
                                        <NavDropdown.Item>
                                            <FontAwesomeIcon icon={faHandHoldingHeart} />
                                            <p>Parcel <br /> Delivery </p>
                                        </NavDropdown.Item>
                                    </li>
                                    <li>
                                        <NavDropdown.Item>
                                            <FontAwesomeIcon icon={faWarehouse} />
                                            <p>Warehousing </p>
                                        </NavDropdown.Item>
                                    </li>
                                    <li>
                                        <NavDropdown.Item>
                                            <FontAwesomeIcon icon={faHotel} />
                                            <p>Bulk <br /> Shipment </p>
                                        </NavDropdown.Item>
                                    </li>
                                    <li>
                                        <NavDropdown.Item>
                                            <FontAwesomeIcon icon={faCog} />
                                            <p>Logistics <br /> Services </p>
                                        </NavDropdown.Item>
                                    </li>
                                </ul>
                                <ul className="d-flex list-unstyled">
                                    <li>
                                        <NavDropdown.Item>
                                            <FontAwesomeIcon icon={faTruck} />
                                            <p>Line <br /> Houl</p>
                                        </NavDropdown.Item>
                                    </li>
                                    <li>
                                        <NavDropdown.Item>
                                            <FontAwesomeIcon icon={faFighterJet} />
                                            <p>Air <br /> Parcel </p>
                                        </NavDropdown.Item>
                                    </li>
                                    <li>
                                        <NavDropdown.Item>
                                            <FontAwesomeIcon icon={faHeadset} />
                                            <p>Customizable <br /> Solution </p>
                                        </NavDropdown.Item>
                                    </li>
                                    <li>
                                        <NavDropdown.Item>
                                            <FontAwesomeIcon icon={faWarehouse} />
                                            <p>Warehousing </p>
                                        </NavDropdown.Item>
                                    </li>
                                </ul>
                            </NavDropdown>
                            <Nav.Link as={Link} to='/login' className="rounded-bottom">LOG IN</Nav.Link>
                            <Nav.Link as={Link} to='/'>
                                <div className="globe-btn rounded-pill px-1"> <FontAwesomeIcon icon={faGlobe} /> <span>BN</span></div>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;