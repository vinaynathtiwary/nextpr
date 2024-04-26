import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from "../css/NavBar.css.module.css";
import Link from 'next/link';
import Image from 'next/image';
import hamImage from '../../public/assets/burger-menu.png';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="absolute w-[100%] h-[100%]">
      <div><Image src='/assets/logoimg.png' alt="Logo" width={200} height={150} style={{ padding: '20px' }} /></div>
      <div onClick={toggleNavbar} className={`${styles.demo} z-[1050] text-black fixed top-0 right-0`}>
        {isOpen ? <FontAwesomeIcon icon={faTimes} style={{ fontSize: '24px' }} /> : <FontAwesomeIcon icon={faBars} style={{ fontSize: '24px' }} />}
      </div>
      <nav className={`flex fixed w-full transition-all duration-300 h-[110vh] bg-black z-[1000] ease-in-out ${isOpen ? 'top-0' : '-top-[110vh]'}`}>
        <div className='navBarContent'>
          <div className="slogan">
            <h1>
              Your
              <br />
              Brand
              <br />
              Our
              <br />
              Passion
            </h1>
          </div>
          <div className='navs'>
            <Link href="/" className='navList'>Home</Link>
            <br />
            <Link href="/services" className='navList'>Services</Link>
            <br />
            <Link href="#about" className='navList'>Our Works</Link>
            <br />
            <Link href="#client" className='navList'>Our Clients</Link>
            <br />
            <Link href="/contact" className='navList'>Contact Us</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
