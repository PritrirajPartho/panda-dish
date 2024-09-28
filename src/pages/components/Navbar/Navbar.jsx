import React, { useState } from 'react';
import logo  from '../../../../public/logo.png';
import { GiHamburgerMenu } from "react-icons/gi";
import Tooltips from '../Tooltip/Tooltips';
import { FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa';


const Navbar = () => {

   const[isMenuOpen, SetIsMenuOpen] = useState(false);

   const toggleMenu = () => {
    // toggle false to true || true to false
     SetIsMenuOpen(!isMenuOpen); 
   }
  console.log(isMenuOpen)
    return (
    <section className="font-poppins fixed top-0 z-50 bg-white w-full lg:h-[10%]">
        <nav>
            <div className="flex justify-between items-center">
                <div className='flex items-center justify-center sm:mt-4'>
                   <img className='rounded-xl sm:mt-3' src={logo} alt="Logo"/>
                </div>
                <div className='sm:hidden'>
                     <button onClick={() => toggleMenu()}>
                          <GiHamburgerMenu></GiHamburgerMenu>
                     </button>
                </div>

                <ul className='hidden md:flex space-x-4'>
                    <Tooltips text="Show your saved foods">
                        <p className='mr-14 cursor-pointer text-orange-500'><FaShoppingCart></FaShoppingCart></p>
                    </Tooltips>
                    <Tooltips text="Your favourite foods">
                        <p className='cursor-pointer mr-14 text-red-500'><FaHeart></FaHeart></p>
                    </Tooltips>
                    <Tooltips text="This is User">
                        <p className='cursor-pointer'><FaUser></FaUser></p>
                    </Tooltips>
                </ul>
            </div>

            {
                isMenuOpen ? 
                    <ul className='md:hidden'>
                        <Tooltips text="Show your saved foods">
                        <button  className='ml-3 cursor-pointer py-2 text-orange-500'><FaShoppingCart></FaShoppingCart></button>
                        </Tooltips>
                        <Tooltips text="Your favourite foods">
                        <button  className='ml-3 cursor-pointer py-2  text-red-500'><FaHeart></FaHeart></button>
                        </Tooltips> 
                        <Tooltips text="This is User">
                        <button  className='ml-3 cursor-pointer py-2'><FaUser></FaUser></button>                    
                        </Tooltips>           
                    </ul>
                    // <ul className='flex flex-col md:hidden '>
                    //         <button  className='ml-3 cursor-pointer py-2 text-orange-500'><FaShoppingCart></FaShoppingCart></button>
                    //         <button  className='ml-3 cursor-pointer py-2  text-red-500'><FaHeart></FaHeart></button>
                    //         <button  className='ml-3 cursor-pointer py-2'><FaUser></FaUser></button>
                    // </ul>
                :
                    null
            }

        </nav>
    </section>
    );
};

export default Navbar;