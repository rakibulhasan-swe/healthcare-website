import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";

const ServiceHome = ({ item }) => {
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => {
        setService(data.slice(0, item));
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
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
                    <Card.Title className='fw-bold'>{item.serviceName}</Card.Title>
                    <Card.Text className="text">{item.serviceDesc}</Card.Text>
                    <Link to={`/service-details/${item.serviceName}/${item.serviceDesc}`} className="btn btn-info text-white fw-bold">Click For Details</Link>
                  </Card.Body>
                </Card>
              </Col>
            ))
          )}
        </Row>
        <Row>
          <Link className="w-25 mx-auto btn btn-info fw-bold text-white" to="/services">
            See more services
          </Link> 
        </Row>
      </Container>
    </>
  );
};

export default ServiceHome;
