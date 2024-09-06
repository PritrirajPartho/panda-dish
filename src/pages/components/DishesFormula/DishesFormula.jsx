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
        }
      };


    return (
        <section className='width-control-container mt-[100px]'>
            <h1 className='text-center mb-[40px] text-3xl font-poppins font-semibold'>Dishes Formula</h1>
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