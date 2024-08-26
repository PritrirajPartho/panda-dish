import React from 'react';
import logo from '../../../../public/logo.png';
import { FaShoppingCart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa6';


const Header = () => {
return (
  <header className='font-poppins'>
    <section className="drop-shadow-xl fixed top-0 z-50 bg-white w-full h-[10vw] sm:h-[8vw] md:h-[6vw] lg:h-[5vw]">
      <div className='element-alignment flex justify-between text-[1.5vw]'>
          <div className='logo-div flex jus'>
            <img  className='rounded-xl' src={logo} alt="Panda-logo"/>
            <h1 className='ml-4'>Panda-Dish</h1>
          </div>

          <nav>
             <div className='flex items-center'>
              <p className='mr-14 text-orange-500'><FaShoppingCart></FaShoppingCart></p>
              <p className='mr-14 text-red-500'><FaHeart></FaHeart></p>
              <p >User</p>
             </div>
          </nav>
      </div>
    </section>
  </header>
);
};

export default Header;