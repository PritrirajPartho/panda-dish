import React from 'react';
// import '../Testimonials/ShowTestimonials.css';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa6';

const ShowTestimonial = (props) => {

const{img, name, rating, experience, text} = props.testimonial;

    return (
         <div className='testimonial-container px-6'>
            <div>
               <div className='review-img-div'>
                  <img    src={img} alt="" />
               </div>
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
                  <span>	&#40;{rating}&#41;</span>
               </p>
               <p>{text}</p>
               <p><strong>Experience:</strong><span>{experience}</span></p>
            </div>
         </div>
    );
};

export default ShowTestimonial;