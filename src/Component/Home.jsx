// import React from 'react'
// import harshPic from './harsh pic.jpg'

// const Home = () => {
//   return (
//    <>
//     <div id="home" className="font-bold text-3xl main flex justify-between items-center text-red-300 ml-80  mt-11">
//                             <div className="mleft">
//                                 <h3 id="name">HARSH KUMAR SAHU</h3>
//                                 <h2 id="heading">Welcome To My Portfolio</h2>
//                             </div>

//                             <div className="mright">
//                                 <img src={harshPic}
//                                     alt="Harsh Kumar Sahu"
//                                     className='h-56 mr-80 rounded-full'
//                                 />
//                             </div>
//                         </div>
//    </>
//   )
// }

// export default Home
import React from 'react'
import harshPic from './harsh pic.jpg'

const Home = () => {
  return (
    <>
      <section
        id="home"
        className="min-h-[70vh] flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-pink-200 via-purple-100 to-blue-100 py-16 px-4"
      >
        <div className="flex-1 flex flex-col items-center md:items-start mb-10 md:mb-0">
          <h3 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 drop-shadow-lg mb-4 tracking-wide text-center md:text-left">
            HARSH KUMAR SAHU
          </h3>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 text-center md:text-left">
            Welcome To My <span className="text-pink-500">Portfolio</span>
          </h2>
          <div className="flex gap-4 mt-2">
            <a
              href="#contact"
              className="px-6 py-2 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 text-white font-bold shadow-lg hover:scale-105 transition-transform duration-200"
            >
              Contact Me
            </a>
            <a
              href="#education"
              className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-400 to-pink-400 text-white font-bold shadow-lg hover:scale-105 transition-transform duration-200"
            >
              Education
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src={harshPic}
            alt="Harsh Kumar Sahu"
            className="h-56 w-56 md:h-72 md:w-72 rounded-full object-cover border-4 border-pink-300 shadow-2xl hover:scale-105 transition-transform duration-300 bg-white"
          />
        </div>
      </section>
    </>
  )
}

export default Home