import React from 'react';
import logo  from '../../../public/logo.png';

const Footer = () => {
    return (
    <section className='width-control-container text-center text-4xl sm:text-2xl md:text-xl sm:text-left '>
        <footer className='mt-[100px] bg-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 place-items-center px-4  sm:px-8 py-6'>
            <div className='sm:w-[100px] md:w-full'>
                <div className='mb-2 sm:mt-8 md:mt-0 md:mb-4 flex flex-row justify-center sm:justify-start  md:justify-cetner md:items-center'>
                    <img className='rounded-xl w-[15%]' src={logo} alt="" />
                    <h1 className='ml-2 font-poppins  mt-1 sm:mt-0 font-bold'>Panda Dish</h1>
                </div>
                <div className='font-agdasima'>
                  <p className='mb-2'>Sylhet, Bangladesh</p>
                  <p className='mb-2'><strong>Email:</strong> panda@dishes.com</p>
                  <p className='mb-2'><strong>Phone:</strong> +01764676589</p>
                </div>
            </div>
            <div className=' flex flex-col'>
                <h6 className="footer-title  mb-3 font-poppins font-bold">Services</h6>
                <a className="link link-hover  font-agdasima mb-2">Branding</a>
                <a className="link link-hover  font-agdasima mb-2">Design</a>
                <a className="link link-hover  font-agdasima mb-2">Marketing</a>
                <a className="link link-hover  font-agdasima mb-2">Advertisement</a>
            </div>
            <div className='hidden sm:flex sm:flex-col sm:mr-8 md:mr-0'>
                <h6 className="footer-title  mb-3 font-poppins font-bold" >Legal</h6>
                <a className="link link-hover  font-agdasima mb-2">Terms of use</a>
                <a className="link link-hover  font-agdasima mb-2">Privacy policy</a>
                <a className="link link-hover  font-agdasima mb-2">Cookie policy</a>
                <a className="link link-hover  font-agdasima mb-2">Legal policy</a>
            </div>
            <div className='flex flex-col sm:mr-8 md:mr-0'>
                <h6 className="footer-title    mb-3 font-poppins font-bold">Company</h6>
                <a className="link link-hover  font-agdasima mb-2">About us</a>
                <a className="link link-hover  font-agdasima mb-2">Contact</a>
                <a className="link link-hover  font-agdasima mb-2">Jobs</a>
                <a className="link link-hover  font-agdasima mb-2">Press kit</a>
            </div>
        </footer>
    </section>
    );
};

export default Footer;