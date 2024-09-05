import React from 'react';

const DishesFormulaShow = (props) => {

    const{id, name, img, expression, text, viewer} = props.formula;
    
    let sliceText = text.slice(0, 20 );
    let sliceExpression = expression.slice(0, 20)
    
    return (
        <div className='overflow-hidden flex flex-col justify-center mx-auto w-[90%] h-[400px]'>
            <div>
                <div className='formula-img-div'>
                   <img src={img} alt="Formula IMG" />
                </div>
            </div>
            <div className='mt-6 px-2'>
                <p className='text-left font-poppins text-xl font-semibold hover:text-orange-400'>{expression}</p>
                <p className='relative text-left font-poppins text-xl mt-2'>{sliceText}......
                   <button className='absolute right-2 text-blue-500'>Read more</button>
                </p>
            </div>      
        </div>
    );
};

export default DishesFormulaShow;