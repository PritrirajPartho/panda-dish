import React from 'react';
import logo from "../../../../public/logo.png";

const Footer = () => {
    return (
    <section>
        <footer className="footer bg-neutral text-neutral-content p-10">
        <aside>
            <img src={logo}/>
            <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
            </p>
        </aside>
        </footer>
    </section>
    );
};

export default Footer;