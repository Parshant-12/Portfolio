import React from 'react'
import cpp from '../svg/cpp.svg'
import python from '../svg/python.svg'
import sql from '../img/sql.png'
import mongodb from '../img/mongodb.png'
import expressjs from '../svg/expressjs.svg'
import reactjs from '../svg/reactjs.svg'
import nodejs from '../svg/nodejs.svg'
import javascript from '../svg/javascript.svg'

function About() {
  return (
    <div className='container m-auto h-auto flex flex-col justify-center items-center py-32'>
      <div className=' text-white  text-center'>
        <h1 className='text-4xl animate-infinite-glow'>ABOUT</h1>
        <div className="w-36 h-0.5 mx-auto mt-1 bg-[#886fb8]"></div>
        <p className='text-lg py-4'>B.Tech AI & Data Science student (2027 Batch) with a strong foundation in Data Structures & Algorithms and Object-Oriented Programming. Proficient in Python, C++, and SQL, with hands-on experience in building predictive models and IoT systems. Consistent Competitive Programmer (500+ problems solved) eager to apply analytical skills to build efficient, scalable technical solutions.</p>
      </div>
      <div className='pt-12 flex justify-center items-center gap-6 flex-wrap'>
        <div className='border-2 border-[#886fb8] p-2 rounded-lg transition-all duration-200 hover:shadow-[0_0_20px_#886fb8] hover:scale-110'>
          <img src={cpp} alt="html" /><p className='text-white text-center pt-1 '>C++</p>
        </div>
        <div className='border-2 border-[#886fb8] p-2 rounded-lg transition-all duration-200 hover:shadow-[0_0_20px_#886fb8] hover:scale-110'>
          <img src={python} alt="html" /><p className='text-white text-center pt-1 '>Python</p>
        </div>
        <div className='border-2 border-[#886fb8] p-2 rounded-lg transition-all duration-200 hover:shadow-[0_0_20px_#886fb8] hover:scale-110'>
          <img className='w-[75px]' src={sql} alt="html" /><p className='text-white text-center pt-1 '>SQL</p>
        </div>

        <div className='border-2 border-[#886fb8] p-2 rounded-lg transition-all duration-200 hover:shadow-[0_0_20px_#886fb8] hover:scale-110'>
          <img className='w-[75px]' src={mongodb} alt="html" /><p className='text-white text-center pt-1 '>MongoDB</p>
        </div>
        <div className='border-2 border-[#886fb8] p-2 rounded-lg transition-all duration-200 hover:shadow-[0_0_20px_#886fb8] hover:scale-110'>
          <img src={expressjs} alt="html" /><p className='text-white text-center pt-1 '>Express.js</p>
        </div>
        <div className='border-2 border-[#886fb8] p-2 rounded-lg transition-all duration-200 hover:shadow-[0_0_20px_#886fb8] hover:scale-110'>
          <img src={reactjs} alt="html" /><p className='text-white text-center pt-1 '>React.js</p>
        </div>
        <div className='border-2 border-[#886fb8] p-2 rounded-lg transition-all duration-200 hover:shadow-[0_0_20px_#886fb8] hover:scale-110'>
          <img src={nodejs} alt="html" /><p className='text-white text-center pt-1 '>Node.js</p>
        </div>

        {/* <div className='border-2 border-[#886fb8] p-2 rounded-lg transition-all duration-200 hover:shadow-[0_0_20px_#886fb8] hover:scale-110'>
          <img src="src/svg/tailwind.svg" alt="html" /><p className='text-white text-center pt-1 '>Tailwind</p>
        </div> */}

        <div className='border-2 border-[#886fb8] p-2 rounded-lg transition-all duration-200 hover:shadow-[0_0_20px_#886fb8] hover:scale-110'>
          <img src={javascript} alt="html" /><p className='text-white text-center pt-1 '>Javascript</p>
        </div>

        {/* <div className='border-2 border-[#886fb8] p-2 rounded-lg transition-all duration-200 hover:shadow-[0_0_20px_#886fb8] hover:scale-110'>
          <img src="src/svg/nextjs.svg" alt="html" /><p className='text-white text-center pt-1 '>Next.js</p>
        </div> */}
      </div>
    </div>
  )
}

export default About
