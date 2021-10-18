import React from 'react';
import { Col } from 'react-bootstrap';
import './Doctor.css';

const Doctor = (props) => {
    const { doctorID, name, image, department } = props.doctor;
    const numId = parseInt(doctorID) < 4 ? true : false;

    return (
        <Col xs={6} md={4} className="mt-2">
            {
                numId ?
                    <div>
                        <div className="doctor mx-auto mx-lg-0">
                            <div className="doc-image rounded-circle">
                                <img src={image} alt="" className="rounded-circle" />
                            </div>
                            <div className="doctor-text">
                                <h5 className="fw-bold text-center">{name}</h5>
                                <p className="fw-bold text-center">{department}</p>
                            </div>
                        </div >
                    </div> :
                    <div className="d-lg-flex justify-content-end">
                        <div className="doctor mx-auto mx-lg-0">
                            <div className="doc-image rounded-circle">
                                <img src={image} alt="" className="rounded-circle" />
                            </div>
                            <div className="doctor-text">
                                <h5 className="fw-bold text-center">{name}</h5>
                                <p className="fw-bold text-center">{department}</p>
                            </div>
                        </div >
                    </div>
            }
        </Col >
    );
};

export default Doctor;