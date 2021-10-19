import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Appointment.css';
import logo from '../../Images/logo.png';
import { useForm } from "react-hook-form";
import { NavLink } from 'react-router-dom';

const Appointment = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => { console.log(data) }

    return (
        <Container fluid className="appointment-container mt-5">
            <Container>
                <Row>
                    <Col md={12} lg={5} className="mt-3 mt-lg-0 p-3 p-lg-5 bg-light ms-auto">
                        <Row>
                            <Col xs={5}>
                                <img src={logo} alt="" className="img-fluid" />
                            </Col>
                            <Col xs={7} className="d-flex align-items-center justify-content-end">
                                <h2 className="fw-bold ms-lg-4 text-right">Appointment</h2>
                            </Col>
                        </Row>
                        <h6 className="mb-5 ms-lg-4">Please Fill Up This Form.</h6>


                        {/* Sign Up With Email Form */}
                        <form onSubmit={handleSubmit(onSubmit)} className="mt-3 mt-lg-4">

                            <label htmlFor="name" className="fw-bold">Name*</label>
                            <input className="input-field" type="text" {...register("name", { required: true })} placeholder="Your Name" />
                            {errors.name && <p className="text-danger input-error-message">This field is required</p>}

                            <label htmlFor="email" className="fw-bold">Email*</label>
                            <input className="input-field" type="email" {...register("email", { required: true })} placeholder="example@email.com" />
                            {errors.email && <p className="text-danger input-error-message">This field is required</p>}

                            <label htmlFor="phone" className="fw-bold">Phone</label>
                            <input className="input-field" type="number" {...register("phone")} placeholder="+541564515415" />

                            <label htmlFor="dept" className="fw-bold">Department*</label>
                            <select className="input-field" {...register("dept", { required: true })}>
                                <option value="Cardiology">Cardiology</option>
                                <option value="Hematology">Hematology</option>
                                <option value="Gastroenterology">Gastroenterology</option>
                                <option value="Ophthalmology">Ophthalmology</option>
                                <option value="Neurology">Neurology</option>
                                <option value="Orthopedics">Orthopedics</option>
                            </select>
                            {errors.dept && <p className="text-danger input-error-message">This field is required</p>}

                            <label htmlFor="date" className="fw-bold">Date*</label>
                            <input className="input-field" type="date" {...register("date", { required: true })} placeholder="Select a date" />
                            {errors.date && <p className="text-danger input-error-message">This field is required</p>}

                            <NavLink to="/appoint-confirmed"><button type="submit" className="btn-signInMethod signup-submit">Confirm Appointment</button></NavLink>
                        </form>
                    </Col>
                </Row>
            </Container>
        </Container >
    )
};

export default Appointment;