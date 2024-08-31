import React from 'react';
import mobildImg from '../../../../public/mobile-app-three.png';
import appleImg from '../../../../public/app-store.webp';
import googleImg from '../../../../public/play-store.webp';

const MobileApp = () => {
    return (
        <section className='width-control-container mobileapp-container'>
            <div className='lg:mt-16'>
                <h1 className='text-2xl  text-center font-bold font-poppins'>Make your Life easier with our mobile app</h1>
                <p className='text-xl mt-4 text-center font-agdasima'>Food is our common ground, a universal experience.So, try Panda-dish on the mobile app.</p>
                <div className=' mt-6 flex justify-center gap-12'>
                    <img className='rounded' src={appleImg} alt="Apple" />
                    <img className='rounded' src={googleImg} alt="Google" />
                </div>
            </div>
            <div className='justify-self-center'>
                <img className='w-[500px]' src={mobildImg} alt="" />
            </div>
        </section>
    );
};

export default MobileApp;