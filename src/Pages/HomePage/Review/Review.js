import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Review = () => {
    const [images, setImages] = useState([]);
    useEffect(() => {
        fetch("./fakeData/imageGallery.json")
            .then(data => data.json())
            .then(result => setImages(result))
    }, [])

    return (
        <div className="py-5 bg-light">
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <Row className="row g-2">
                            {
                                images.map(image => <Col xs={4}><img src={image.image} alt="" className="img-fluid" /></Col>)
                            }
                        </Row>
                    </Col>
                    <Col xs={12} md={6}></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Review;