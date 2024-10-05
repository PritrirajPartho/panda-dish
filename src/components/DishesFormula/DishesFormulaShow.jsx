import React from 'react';

const DishesFormulaShow = (props) => {

    const{id, name, img, expression, text, viewer} = props.formula;
    
    let sliceText = text.slice(0, 20 );
    let sliceExpression = expression.slice(0, 25)
    
    return (
        <div className='overflow-hidden flex flex-col justify-center px-8'>
            <div>
                <div className='formula-img-div'>
                   <img src={img} alt="Formula IMG" />
                </div>
            </div>
            <div>
                <p className='mt-4 text-left font-poppins text-4xl md:text-2xl lg:text-xl font-semibold hover:text-orange-400'>{sliceExpression}...</p>
                <p className='mt-2 text-left font-poppins text-4xl md:text-2xl lg:text-xl'>{sliceText}...
                   <button className='text-blue-500'>Read more</button>
                </p>
            </div>      
        </div>
    );
};

export default DishesFormulaShow;