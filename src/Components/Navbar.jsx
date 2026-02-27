import React from 'react'
import { useState } from 'react'; // Removed useRef as it was causing the path bug

function Navbar({ scrollToSection }) {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  function handleMenu() {
    setisMenuOpen(!isMenuOpen);
  }

  return (
    <>
      {/* Desktop Navbar - All your original styling and hover effects kept exactly the same */}
      <nav className='w-full pt-3 fixed border-[#886fb8] md:flex flex-col items-center hidden z-30'>
        <ul className='flex rounded-lg px-8 py-2 items-center justify-center gap-14 text-2xl font-light text-white backdrop-blur-lg w-fit '>
          <li className='cursor-pointer hover:text-[#886fb8] hover:scale-110 transition-all duration-200' onClick={() => scrollToSection('Home')}><a href="#Home">Home</a></li>
          <li className='cursor-pointer hover:text-[#886fb8] hover:scale-110 transition-all duration-200' onClick={() => scrollToSection('About')}><a href="#About">About</a></li>
          <li className='cursor-pointer hover:text-[#886fb8] hover:scale-110 transition-all duration-200' onClick={() => scrollToSection('Services')}><a href="#Services">Services</a></li>
          <li className='cursor-pointer hover:text-[#886fb8] hover:scale-110 transition-all duration-200' onClick={() => scrollToSection('Projects')}><a href="#Projects">Projects</a></li>
          <li className='cursor-pointer hover:text-[#886fb8] hover:scale-110 transition-all duration-200' onClick={() => scrollToSection('Contacts')}><a href="#Contacts">Contacts</a></li>
        </ul>
        <div className="w-[640px] h-0.5 mx-auto bg-[#886fb8]"></div>
      </nav>

      <div className='fixed h-14 w-full border-b-2 md:hidden backdrop-blur-lg z-20'>
        <h1 className='text-white text-xl py-3 px-4'>Portfolio</h1>
      </div>

      {/* Mobile Icon Fix - Uses state to switch images safely */}
      <div onClick={handleMenu} className='md:hidden fixed right-0 py-3 px-6 cursor-pointer z-30'>
        <img 
          src={isMenuOpen ? "Cross.svg" : "Menu.svg"} 
          alt="menu toggle" 
        />
      </div>

      {/* Mobile Sidebar - Uses your exact transition and logic, controlled by the 'isMenuOpen' state */}
      <div 
        style={{ right: isMenuOpen ? '0' : '-110%' }}
        className='fixed w-[250px] h-screen bg-black z-20 border-l border-white transition-all duration-500 ease-in-out'
      >
        <ul className='flex flex-col items-center justify-center gap-10 pt-20 text-2xl text-white'>
          <li className='cursor-pointer hover:text-[#886fb8] hover:scale-110 transition-all duration-200' onClick={()=>{scrollToSection('Home'); setisMenuOpen(false);}}><a href="#Home">Home</a></li>
          <li className='cursor-pointer hover:text-[#886fb8] hover:scale-110 transition-all duration-200' onClick={()=>{scrollToSection('About'); setisMenuOpen(false);}}><a href="#About">About</a></li>
          <li className='cursor-pointer hover:text-[#886fb8] hover:scale-110 transition-all duration-200' onClick={()=>{scrollToSection('Services'); setisMenuOpen(false);}}><a href="#Services">Services</a></li>
          <li className='cursor-pointer hover:text-[#886fb8] hover:scale-110 transition-all duration-200' onClick={()=>{scrollToSection('Projects'); setisMenuOpen(false);}}><a href="#Projects">Projects</a></li>
          <li className='cursor-pointer hover:text-[#886fb8] hover:scale-110 transition-all duration-200' onClick={()=>{scrollToSection('Contacts'); setisMenuOpen(false);}}><a href="#Contacts">Contacts</a></li>
        </ul>
      </div>
    </>
  )
}

export default Navbar
