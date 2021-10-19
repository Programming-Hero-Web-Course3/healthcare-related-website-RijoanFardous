import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AppointConfirm = () => {
    return (
        <div style={{ marginTop: "80px" }}>
            <div style={{ height: "150px", backgroundColor: "#003638" }}>

            </div>
            <Container>
                <Row>
                    <Col className="mx-auto text-center bg-light p-4 fw-bold" xs={11} style={{ height: "150px", marginTop: "-70px" }}>
                        <h2>Your Appointment is Confirmed.</h2>
                        <h5>Thank You</h5>
                        <Link to="/home" className="btn btn-success">Go Back</Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AppointConfirm;