import React, { useState } from 'react';
import '../../components/Dishes/ShowDishes.css';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa6';



const ShowDishes = (props) => {
    const{serial, category, name, description, img, price, rate, stock, oldprice, rating} = props.dish;

    
    return (
    <section>
        <div className='flex  flex-col  bg-white'>
           <div className='relative'>
              <div className='z-0'>
                 <img className='img-single mix-blend-lighten object-cover min-w-full h-[20vh]' src={img} alt="dish-img" />
              </div>
              <p className='dish-stock'>{stock}</p>
           </div>
           <div> 
               <div className='flex justify-center mt-8 text-[16px]'>
                  <Rating
                     placeholderRating={rate}
                     readonly
                     emptySymbol={<FaRegStar></FaRegStar>}
                     placeholderSymbol={<FaStar className='text-yellow-500'/>}
                     fullSymbol={<FaStar></FaStar>}
                     color
                  />

                  <span className='ml-2'>&#40;{rating}&#41;</span>
               </div>

               <div>
                  <h1 className='text-center text-[16px] font-bold'>{name}</h1>
                  <div className='flex justify-center'>
                     <p className='text-center mt-6  mr-4 text-[20px] font-bold'><span>$</span> <span>{price}</span></p>
                     <p className='text-center mt-6 text-lg line-through'><span>$</span>{oldprice}</p>
                  </div>
               </div>
           </div>
        </div>
    </section>  
    );
};

export default ShowDishes;