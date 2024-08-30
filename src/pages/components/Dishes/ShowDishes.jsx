import React, { useState } from 'react';
import '../../components/Dishes/ShowDishes.css';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa6';
import { FaEye, FaHeart, FaShoppingCart } from 'react-icons/fa';



const ShowDishes = (props) => {
    const{serial, category, name, description, img, price, rate, stock, oldprice, rating} = props.dish;

    
    return (
    <section className='card-section mb-16 hover:scale-105 duration-500'>
        <div className='flex flex-col bg-white'>
           <div className='relative card-img'>
              <div className='z-0'>
                 <img className=' object-cover min-w-full h-[30vh]' src={img} alt="dish-img" />
              </div>

              <p className='dish-stock stock font-poppins '>{stock}</p>

              <div className='hide-element grid grid-cols-3 gap-x-10 absolute transform -translate-x-1/2 -translate-y-1/2  top-1/2 left-1/2'>
                  <p className=' background icon-effect'><FaEye></FaEye></p>
                  <p className=' background  icon-effect'><FaShoppingCart></FaShoppingCart></p>
                  <p className='background text-red-500 hover:text-white icon-effect'><FaHeart></FaHeart></p>
              </div>
           </div>

           <div className='card-hover-structure pb-8'> 
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

               <div className='font-agdasima'>
                  <h1 className='text-center text-xl font-bold'>{name}</h1>
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