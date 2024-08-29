import React from 'react';
import logo from "../../../../public/logo.png";

const Footer = () => {
    return (
    <section>
        <footer className='mt-16 bg-white grid grid-cols-4 gap-4 place-items-center'>
            <div >
                <div className='flex justify-center items-center mt-[-35px]'>
                    <img className='rounded-xl mt-[-20px]' src={logo} alt="" />
                    <h1 className='ml-4 font-poppins text-2xl mb-4'>Panda Dish</h1>
                </div>
                <div className='text-xl font-agdasima'>
                  <p className='mb-2'>Alhamra-zindabazar, Sylhet, BD</p>
                  <p className='mb-2'><strong>Email:</strong> panda@foods.com</p>
                  <p className='mb-2'><strong>Phone:</strong> +01764676589</p>
                </div>
            </div>
            <div className='flex flex-col'>
                <h6 className="footer-title text-2xl mb-3 font-poppins">Services</h6>
                <a className="link link-hover text-xl font-agdasima mb-2">Branding</a>
                <a className="link link-hover text-xl font-agdasima mb-2">Design</a>
                <a className="link link-hover text-xl font-agdasima mb-2">Marketing</a>
                <a className="link link-hover text-xl font-agdasima mb-2">Advertisement</a>
            </div>
            <div className='flex flex-col'>
                <h6 className="footer-title text-2xl mb-3 font-poppins" >Legal</h6>
                <a className="link link-hover text-xl font-agdasima mb-2">Terms of use</a>
                <a className="link link-hover text-xl font-agdasima mb-2">Privacy policy</a>
                <a className="link link-hover text-xl font-agdasima mb-2">Cookie policy</a>
                <a className="link link-hover text-xl font-agdasima mb-2">Legal policy</a>
            </div>
            <div className='flex flex-col '>
                <h6 className="footer-title text-2xl mb-3 font-poppins">Company</h6>
                <a className="link link-hover text-xl font-agdasima mb-2">About us</a>
                <a className="link link-hover text-xl font-agdasima mb-2">Contact</a>
                <a className="link link-hover text-xl font-agdasima mb-2">Jobs</a>
                <a className="link link-hover text-xl font-agdasima mb-2">Press kit</a>
            </div>
        </footer>
    </section>
    );
};

export default Footer;