import React, { useState,useEffect } from 'react';
// import imgf from '../../../assets/img/person-four.jfif';
import Slider from "react-slick";
import DishesFormulaShow from './DishesFormulaShow';


const dishesformula_api = '../../../../public/dishesformula.json';
// const dishesformula_api = '../../../../public/dishesformula.json';


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
        <section className='width-control-container '>
            <h1 className='text-center mb-16 text-3xl font-poppins font-semibold'>Dishes Formula</h1>
             <div  className="slider-container gap-6">
                <Slider {...settings}>
                   {
                    dishesformula.map(formula => <DishesFormulaShow key={formula.id} formula={formula} ></DishesFormulaShow>)
                   }
                </Slider>
             </div>
        </section>
    );
};

export default DishesFormula;