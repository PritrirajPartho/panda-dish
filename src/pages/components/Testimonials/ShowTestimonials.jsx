import React from 'react';
import '../Testimonials/ShowTestimonials.css';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa6';

const ShowTestimonials = (props) => {

const{img, name, rating, experience, text} = props.testimonial;

    return (
      <div>
         <div className='testimonial-container px-[10px] sm:px-0 lg:mr-16 mb-8 overflow-clip'>
            <div>
               <div className='review-img-div'>
                  <img    src={img} alt="" />
               </div>
               <p className='truncate text-center font-agufina font-extrabold text-3xl sm:text-2xl mt-1'>{name}</p>
            </div>
            <div className='px-10 md:pr-10'>
               <p className='text-2xl sm:text-xl text-center md:text-left'>
                  <Rating
                           placeholderRating={rating}
                           readonly
                           emptySymbol={<FaRegStar></FaRegStar>}
                           placeholderSymbol={<FaStar className='text-yellow-500'/>}
                           fullSymbol={<FaStar></FaStar>}
                           color
                  />
                  <span className='ml-2'>	&#40;{rating}&#41;</span>
               </p>
               <p className='text-center font-poppins text-2xl sm:text-xl mt-1 sm:mt-1 md:mt-3'>{text}</p>
               <p className='font-poppins text-justify text-[8px] sm:text-xl sm:mt-xl mt-1 sm:mt-3'><strong className='mr-2 '>Experience:</strong><span>{experience}</span></p>
            </div>
         </div>
      </div>
    );
};

export default ShowTestimonials;