import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FeaturedService from '../FeaturedService/FeaturedService';
import './FeaturedServices.css';

const FeaturedServices = () => {
    const [fServices, setFService] = useState([]);
    useEffect(() => {
        fetch('./fakeData/featuredServices.json')
            .then(data => data.json())
            .then(result => setFService(result))
    }, [])
    return (
        <div>
            <Container fluid className="f-service-background mb-4 mb-md-0">
                <Container className="pt-5 text-white f-service-background2">
                    <Row>
                        <Col xs={12} md={5}>
                            <h5>BEST CARE!</h5>
                            <h1 className="fw-bold">Our Best Services <br />By Patients</h1>
                        </Col>
                        <Col xs={12} md={7} className="mt-4 mt-md-0">
                            <p className="fs-5">Health Genic is a Registered Charity under the Charities Acts and is administered and managed in accordance with a Hospital Constitution approved by the Charities Regulatory Authority.</p>
                            <Link to="/services"><button className="btn btn-light mt-2">View all Services</button></Link>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container className="featured-container">
                <Row className="row g-4">
                    {
                        fServices.map(fService => <FeaturedService key={fService.id} service={fService}></FeaturedService>)
                    }
                </Row>
            </Container>
            <div className="bg-light service-background"></div>
        </div>
    );
};

export default FeaturedServices;