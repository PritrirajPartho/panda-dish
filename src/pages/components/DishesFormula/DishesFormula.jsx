import React, { useState,useEffect } from 'react';
import Slider from "react-slick";
import DishesFormulaShow from './DishesFormulaShow';

// react-slick stylesheets
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const dishesformula_api = './dishesformula.json';


const DishesFormula = () => {

    const[dishesformula, setDishesFormula] = useState([]);

    useEffect(() => {
      fetch(dishesformula_api)
        .then(res => res.json())
        .then(data => setDishesFormula(data))
        .catch(err => console.log(err))
    }, []);


    // slider making with react-slick
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      swipeToSlide: true,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      },
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };


    return (
        <section className='width-control-container mt-[50px] sm:mt-[70px] md:mt-[100px] px-4 md:px-8'>
            <h1 className='text-center mb-[40px] text-5xl md:text-4xl lg:text-3xl font-poppins font-semibold'>Dishes Formula</h1>
             <div  className="slider-container mx-auto">
                <Slider className='bg-black' {...settings}>
                   {
                    dishesformula.map(formula => <DishesFormulaShow key={formula.id} formula={formula} ></DishesFormulaShow>)
                   }
                </Slider>
             </div>
        </section>
    );
};

export default DishesFormula;