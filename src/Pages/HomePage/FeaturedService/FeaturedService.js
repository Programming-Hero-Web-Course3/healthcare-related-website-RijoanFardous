import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FeaturedService = (props) => {
    const { id, icon, image, name, description } = props.service;
    return (
        <Col xs={11} md={6} lg={4} className="mx-auto">
            <div className="bg-light fea-service border">
                <div className="p-4">
                    <div className="d-flex align-items-center">
                        <img src={icon} alt="" width="36" />
                        <h3 className="fw-bold ms-2 d-inline-block fs-4">{name}</h3>
                    </div>
                    <p className="mt-2 ms-1 ms-md-2 ms-lg-3 ms-xl-5">{description}</p>
                    <Link to={`/service/${id}`}>
                        <button className="btn btn-secondary fw-bold ms-1 ms-md-2 ms-lg-3 ms-xl-5">Learn More</button>
                    </Link>
                </div>
                <div>
                    <img src={image} alt="" className="img-fluid" />
                </div>
            </div>
        </Col>
    );
};

export default FeaturedService;