import React from 'react';
import Doctors from '../Doctors/Doctors';
import FeaturedServices from '../FeaturedServices/FeaturedServices';
import Review from '../Review/Review';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div className="mt-5">
            <TopBanner></TopBanner>
            <FeaturedServices></FeaturedServices>
            <Doctors></Doctors>
            <Review></Review>
        </div>
    );
};

export default Home;