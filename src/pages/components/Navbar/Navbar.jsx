import React, { useState } from 'react';
import logo  from '../../../../public/logo.png';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa';

const Navbar = () => {
    const[isMenuOpen, SetIsMenuOpen] = useState(false);

    const toggleMenu = () => {
     // toggle false to true || true to false
      SetIsMenuOpen(!isMenuOpen); 
    }
    
    return (
    <section className='fixed top-0 z-30 max-h-full w-full bg-white'>
        <nav className='px-4 py-3 md:px-8'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center '>
                    <img src={logo} className='max-h-[2em] rounded-xl' alt="Panda-logo" />
                    <h1 className='ml-2 text-4xl sm:text-3xl md:text-xl font-semibold'>Panda-dish</h1>
                </div>
                <div className='sm:hidden'>
                    <button className='mt-2' onClick={() => toggleMenu()}>
                        <GiHamburgerMenu className='max-h-full'></GiHamburgerMenu>
                    </button>
                </div>
                <ul className='hidden sm:flex'>
                        <p className='mr-14 cursor-pointer text-orange-500'><FaShoppingCart></FaShoppingCart></p>
                        <p className='cursor-pointer mr-14 text-red-500'><FaHeart></FaHeart></p>
                        <p className='cursor-pointer'><FaUser></FaUser></p>
                </ul>
            </div>
            {
                isMenuOpen ? 
                    <ul className='visible sm:hidden'>
                        <button  className=' cursor-pointer py-2  flex justify-center items-center gap-2'><p className='text-orange-500'><FaShoppingCart></FaShoppingCart></p> <span>Shopping Cart</span></button>
                        <button  className=' cursor-pointer py-2  flex justify-center items-center gap-2'><p className='text-red-500'><FaHeart></FaHeart></p> <span>Favourite</span></button>
                        <button  className=' cursor-pointer py-2  flex justify-center items-center gap-2'><p><FaUser></FaUser></p> <span>Profile</span></button>                  
                    </ul>
                :
                    null
            }
        </nav>
    </section>
    );
};

export default Navbar;