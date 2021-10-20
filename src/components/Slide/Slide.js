import React from "react";
import { Carousel } from "react-bootstrap";
import slide1 from "../../images/slide1.jpeg";
import slide2 from "../../images/slide2.jpeg";
import slide3 from "../../images/slide3.jpeg";

const Slide = () => {
  return (
    <>
      <Carousel interval={3000} className="nav-carousel">
        <Carousel.Item className='bannerCarousel'>
          <img
            className="d-block w-100 carouselImage mx-auto"
            src={slide1}
            alt="First slide"
          />
          <Carousel.Caption className="nav-carousel-caption">
            <h4 className=" fw-bolder">DOCFIND</h4>
            <h1 className="display-2 fw-bolder">Find The Best <br />  Doctor Nearby You</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='bannerCarousel'>
          <img
            className="d-block w-100 carouselImage mx-auto"
            src={slide2}
            alt="Second slide"
          />

          <Carousel.Caption className="nav-carousel-caption">
            <h4 className=" fw-bolder">DOCFIND</h4>
            <h1 className="display-2 fw-bolder">Find The Best <br />  Doctor Nearby You</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='bannerCarousel'>
          <img
            className="d-block w-100 carouselImage mx-auto"
            src={slide3}
            alt="Third slide"
          />

          <Carousel.Caption className="nav-carousel-caption">
            <h4 className=" fw-bolder">DOCFIND</h4>
            <h1 className="display-2 fw-bolder">Find The Best <br />  Doctor Nearby You</h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Slide;
