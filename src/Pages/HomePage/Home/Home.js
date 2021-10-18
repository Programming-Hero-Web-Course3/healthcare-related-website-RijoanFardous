import React from 'react';
import CarouselSection from '../CarouselSection/CarouselSection';
import Doctors from '../Doctors/Doctors';
import FeaturedServices from '../FeaturedServices/FeaturedServices';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div className="mt-5">
            <CarouselSection></CarouselSection>
            <FeaturedServices></FeaturedServices>
            <Doctors></Doctors>
            <Review></Review>
        </div>
    );
};

export default Home;