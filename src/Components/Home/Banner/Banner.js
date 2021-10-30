import React from "react";
import "./Banner.css";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 banner"
          src="https://kodeforest.com/wp-demo/travel/wide/wp-content/uploads/revslider/homeslider/bg_1.jpg"
          alt="First slide"
          height="100vh"
        />
        <Carousel.Caption className="text-dark">
          <h1 className="fs-1 fw-bold">Are You Looking For Holiday?</h1>
          <h4>Then you are in the right place.</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 banner"
          src="https://i.ibb.co/bb0MGxZ/photo-1570125909517-53cb21c89ff2.jpg"
          alt="Second slide"
          height="100vh"
        />
        <Carousel.Caption className="text-info bg-dark rounded">
          <h3 className="fs-1 fw-bold">Plan Your Road Trip</h3>
          <h5>Around The Globe</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 banner"
          src="https://i.ibb.co/bJsmR5R/photo-1541300613939-71366b37c92e.jpg"
          alt="Third slide"
          height="100vh"
        />
        <Carousel.Caption className="text-info bg-dark rounded">
          <h3 className="fs-1 fw-bold">Winter Tour</h3>
          <h5>Himalaya is the best place for winter.Lets go!!!</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 banner"
          src="https://images.unsplash.com/photo-1598890777032-bde835ba27c2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHRvdXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="Third slide"
          height="100vh"
        />
        <Carousel.Caption className="text-info bg-dark rounded">
          <h3 className="fs-1 fw-bold">Plan Your Boat Trip</h3>
          <h5>It will be the best option for you, if you are couple.</h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
