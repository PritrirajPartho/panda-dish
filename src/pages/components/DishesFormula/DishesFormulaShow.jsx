import React from 'react';

const DishesFormulaShow = (props) => {

    const{id, name, img, expression, text, viewer} = props.formula;
    
    let sliceText = text.slice(0, 20 );
    let sliceExpression = expression.slice(0, 30)
    
    return (
        <div className='relative overflow-hidden flex flex-col justify-center mx-auto w-[90%] h-[400px]'>
            <div className='relative '>
                <div className='absolute -bottom-14 formula-img-div'>
                   <img src={img} alt="Formula IMG" />
                </div>
            </div>
            <div className='absolute top-64 mt-6 px-2'>
                <p className='text-left font-poppins text-xl font-semibold hover:text-orange-400'>{sliceExpression}...</p>
                <p className='relative text-left font-poppins text-xl mt-2'>{sliceText}......
                   <button className='text-blue-500'>Read more</button>
                </p>
            </div>      
        </div>
    );
};

export default DishesFormulaShow;