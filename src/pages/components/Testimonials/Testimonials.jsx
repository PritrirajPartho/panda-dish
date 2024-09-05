import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import ShowTestimonials from './ShowTestimonials';

const testimonials_api = '../../../../public/review.json';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



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
      dots: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 3000,
      cssEase: "linear"
    };

    return (
    <section className='width-control-container'>
      <h1 className='text-center mb-[40px] text-3xl font-poppins font-bold'>Testimonials</h1>
      <div>
        <Slider {...settings} >
            {
              testimonials.map(testimonial => 
                <ShowTestimonials  key={testimonial.id} testimonial={testimonial}>
                </ShowTestimonials>
              )
            }
        </Slider>
      </div>
    </section>
      );
};

export default Testimonilas;