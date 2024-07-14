import React from 'react';

const ShowDishes = (props) => {
    const{serial, category, name, description, img, price, rate, stock} = props.dish;
    
    return (
    <section>
        <div id="dish-div" className='place-items-center bg-white'>
           <div>
              <img className='w-2/3 h-28' src={img} alt="" />
           </div>

        </div>
    </section>  
    );
};

export default ShowDishes;