import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logoIcon from '../../assets/images/logo.png';

const LoginForm = () => {
    return (
        <div className="login__component">
            <div className="login_main">
                <Row className="mx-0">
                    <Col md={6}>
                        <div className="px-5">
                            <div className="text-center py-5">
                                <img className="img-fluid mx-auto" src={logoIcon} alt="not-found" />
                                <h2 className="fw-bold pt-5 pb-3">Log In</h2>
                            </div>
                            <form>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label fw-bold">User Name</label>
                                    <input type="email" class="form-control bg-secondary py-3" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label fw-bold">Password</label>
                                    <input type="password" class="form-control bg-secondary py-3" id="exampleInputPassword1" />
                                </div>
                                <div class="mb-4">
                                    <Link to="/"><label class="text-primary fw-bold" style={{ cursor: 'pointer' }}>Forgot Password?</label></Link>
                                </div>
                                <div class="py-5 text-center">
                                    <div class="d-grid gap-2 col-6 mx-auto pb-5">
                                        <button type="submit" class="btn btn-primary btn-lg py-4">Log In</button>
                                        <label className="fw-bold">Don't have an account? <Link to="/" className="text-decoration-none"><span className="ps-2" style={{ color: '#1369bf', cursor: 'pointer' }}>Sign Up</span></Link> </label>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div>
                            <div className="text-center py-5">
                                <img className="img-fluid mx-auto" src={logoIcon} alt="not-found" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default LoginForm;