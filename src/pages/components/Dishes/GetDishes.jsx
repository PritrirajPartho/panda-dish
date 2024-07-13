import React, { useEffect, useState } from 'react';
import ShowDishes from './ShowDishes';

const dishes_api = '../../../../public/dishes.json';

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

    const generallDishes = dishes.filter(dishbycategory => dishbycategory.category === 'Generall');
    const popularDishes = dishes.filter(dishbycategory => dishbycategory.category === 'Popular');
    const soupDishes =  dishes.filter(dishbycategory => dishbycategory.category === 'Soup');

    // continue a condition
    const data = tab === 1 ? generallDishes : tab === 2 ? popularDishes : tab === 3 ? soupDishes : null ;


    return (
    <div>
         <h1 className='mt-20  mb-10 text-center'>Our Dishes</h1>
         <div className='flex justify-center text-xl'>
            <div className='border-2 border-black-200 flex justify-between w-[55%]'>
                <button onClick={ ()=> activeTab(1)}   style={{borderBottom: tab === 1 ? "1px solid red" : ""}}>Generall</button>
                <button onClick={ ()=> activeTab(2)}   style={{borderBottom: tab === 2 ? "1px solid red" : ""}}>Popular</button>
                <button onClick={ ()=> activeTab(3)}   style={{borderBottom: tab === 3 ? "1px solid red" : ""}}>Soup&amp;Sauce</button>
            </div>
         </div>
         
         {/* Show data as well as */}
         {dishes.map(dish=> <ShowDishes key={dish.serial} dish={dish}></ShowDishes>)}
    </div>
    );
};

export default GetDishes;