import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";

const Contact = () => {
  document.title="Contact us";
  return (
    <>
    <Navigation slide={false} color='bg-info' />
      <Container className="pt-5">
        <Row className="pt-5">
          <Col md={6} className="mx-auto border p-5 rounded">
            <h3 className="text-center mt-3 text-info text-bold">Contact us</h3>
            <Form>
              <Form.Group controlId="formBasicName">
                <Form.Label className='fw-bold'>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  required
                  name="name"
                />
                <Form.Text className="text-muted"> </Form.Text>
              </Form.Group> <br />

              <Form.Group controlId="formBasicEmail">
                <Form.Label className='fw-bold'>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  required
                  name="email"
                />
                <Form.Text className="text-muted"> </Form.Text>
              </Form.Group> <br />

              <Form.Group controlId="formBasicTextarea">
                <Form.Label className='fw-bold'>Message</Form.Label>
                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="Enter comment"
                  required
                  name="message"
                ></textarea>
              </Form.Group>
              <button className="btn btn-info w-100 mt-2 fw-bold text-white" type="submit">
                Submit
              </button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Contact;
