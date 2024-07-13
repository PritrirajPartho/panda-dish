import React from 'react';

const ShowDishes = (props) => {
    let dish = props.dish;

    return (
    <section>
        <div id="dishes-div">
            <h1>{dish.name}</h1>
        </div>
    </section>  
    );
};

export default ShowDishes;