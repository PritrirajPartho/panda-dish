import React from 'react';
import logo from '../../../../public/logo.png';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa6';
import Tooltips from '../Tooltip/Tooltips';



const Header = () => {
return (
  <header className='font-poppins '>
    <section className=" fixed top-0 z-50 bg-white w-full h-[10vw] sm:h-[8vw] md:h-[6vw] lg:h-[5vw]">
      <div className='width-control-container header-element-alignment flex justify-between text-[1.5vw]'>
          <div className='logo-div flex justify-center items-center'>
            <img  className='rounded-xl' src={logo} alt="Panda-logo"/>
            <h1 className='ml-4'>Panda-Dish</h1>
          </div>

          <nav className='flex justify-center items-center'>
             <div className='flex justify-center items-center'>
              <Tooltips text="Show your saved foods">
                 <p className='mr-14 cursor-pointer text-orange-500'><FaShoppingCart></FaShoppingCart></p>
              </Tooltips>
              <Tooltips text="Your favourite foods">
                 <p className='cursor-pointer mr-14 text-red-500'><FaHeart></FaHeart></p>
              </Tooltips>
              <Tooltips text="This is User">
                 <p className='cursor-pointer'><FaUser></FaUser></p>
              </Tooltips>
             </div> 
          </nav>
      </div>
    </section>
  </header>
);
};

export default Header;