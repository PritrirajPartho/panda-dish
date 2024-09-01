import React from 'react';
import '../Testimonials/ShowTestimonials.css';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa6';

const ShowTestimonials = (props) => {

const{id, img, name, rating, experience, text} = props.testimonial;

    return (
      <div className='flex gap-10 justify-center items-center max-w-[90%] border-2 border-red-600'>
         <div className='max-w-full'>
            <img className='max-w-[180%] h-[6rem]'   src={img} alt="" />
            <p>{name}</p>
         </div>
         <div>
            <p>
               <Rating
                        placeholderRating={rating}
                        readonly
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar className='text-yellow-500'/>}
                        fullSymbol={<FaStar></FaStar>}
                        color
               />
               <span>{rating}</span>
            </p>
            <p>{text}</p>
         </div>
      </div>
    );
};

export default ShowTestimonials;