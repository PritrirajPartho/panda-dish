import React from 'react';
import '../Testimonials/ShowTestimonials.css';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa6';

const ShowTestimonial = (props) => {

const{img, name, rating, experience, text} = props.testimonial;
let SlicedText = text.slice(0, 105);


    return (
         <div className='testimonial-container px-6'>
            <div>
               <div className='review-img-div'>
                  <img    src={img} alt="" />
               </div>
               <p className='text-3xl xl:text-2xl mt-1 sm:mt-2 md:mt-3 font-agufina text-center font-semibold'>{name}</p>
            </div>

            <div className='lg:px-2'>
               <p className='text-center  mb-3'>
                  <Rating
                           placeholderRating={rating}
                           readonly
                           emptySymbol={<FaRegStar></FaRegStar>}
                           placeholderSymbol={<FaStar className='text-yellow-500'/>}
                           fullSymbol={<FaStar></FaStar>}
                           color
                  />
                  <span>	&#40;{rating}&#41;</span>
               </p>
               <p className='text-center  text-3xl xl:text-xl'>{SlicedText}....</p>
               <p className='text-center mt-2  text-3xl xl:text-xl'><strong >Experience:</strong><span className='ms-2'>{experience}</span></p>
            </div>
         </div>
    );
};

export default ShowTestimonial;