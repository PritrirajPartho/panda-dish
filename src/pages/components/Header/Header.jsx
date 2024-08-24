import React from 'react';
import logo from '../../../../public/logo.png';
import { FaShoppingCart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa6';


const Header = () => {
return (
  <header>
    <section className="bg-white w-full h-[10vw] sm:h-[8vw] md:h-[6vw] lg:h-[5vw]">
      <div className='flex justify-between text-[1.5vw] px-24 py-3'>
        <div className='logo-div flex justify-start items-center'>
            <img  className='rounded-xl' src={logo} alt="Panda-logo"/>
            <h1 className='ml-4'>Panda-Dish</h1>
        </div>
        <nav className='flex justify-center items-center'>
          <p className='mr-24 text-orange-500'><FaShoppingCart></FaShoppingCart></p>
          <p className='mr-24 text-red-500'><FaHeart></FaHeart></p>
          <p >User</p>
        </nav>
      </div>
    </section>
  </header>
);
};

export default Header;