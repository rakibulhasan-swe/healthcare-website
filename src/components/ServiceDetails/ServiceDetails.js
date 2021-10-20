import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";

const ServiceDetails = () => {
    const { name, description } = useParams();
    return (
        <>
            <Navigation color='bg-info' />
            <Container>
                <Row style={{ minHeight: "60vh" }} className="d-flex justify-content-center align-items-center">
                    <Col md={6} className="mx-auto">
                        <Card className="p-5 shadow">
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <Card.Text className="text">{description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
};

export default ServiceDetails;