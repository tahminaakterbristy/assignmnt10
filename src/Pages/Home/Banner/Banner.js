import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../Images/banner/banner-1.png'
import banner2 from '../../../Images/banner/banner-2.png'
import banner3 from '../../../Images/banner/banner-3.png'
const Banner = () => {
    return (
        <div>
          <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption>
    <h1 className="text-white fw-bolder ">Your health is </h1>
        <h3 className="text-secondary">our priority</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />

    <Carousel.Caption>
    <h1 className="text-white fw-bolder ">Your health is </h1>
        <h3 className="text-secondary">our priority</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h1 className="text-white fw-bolder ">Your health is </h1>
        <h3 className="text-secondary">our priority</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        
        </div>
    );
};

export default Banner;