import React from 'react';
import { Col } from 'react-bootstrap';

const LatestNews = (props) => {
    const { title, writer, image, description } = props.caseStudy;
    return (
        <Col xs={11}>
            <div className="bg-light border d-lg-flex">
                <div>
                    <img src={image} alt="" width="200" />
                </div>
                <div className="ms-4">
                    <h4 className="text-success">{title}</h4>
                    <h6>{writer}</h6>
                    <p>{description} <a href="/" className="text-dark">Continue Reading</a></p>
                </div>
            </div>
        </Col>
    );
};

export default LatestNews;