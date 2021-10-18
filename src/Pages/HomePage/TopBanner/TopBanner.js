import React from 'react';
import { Container } from 'react-bootstrap';
import './TopBanner.css';
import bannerImage from '../../../Images/home/top-banner.png';
const TopBanner = () => {
    return (
        <div>
            <Container fluid>
                <img src={bannerImage} className="banner-image" alt="" />
            </Container>
        </div>
    );
};

export default TopBanner;