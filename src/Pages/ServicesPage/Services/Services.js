import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./fakeData/allServices.json')
            .then(data => data.json())
            .then(result => setServices(result))
    }, []);

    return (
        <div>
            <Container fluid className="f-service-background mb-4 mb-md-0">
                <Container className="pt-5 text-white f-service-background2">
                    <Row>
                        <Col xs={12} md={5}>
                            <h5>BEST CARE!</h5>
                            <h1 className="fw-bold">All of Our Services</h1>
                        </Col>
                        <Col xs={12} md={7} className="mt-4 mt-md-0">
                            <p className="fs-5">Health Genic is a Registered Charity under the Charities Acts and is administered and managed in accordance with a Hospital Constitution approved by the Charities Regulatory Authority.</p>
                        </Col>
                    </Row>
                    <Row className="mt-5 text-center row gx-3">
                        <Col xs={6} md={3} className="p-5 shadow-sm">
                            <h2><svg xmlns="http://www.w3.org/2000/svg" className="hero-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                            </svg> 540+</h2>
                            <h5>Expert Doctors</h5>
                        </Col>
                        <Col xs={6} md={3} className="p-5 shadow-sm">
                            <h2><svg xmlns="http://www.w3.org/2000/svg" className="hero-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg> 125K+</h2>
                            <h5>Happy Patients</h5>
                        </Col>
                        <Col xs={6} md={3} className="p-5 shadow-sm">
                            <h2><svg xmlns="http://www.w3.org/2000/svg" className="hero-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                            </svg> 10+</h2>
                            <h5>Departments</h5>
                        </Col>
                        <Col xs={6} md={3} className="p-5 shadow-sm">
                            <h2><svg xmlns="http://www.w3.org/2000/svg" className="hero-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg> 25+</h2>
                            <h5>Branches</h5>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container className="all-services">
                <Row className="row gy-4">
                    {
                        services.map(service => <Service key={service.id} service={service}></Service>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Services;