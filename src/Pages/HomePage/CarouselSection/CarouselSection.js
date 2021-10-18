import React from 'react';
import { Button, Carousel, Col, Container, Row } from 'react-bootstrap';
import './CarouselSection.css';

/**** Banner Images ****/
import banner1 from '../../../Images/home/banner1.jpg';
import banner2 from '../../../Images/home/banner2.jpg';


const CarouselSection = () => {
    return (
        <div>
            <Carousel className="carousel-container">
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src={banner1}
                        alt="First slide"
                    />
                    <Container>
                        <Carousel.Caption className="fw-bold text-start carousel-info">
                            <h1>We Take Care <br /> Your Healthy Life.</h1>
                            <Button className="button" variant=" bg-dark text-light ms-2">Make An Appointment</Button>
                        </Carousel.Caption>
                    </Container>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className="fw-bold text-start carousel-info">
                        <h1>Care Whenever <br />You Need It.</h1>
                        <Button className="button" variant=" bg-dark text-light ms-2">Make An Appointment</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <Container className="mb-5 shortcut-banner bg-light ">
                <Row>
                    <Col xs={12} lg={4} className="border p-5">
                        <div>
                            <div className="d-flex align-items-center flex-column">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#003638" className="bi bi-telephone-outbound" viewBox="0 0 16 16">
                                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z" />
                                </svg>
                                <h3 className="fw-bold ms-2 d-inline-block fs-4">Emergency Ambulance</h3>
                                <p>Call 415-201-6370 for Emergency Ambulance Service.</p>
                                <button className="btn btn-secondary fw-bold">Call Now</button>
                            </div>

                        </div>
                    </Col>
                    <Col xs={12} lg={4} className="border p-5">
                        <div>
                            <div className="d-flex align-items-center flex-column">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#003638" className="bi bi-calendar2-date" viewBox="0 0 16 16">
                                    <path d="M6.445 12.688V7.354h-.633A12.6 12.6 0 0 0 4.5 8.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23z" />
                                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z" />
                                    <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z" />
                                </svg>
                                <h3 className="fw-bold ms-2 d-inline-block fs-4">Make An Appointment</h3>
                                <p>Plase make an Appointment 3 days before. Also make sure to log in before.</p>
                                <button className="btn btn-secondary fw-bold">Make Appointment</button>
                            </div>

                        </div>
                    </Col>
                    <Col xs={12} lg={4} className="border p-5">
                        <div>
                            <div className="d-flex align-items-center flex-column">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#003638" className="bi bi-newspaper" viewBox="0 0 16 16">
                                    <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z" />
                                    <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z" />
                                </svg>
                                <h3 className="fw-bold ms-2 d-inline-block fs-4">Newsletter Pro</h3>
                                <p>Read Our Latest News and Case Studies. Sign Up to read Newsletter.</p>
                                <button className="btn btn-secondary fw-bold">Read Now</button>
                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CarouselSection;