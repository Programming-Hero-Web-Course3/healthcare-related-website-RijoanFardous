import React from 'react';
import { Col } from 'react-bootstrap';

const Service = (props) => {
    const { icon, image, name, description } = props.service;
    return (
        <Col xs={12} md={6} lg={4}>
            <div className="bg-light border">
                <div>
                    <img src={image} alt="" className="img-fluid" />
                </div>
                <div className="p-4">
                    <div className="d-flex align-items-center">
                        <img src={icon} alt="" width="36" />
                        <h3 className="fw-bold ms-2 d-inline-block fs-4">{name}</h3>
                    </div>
                    <p className="mt-2 ms-1 ms-md-2 ms-lg-3 ms-xl-5">{description}</p>
                    <button className="btn btn-secondary fw-bold ms-1 ms-md-2 ms-lg-3 ms-xl-5">Learn More</button>
                </div>
            </div>
        </Col>
    )
}

export default Service;