import React, { useState } from 'react';

function Navbar({ scrollToSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (section) => {
    scrollToSection(section);
    setIsMenuOpen(false); 
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className='w-full pt-3 fixed border-[#886fb8] md:flex flex-col items-center hidden z-30'>
        <ul className='flex rounded-lg px-8 py-2 items-center justify-center gap-14 text-2xl font-light text-white backdrop-blur-lg w-fit '>
          <li className='cursor-pointer hover:text-[#886fb8] hover:scale-110 transition-all duration-200' onClick={() => scrollToSection('Home')}>Home</li>
          <li className='cursor-pointer hover:text-[#886fb8] hover:scale-110 transition-all duration-200' onClick={() => scrollToSection('About')}>About</li>
          <li className='cursor-pointer hover:text-[#886fb8] hover:scale-110 transition-all duration-200' onClick={() => scrollToSection('Services')}>Services</li>
          <li className='cursor-pointer hover:text-[#886fb8] hover:scale-110 transition-all duration-200' onClick={() => scrollToSection('Projects')}>Projects</li>
          <li className='cursor-pointer hover:text-[#886fb8] hover:scale-110 transition-all duration-200' onClick={() => scrollToSection('Contacts')}>Contacts</li>
        </ul>
        <div className="w-[640px] h-0.5 mx-auto bg-[#886fb8]"></div>
      </nav>

      {/* Mobile Header Bar */}
      <div className='fixed h-14 w-full border-b-2 md:hidden backdrop-blur-lg z-20'>
        <h1 className='text-white text-xl py-3 px-4'>Portfolio</h1>
      </div>

      {/* Mobile Hamburger Toggle */}
      <div onClick={toggleMenu} className='md:hidden fixed right-0 py-3 px-6 cursor-pointer z-30'>
        <img 
          src={isMenuOpen ? "/Cross.svg" : "/Menu.svg"} 
          alt="toggle" 
          className="w-8 h-8" 
        />
      </div>

      {/* Slide-out Mobile Menu */}
      <div className={`fixed w-[250px] h-screen bg-black z-20 border-l border-white transition-all duration-500 ease-in-out ${isMenuOpen ? 'right-0' : '-right-full'}`}>
        <ul className='flex flex-col items-center justify-center gap-10 pt-20 text-2xl text-white'>
          <li className='cursor-pointer hover:text-[#886fb8]' onClick={() => handleLinkClick('Home')}>Home</li>
          <li className='cursor-pointer hover:text-[#886fb8]' onClick={() => handleLinkClick('About')}>About</li>
          <li className='cursor-pointer hover:text-[#886fb8]' onClick={() => handleLinkClick('Services')}>Services</li>
          <li className='cursor-pointer hover:text-[#886fb8]' onClick={() => handleLinkClick('Projects')}>Projects</li>
          <li className='cursor-pointer hover:text-[#886fb8]' onClick={() => handleLinkClick('Contacts')}>Contacts</li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
