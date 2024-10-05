import React from 'react';
import Banner from "../../components/Banner/Banner";
import GetDishes from '../../components/Dishes/GetDishes';
import Testimonials from '../../components/Testimonials/Testimonials';
import DishesFormula from '../../components/DishesFormula/DishesFormula';
import MobileApp from '../../components/MobileApp/MobileApp';


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <GetDishes></GetDishes>
           <Testimonials></Testimonials>
           <MobileApp></MobileApp>
           <DishesFormula></DishesFormula>
        </div>
    );
};

export default Home;