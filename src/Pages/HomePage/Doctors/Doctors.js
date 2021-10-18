import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';
import './Doctors.css';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('./fakeData/doctorsList.json')
            .then(data => data.json())
            .then(result => setDoctors(result))
    }, [])

    return (
        <div className="bg-light">
            <Container fluid className="doctors-background mb-4 mb-md-0 pb-5">
                <Container className="pt-5 text-white">
                    <Row>
                        <Col xs={12} md={5}>
                            <h6>MEET OUR TEAM!</h6>
                            <h1 className="fw-bold">Group Of Certified & Experienced Doctors</h1>
                        </Col>
                        <Col xs={12} md={7} className="mt-4 mt-md-0">
                            <p className="fs-5">Health Genic conducts the largest hospital-based research program in the United States, with an annual research budget of over $1 billionin 2019.</p>
                            <button className="btn btn-light mt-2">Appointment</button>
                        </Col>
                    </Row>
                    <Row className="row gx-3 mt-5">
                        {
                            doctors.map(doctor => <Doctor key={doctor.doctorID} doctor={doctor}></Doctor>)
                        }
                    </Row>
                </Container>
            </Container>


        </div >
    );
};

export default Doctors;