import React from 'react';

const ShowTestimonials = (props) => {

const{id, img, name, rating, experience, text} = props.testimonial;

    return (
      <div>
         <div>
            <img src={img} alt="" />
         </div>
         <div>

         </div>
      </div>
    );
};

export default ShowTestimonials;