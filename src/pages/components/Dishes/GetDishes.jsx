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
    <div className='mt-[100px] width-control-container'>
       <h1 className='mt-8  mb-4  text-3xl text-center font-poppins'>Our Dishes</h1>

       <div className='bg-orange-50'>
            <div className='flex justify-center text-2xl'>
                <div className='font-poppins border-2 border-black-200 flex justify-between w-[55%] mt-10'>
                    <button onClick={ ()=> activeTab(1)}   style={{borderBottom: tab === 1 ? "4px solid red" : ""}}>Generall</button>
                    <button onClick={ ()=> activeTab(2)}   style={{borderBottom: tab === 2 ? "4px solid red" : ""}}>Popular</button>
                    <button onClick={ ()=> activeTab(3)}   style={{borderBottom: tab === 3 ? "4px solid red" : ""}}>Soup &amp; Sauce</button>
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