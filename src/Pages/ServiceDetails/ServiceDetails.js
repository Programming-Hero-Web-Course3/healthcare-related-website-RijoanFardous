import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import ServiceDetail from './ServiceDetail';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const services = [
        {
            id: 1,
            image: "https://i.ibb.co/bWsjt0j/neurologist.jpg",
            icon: "https://i.ibb.co/tKz3HhV/neurology.png",
            name: "Neurology",
            description: "Neurology is the branch of medicine concerned with the study and treatment of disorders of the nervous system.",
            doctor: 37,
            fee: 650
        },
        {
            id: 2,
            image: "https://i.ibb.co/z71KQpR/orthopedic.jpg",
            icon: "https://i.ibb.co/xJhdw4h/orthopedic.png",
            name: "Orthopedics",
            description: "Orthopaedic surgery or orthopaedics, is the branch of surgery concerned with conditions involving the musculoskeletal system.",
            doctor: 33,
            fee: 500
        },
        {
            id: 3,
            image: "https://i.ibb.co/swVfST8/cardiologist.jpg",
            icon: "https://i.ibb.co/Q67vYdW/cardiology.png",
            name: "Cardiology",
            description: "Cardiology is a branch of medicine that deals with the disorders of the heart as well as some parts of the circulatory system.",
            doctor: 25,
            fee: 999
        },
        {
            id: 4,
            image: "https://i.ibb.co/5sxxBm3/hematologist.jpg",
            icon: "https://i.ibb.co/pnQft2H/hematology.png",
            name: "Hematology",
            description: "Hematology is the branch of medicine concerned with the study of the cause, treatment, prevention of diseases related to blood.",
            doctor: 19,
            fee: 780
        },
        {
            id: 5,
            image: "https://i.ibb.co/WsnRjbk/Gastroenterologist.jpg",
            icon: "https://i.ibb.co/MfbkxVH/gastroenterology.png",
            name: "Gastroenterology",
            description: "Gastroenterology is the branch of medicine focused on the digestive system and its disorders. Diseases affecting tract.",
            doctor: 21,
            fee: 400
        },
        {
            id: 6,
            image: "https://i.ibb.co/fxtbm87/Ophthalmology.jpg",
            icon: "https://i.ibb.co/TkBRP6m/Ophthalmology.png",
            name: "Ophthalmology",
            description: "Ophthalmology is a branch of medicine and surgery that deals with the diagnosis and treatment of disorders of the eye.",
            doctor: 12,
            fee: 900
        }
    ];
    return (
        <div style={{ marginTop: "100px" }}>
            <Container>
                <Row>
                    <Col xs={12} md={5}>
                        <h5>BEST CARE!</h5>
                        <h1 className="fw-bold">Our A.I Will Choose The Best Doctor Available For You.</h1>
                    </Col>
                    <Col xs={12} md={7} className="mt-4 mt-md-0">
                        <p className="fs-5">Health Genic is a Registered Charity under the Charities Acts and is administered and managed in accordance with a Hospital Constitution approved by the Charities Regulatory Authority.</p>
                    </Col>
                </Row>

            </Container>
            {
                services.filter(service => service.id === parseInt(serviceId)).map(service => <ServiceDetail key={service.id} service={service}></ServiceDetail>)
            }

        </div>
    );
};

export default ServiceDetails;