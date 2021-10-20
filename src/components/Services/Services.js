import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";

const Services = () => {
  const [service, setService] = useState([]);

  useEffect(() => {
    document.title = "Services Page";
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setService(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Navigation color='bg-info' />
      <Container>
        <Row>
          <h1 className="text-center py-5 fw-bold">Our <span className='text-info'>Services</span></h1>
          {!service ? (
            <div className="spinner-border text-info mx-auto   " role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            service.map((item, key) => (
              <Col lg={4} key={key} className="my-3 text-center">
                <Card className='shadow-effect'>
                  <Card.Img variant="top" src={item.serviceImage} />
                  <Card.Body>
                    <Card.Title className='fw-bold' >{item.serviceName}</Card.Title>
                    <Card.Text className="text">{item.serviceDesc}</Card.Text>
                    <Link to={`/service-details/${item.serviceName}/${item.serviceDesc}`} className="btn btn-info text-white fw-bold">Click For Details</Link>
                  </Card.Body>
                </Card>
              </Col>
            ))
          )}
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Services;
