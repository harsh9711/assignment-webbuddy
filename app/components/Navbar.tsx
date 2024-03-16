"use client"
import React, { useState } from 'react';
import Menu from "/public/assets/Menu.svg";
import Logo from "/public/assets/Logo.svg";
import User from "/public/assets/User.svg";
import CloseIcon from "/public/assets/CloseIcon.svg";
import Downarrow from "/public/assets/2.jpg";

import Image from 'next/image';

const navLinks = [
  { name: "Features" },
  { name: "About us" },
 { name: "Solutions", hasDropdown: true },
   { name: "Pricing" },
  { name: "Contact Us" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const closeMenu = () => {
    setShowMenu(false);
  };

  return (

<nav className='flex justify-between w-7/12 items-center px-[20px] py-[16px] lg:px-5 lg:container lg:mx-auto bg-gradient-to-br from-opacity-33 to-transparent rounded-2xl' style={{backgroundImage: 'linear-gradient(112deg, rgba(255, 255, 255, .33) -22.31%, rgba(255, 255, 255, 0) 116.09%)'}}>
        <div className='flex items-center'>
        <Image src={Logo} alt="logo" />
      </div>

      <div className='hidden lg:flex flex-grow justify-center gap-x-10'>
        {navLinks.map((item, index) => (
           <div key={index} className='flex items-center'>
            <p className='font-medium text-white'>{item.name}</p>
            {item.hasDropdown && <Image src={Downarrow} alt="down arrow" width={15} height={10} className='ml-2' />}
          </div>
        ))}
      </div>

      {/* Sign-in */}
      <div className='flex items-center gap-3'>
        <Image src={User} alt="user profile" />
        <span className='hidden font-medium text-white lg:block border border-white rounded-2xl px-3 py-1'>
          Sign in
        </span>
      </div>

      <div className='flex gap-x-5'>
       
        <div className="relative">
            <Image src={Menu} alt="menu" className='lg:hidden' onClick={toggleMenu} />
            {showMenu && (
              <div className="fixed top-0 left-0 w-full h-full  flex flex-col items-center justify-center z-50" style={{ background: '#14211C'}}>
                <div className="absolute top-4 right-4 cursor-pointer" onClick={closeMenu}>
                  <Image src={CloseIcon} alt="close icon" />
                </div>
                {navLinks.map((item, index) => (
                  <p className='font-medium text-black' key={index}>{item.name}</p>
                ))}
              </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
