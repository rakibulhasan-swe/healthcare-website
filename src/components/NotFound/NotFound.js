import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Navigation from '../Navigation/Navigation';
import errorPage from '../../images/404.jpg'
import Footer from '../Footer/Footer';

const NotFound = () => {
    return (
        <div>
            <Navigation slide={false} color='bg-info' />
            <Container>
                <Row>
                    <Col className='mx-auto' md={5}>
                    <img className='img-fluid' src={errorPage} alt="Error Page" />
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default NotFound;