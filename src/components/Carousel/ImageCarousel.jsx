import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import img1 from '../../images/img1.jpg'; // Import the images
import img2 from '../../images/img2.jpg';
import img3 from '../../images/img3.jpg';
import './ImageCarousel.css';

const ImageCarousel = () => {
  return (
    <Carousel showThumbs={false} infiniteLoop autoPlay>
      <div>
        <img src={img1} alt="NA" className="carousel-image" />
        <p className="carousel-caption">Outdoor activities health services</p>
      </div>
      <div>
        <img src={img2} alt="NA" className="carousel-image" />
        <p className="carousel-caption">International graded campus </p>
      </div>
      <div>
        <img src={img3} alt="NA" className="carousel-image" />
        <p className="carousel-caption">Women Empowerment our top Priority</p>
      </div>
    </Carousel>
  );
};

export default ImageCarousel;
