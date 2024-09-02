import React from 'react';
import '../Testimonials/ShowTestimonials.css';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa6';

const ShowTestimonials = (props) => {

const{id, img, name, rating, experience, text} = props.testimonial;

    return (
      <div>
         <div className='testimonial-container mr-20 mb-14'>
            <div>
               <div className='review-img-div'>
                  <img    src={img} alt="" />
               </div>
               <p className='truncate text-center font-agufina font-extrabold text-xl mt-1'>{name}</p>
            </div>
            <div>
               <p className='text-xl'>
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
               <p className='text-justify font-poppins text-xl mt-3'>{text}</p>
               <p className='font-poppins text-justify text-xl mt-3'><strong className='mr-2 '>Experience:</strong><span>{experience}</span></p>
            </div>
         </div>
      </div>
    );
};

export default ShowTestimonials;