import React from 'react';
import Experiences from '../components/Experiences/Experiences';
import Feature from '../components/Feature/Feature';
import Hero from '../components/Hero/Hero';
import Questions from '../components/Questions/Questions';
import Services from '../components/Services/Services';
import Testimonial from '../components/Testimonial/Testimonial';
const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Services></Services>
            <Experiences></Experiences>
            <Feature></Feature>
            <Questions></Questions>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;