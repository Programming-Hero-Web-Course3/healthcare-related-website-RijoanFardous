import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Review.css';

const Review = () => {
    const [images, setImages] = useState([]);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("./fakeData/imageGallery.json")
            .then(data => data.json())
            .then(result => setImages(result))
    }, []);

    useEffect(() => {
        fetch("./fakeData/reviews.json")
            .then(data => data.json())
            .then(result => setReviews(result))
    }, []);

    return (
        <div className="py-5 bg-light testomonial">
            <Container>
                <Row>
                    <Col xs={12} md={6} className="mb-4">
                        <h6>TESTOMONIALS!</h6>
                        <h1 className="fw-bold">See What People Say About Us.</h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} lg={6}>
                        {
                            reviews.map(review => <div className="d-flex mb-3">
                                <div className="py-3 reveiwer">
                                    <img src={review.image} alt="" />
                                </div>
                                <div className=" review-details py-3">
                                    <h5>{review.name}, {review.country}</h5>
                                    <p>{review.message}</p>
                                </div>
                            </div>)
                        }
                    </Col>
                    <Col xs={12} lg={5} className="ms-auto image-gallery">
                        <Row className="row g-2">
                            {
                                images.map(image => <Col xs={4}><img src={image.image} alt="" className="img-fluid" /></Col>)
                            }
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Review;