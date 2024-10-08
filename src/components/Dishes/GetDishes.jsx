import React, { useEffect, useState } from 'react';
import ShowDishes from './ShowDishes';

const dishes_api = './dishes.json';

const GetDishes = () => {
    const[dishes, setDishes] = useState([]);
    const[tab, setTab] = useState(1);

    useEffect(() => {
      fetch(dishes_api)
        .then(res => res.json())
        .then(data => setDishes(data))
        .catch(err => console.log(err))
    }, []);

    // tab related functions or task
    const activeTab = tabNuber =>{
        setTab(tabNuber);
    }

    // filter data or dishes here
    const generallDishes = dishes.filter(dishbycategory => dishbycategory.category === 'Generall');
    const popularDishes = dishes.filter(dishbycategory => dishbycategory.category === 'Popular');
    const soupDishes =  dishes.filter(dishbycategory => dishbycategory.category === 'Soup');

    // continue a condition for data showing
    const data = tab === 1 ? generallDishes : tab === 2 ? popularDishes : tab === 3 ? soupDishes : null ;


    return (
    <div className='mt-[35px]  sm:mt-[60px]  md:mt-[100px] width-control-container'>
       <h1 className='mt-8  mb-4 text-5xl md:text-4xl lg:text-3xl  text-center font-poppins font-bold'>Our Dishes</h1>

       <div className='bg-gradient-to-r from-orange-50 to-orange-200'>
            <div className='flex justify-center  text-3xl sm:text-2xl'>
                <div className='font-poppins flex justify-between w-[55%] mt-10'>
                    <button onClick={ ()=> activeTab(1)}   className={tab === 1 ? 'responsive-active-link-border' : ''} >Generall</button>
                    <button onClick={ ()=> activeTab(2)}   className={tab === 2 ? 'responsive-active-link-border' : ''}>Popular</button>
                    <button onClick={ ()=> activeTab(3)}   className={tab === 3 ? 'responsive-active-link-border' : ''}>Soup &amp; Sauce</button>
                </div>
            </div>

            {/* Show data as well as */}

            <div className='responsive-grid-dishes'>
                {
                    data && data.map(dish => <ShowDishes key={dish.serial} dish={dish}></ShowDishes>)
                } 
            </div>
       </div>  
    </div>
    );
};

export default GetDishes;