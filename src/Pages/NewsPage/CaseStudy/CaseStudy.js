import React from 'react';
import { Col } from 'react-bootstrap';

const CaseStudy = (props) => {
    const { name, type, image, description } = props.caseStudy;
    return (
        <Col xs={12} md={6} lg={4}>
            <div className="bg-light border">
                <div>
                    <img src={image} alt="" className="img-fluid" />
                </div>
                <div className="p-4">
                    <div className="d-flex align-items-center">
                        <h3 className="fw-bold ms-2 d-inline-block fs-4">{name}, {type}</h3>
                    </div>
                    <p className="mt-2 ms-1">{description}</p>
                    <button className="btn btn-success">Continue Reading</button>
                </div>
            </div>
        </Col>
    );
};

export default CaseStudy;