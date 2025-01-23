import React from 'react'
import html from '../svg/html.svg'
import css from '../svg/css.svg'
import tailwind from '../svg/tailwind.svg'
import javascript from '../svg/javascript.svg'
import nodejs from '../svg/nodejs.svg'
import expressjs from '../svg/expressjs.svg'
import reactjs from '../svg/reactjs.svg'
import nextjs from '../svg/nextjs.svg'
import cpp from '../svg/cpp.svg'
import python from '../svg/python.svg'
function About() {
  return (
    <div className='container m-auto h-auto flex flex-col justify-center items-center py-32'>
      <div className=' text-white  text-center'>
        <h1 className='text-4xl animate-infinite-glow'>ABOUT</h1>
        <div className="w-36 h-0.5 mx-auto mt-1 bg-[#886fb8]"></div>
        <p className='text-lg py-4'>I am a passionate and consistent competitive programmer, also specializing in web development and creating responsive and user-friendly websites. I am always eager to expand my skills and knowledge. I have experience with many languages given below and I continuously seek opportunities to grow and explore new technologies.</p>
      </div>
      <div className='pt-12 flex justify-center items-center gap-6 flex-wrap'>
        <div className='border-2 border-[#886fb8] p-2 rounded-lg transition-all duration-200 hover:shadow-[0_0_20px_#886fb8] hover:scale-110'>
          <img src={html} alt="html" /><p className='text-white text-center pt-1 '>HTML</p>
        </div>
        <div className='border-2 border-[#886fb8] pb-2 rounded-lg transition-all duration-200 hover:shadow-[0_0_20px_#886fb8] hover:scale-110'>
          <img src={css} alt="css" /><p className='text-white text-center '>CSS</p>
        </div>
        <div className='border-2 border-[#886fb8] p-2 rounded-lg transition-all duration-200 hover:shadow-[0_0_20px_#886fb8] hover:scale-110'>
          <img src={tailwind} alt="tailwind" /><p className='text-white text-center pt-1 '>Tailwind</p>
        </div>
        <div className='border-2 border-[#886fb8] p-2 rounded-lg transition-all duration-200 hover:shadow-[0_0_20px_#886fb8] hover:scale-110'>
          <img src={javascript} alt="js" /><p className='text-white text-center pt-1 '>Javascript</p>
        </div>
        <div className='border-2 border-[#886fb8] p-2 rounded-lg transition-all duration-200 hover:shadow-[0_0_20px_#886fb8] hover:scale-110'>
          <img src={nodejs} alt="node" /><p className='text-white text-center pt-1 '>Node.js</p>
        </div>
        <div className='border-2 border-[#886fb8] p-2 rounded-lg transition-all duration-200 hover:shadow-[0_0_20px_#886fb8] hover:scale-110'>
          <img src={expressjs} alt="express" /><p className='text-white text-center pt-1 '>Express.js</p>
        </div>
        <div className='border-2 border-[#886fb8] p-2 rounded-lg transition-all duration-200 hover:shadow-[0_0_20px_#886fb8] hover:scale-110'>
          <img src={reactjs} alt="react" /><p className='text-white text-center pt-1 '>React.js</p>
        </div>
        <div className='border-2 border-[#886fb8] p-2 rounded-lg transition-all duration-200 hover:shadow-[0_0_20px_#886fb8] hover:scale-110'>
          <img src={nextjs} alt="next" /><p className='text-white text-center pt-1 '>Next.js</p>
        </div>
        <div className='border-2 border-[#886fb8] p-2 rounded-lg transition-all duration-200 hover:shadow-[0_0_20px_#886fb8] hover:scale-110'>
          <img src={cpp} alt="cpp" /><p className='text-white text-center pt-1 '>C++</p>
        </div>
        <div className='border-2 border-[#886fb8] p-2 rounded-lg transition-all duration-200 hover:shadow-[0_0_20px_#886fb8] hover:scale-110'>
          <img src={python} alt="python" /><p className='text-white text-center pt-1 '>Python</p>
        </div>
      </div>
    </div>
  )
}

export default About
