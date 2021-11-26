import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import Contact from './Components/Contact/Contact';
import Hero from './Components/Hero/Hero';
import Offers from './Components/Offers/Offers';
import Reviews from './Components/Reviews/Reviews';
import Plants from './Components/Services/Plants';

const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Offers />
            <Plants numberOfCards={6} />
            <Reviews />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;