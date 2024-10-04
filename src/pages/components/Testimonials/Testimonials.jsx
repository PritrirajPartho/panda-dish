import React from "react";
import { useEffect, useState } from 'react';
import Slider from "react-slick";
import ShowTestimonial from "./ShowTestimonial";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials_api = './review.json';


const Testimonilas = () => {

    const[testimonials, setTestimonials] = useState([])

    // load testimonials or review data
    useEffect(() => {
        fetch(testimonials_api)
        .then(res => res.json())
        .then(data => setTestimonials(data))
        .catch(err => console.log(err))
    }, []);

    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 2,
      swipeToSlide: true,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      },
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 950,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
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
    <section className='width-control-container'>
      <h1 className='text-center text-4xl mb-[40px] mt-5 md:mt-10  font-poppins font-bold'>Testimonials</h1>
      <div>
        <Slider {...settings} >
            {
              testimonials.map(testimonial => 
                <ShowTestimonial  key={testimonial.id} testimonial={testimonial}>
                </ShowTestimonial>
              )
            }
        </Slider>
      </div>
    </section>
      );
};

export default Testimonilas;