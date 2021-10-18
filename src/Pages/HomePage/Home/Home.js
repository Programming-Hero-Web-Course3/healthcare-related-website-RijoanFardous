import React from 'react';
import FeaturedServices from '../FeaturedServices/FeaturedServices';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div className="mt-5">
            <TopBanner></TopBanner>
            <FeaturedServices></FeaturedServices>
        </div>
    );
};

export default Home;