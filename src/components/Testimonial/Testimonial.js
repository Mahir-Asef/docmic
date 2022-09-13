import React from 'react';
import './Testimonial.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SingleCard from '../SingleCard/SingleCard';
const Testimonial = () => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <div className='container my-5'>
          <p className='secondary text-center'> Testimonial </p>
          <p className='text-dark text-center tes-text'> What they say? </p>
          <Slider {...settings} className="slider">
          
         {
          [...new Array(6)].map((element,index)=> <SingleCard serial={index} key={index}/>)
         }
        </Slider>
        </div>
      );
};

export default Testimonial;