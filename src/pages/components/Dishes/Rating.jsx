import React from 'react';
import { FaStar, FaStarHalf } from "react-icons/fa6";
import { AiOutlineStar } from 'react-icons/ai';
import './Rating.css';


const Rating = stars => {
   const  ratingStar = Array.from({length:5}, (element, index) => {
      let number = index + 0.5;

      return (
        <span key={index}>
         {
           stars >= index + 1 ? (<FaStar className='icon'/>) : 
           stars >= number ? ( <FaStarHalfAlt className='icon' />) : 
           (<AiOutlineStar className='icon' />)
         }
        </span> 

    )
 });

    return (
            <div className="icon-style">
                {ratingStar}
            </div>
    );
};

export default Rating;