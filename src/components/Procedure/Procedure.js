import React from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';

const Procedure = () => {
    const procedure = [
        { title: 'Search Best Online Professional', des: 'Search on your browser and Login', step: 1, key: 12 },
        { title: 'Get Instant Appointment', des: 'Take appoinment from our website and meet the doctor.', step: 2, key: 13 },
        { title: 'Leave Your Feedback', des: 'After taking services please give us feedback.', step: 3, key: 14 }
    ];
    return (
        <Container className='py-5'>
            <h1 className='text-center my-5'>How it <span className='text-info fw-bold'>Works?</span></h1>
            <Row>
                {
                    procedure.map(step => (
                        <Col md={12} key={step.key}>
                            <Card className='my-2' >
                                <Card.Body>
                                    <Card.Title className='fw-bold'>{step.title}</Card.Title>
                                    <Card.Text>
                                        {step.des}
                                    </Card.Text>
                                    <Button className='btn-info text-white'>Step {step.step}</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    );
};

export default Procedure;