import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ServiceDetail = (props) => {
    const { icon, image, name, description, doctor, fee } = props.service;
    return (
        <Col xs={12} md={6} lg={4} className="mx-auto">
            <div className="bg-light border">
                <div>
                    <img src={image} alt="" className="img-fluid" />
                </div>
                <div className="p-4">
                    <div className="d-flex align-items-center">
                        <img src={icon} alt="" width="36" />
                        <h4 className="fw-bold ms-2 d-inline-block fs-2">{name}</h4>
                    </div>
                    <p className="mt-2 ms-1 ms-md-2 ms-lg-3 ms-xl-5">{description}</p>
                    <h5 className="fw-bold ms-1 ms-md-2 ms-lg-3 ms-xl-5">Available Doctors - {doctor} Doctors</h5>
                    <h5 className="fw-bold ms-1 ms-md-2 ms-lg-3 ms-xl-5">Fee - & {fee}</h5>
                    <Link to="/appointment">
                        <button className="btn btn-secondary fw-bold ms-1 ms-md-2 ms-lg-3 ms-xl-5">Confirm Appointment</button>
                    </Link>
                </div>
            </div>
        </Col>
    )
};

export default ServiceDetail;