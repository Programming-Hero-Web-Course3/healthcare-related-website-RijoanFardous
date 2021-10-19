import React from 'react';
import { useParams } from 'react-router';
import './Appointment.css';

const Appointment = () => {
    const { serviceId } = useParams();
    return (
        <div className="appointment-container">
            <h1>This is an appointment {serviceId}</h1>
        </div>
    );
};

export default Appointment;