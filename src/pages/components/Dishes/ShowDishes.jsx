import React from 'react';

const ShowDishes = (props) => {
    let dish = props.dish;

    return (
    <section>
        <div id="dish-div">
            <h1>{dish.category}</h1>
        </div>
    </section>  
    );
};

export default ShowDishes;