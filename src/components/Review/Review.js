import React, { useEffect, useState } from "react";
import { Carousel, Container, Row } from "react-bootstrap";

const Review = () => {
  const [review, setReview] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("./review.json")
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <Container>
      <Row>
        <h1 className="text-center py-5 fw-bold"><span className='text-info' >Clients</span> Review</h1>
        <Carousel>
          {loading ? (
            <div className="spinner-border text-info mx-auto" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            review.map((el) => (
              <Carousel.Item Id="testimonial-carousel-item" key={el.userId} interval={1500}>
                <Carousel.Caption>
                    <img
                      className="d-block w-25 mx-auto rounded"
                      src={el.userImage}
                      alt="First slide"
                    />
                  <h3 className='text-dark fw-bold py-2'>{el.userName}</h3>
                  <p className='text-dark'>{el.body}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))
          )}
        </Carousel>
      </Row>
    </Container>
  );
};

export default Review;
