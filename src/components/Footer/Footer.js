import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const Footer = () => {
  return (
    <footer className="container-fluid mt-5 bg-info">
      <Row className="py-5">
        <Col md={3}>
          <Link to="/">
          <img src={logo} alt="logo" />
          </Link>
          <p className='mt-3 lh-base'>This is the best healthcare service provider in Canada. To get any update connect with us.</p>
        </Col>
        <Col md={3} className='px-5'>
          <h4 className='fw-bold text-white'>Useful Links</h4>
          <ul className="list-group list-group-flush">
            <li className="btn btn-info text-start">Home</li>
            <li className="btn btn-info text-start">Doctors</li>
            <li className="btn btn-info text-start">Services</li>
            <li className="btn btn-info text-start">Contact us</li>
          </ul>
        </Col>
        <Col md={3}>
          <h4 className='fw-bold text-white'>Subscribe</h4>
          <form>
            <div className="mb-3">
              <label>
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <button type="submit" className="btn btn-dark">
              Subscribe
            </button>
          </form>
        </Col>
        <Col md={3}></Col>
      </Row>
      <p className="text-center">&copy; 2021 Copyright: Rakibul Hasan</p>
    </footer>
  );
};

export default Footer;
