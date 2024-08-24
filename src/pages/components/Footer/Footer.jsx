import React from 'react';
import logo from "../../../../public/logo.png";

const Footer = () => {
    return (
    <section>
        <footer className='bg-blue-500 grid grid-cols-4 gap-4 place-items-center'>
            <div>
                <img src={logo} alt="" />
                <h1>Panda Dish</h1>
                <p>Alhamra-zindabazar, Sylhet</p>
            </div>
            <div className='flex flex-col'>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </div>
            <div className='flex flex-col'>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
            <div className='flex flex-col'>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
        </footer>
    </section>
    );
};

export default Footer;