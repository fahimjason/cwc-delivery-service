import React from 'react';
import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header';
import HomeMain from '../../components/Home/HomeMain';
import Services from '../../components/Services/Services';

const Home = () => {
    return (
        <div>
            <Header />
            <HomeMain />
            <Services />
            <Footer />
        </div>
    );
};

export default Home;