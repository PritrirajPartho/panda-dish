import React from 'react';
import mobildImg from '../../../public/mobile-app-three.png';
import appleImg from '../../../public/app-store.webp';
import googleImg from '../../../public/play-store.webp';

const MobileApp = () => {
    return (
        <section className='width-control-container px-4 md:px-8'>
           <div className='mobileapp-container mt-[50px] sm:mt-[70px] md:mt-[100px]'>
               <div className='lg:mt-16 px-4'>
                    <h1 className='text-3xl md:text-2xl text-center mt-4 md:mt-0 font-bold font-poppins'>Make your Life easier with our mobile app</h1>
                    <p className='text-3xl md:text-xl mt-4 text-center font-agdasima'>Food is our common ground, a universal experience.So, try Panda-dish on the mobile app.</p>
                    <div className=' mt-6 flex justify-center gap-6 md:gap-12'>
                        <a className='cursor-pointer' href='https://www.apple.com/store'  target="_blank"><img className='rounded w-[80%]' src={appleImg} alt="Apple" /></a>
                        <a className='cursor-pointer' href='https://play.google.com/store/games?hl=en' target="_blank"><img className='rounded w-[80%]' src={googleImg} alt="Google" /></a>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <img className='w-[100%] sm:w-[300px] sm:h-[150px] md:w-[250px] md:h-[150px] lg:w-[400px] lg:h-[250px]'  src={mobildImg} alt="" />
                </div>
           </div>
        </section>
    );
};

export default MobileApp;