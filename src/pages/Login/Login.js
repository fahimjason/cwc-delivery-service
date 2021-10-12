import React from 'react';
import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header';
import LoginForm from '../../components/LoginForm/LoginForm';

const Login = () => {
    return (
        <div>
            <Header />
            <LoginForm />
            <Footer />
        </div>
    );
};

export default Login;