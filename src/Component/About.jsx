// import React from 'react'

// const About = () => {
//   return (
//     <>
//     <div className='bg-pink-200'>
// <section id="about" class="bg-black p-8 rounded-lg shadow-lg max-w-4xl mx-auto mt-10">
//     <h2 class="text-3xl font-semibold text-white mb-4">About Me</h2>
//     <p class="text-lg text-white leading-relaxed">
//         I am a passionate web developer with skills in HTML, CSS, Java, SQL, and JavaScript. 
//         I enjoy turning ideas into reality and creating user-friendly experiences.
//     </p>
// </section>
// </div>
// </>
//   )
// }

// export default About
import React from 'react'

const About = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 py-12">
        <section
          id="about"
          className="bg-black/80 p-10 rounded-3xl shadow-2xl max-w-3xl w-full mx-4 border-2 border-pink-400 backdrop-blur-md"
        >
          <h2 className="text-4xl font-extrabold text-pink-400 mb-6 text-center drop-shadow-lg tracking-wide">
            About Me
          </h2>
          <p className="text-lg text-white leading-relaxed text-center mb-4">
            I am a <span className="font-bold text-pink-300">passionate web developer</span> with skills in 
            <span className="text-blue-300 font-semibold"> HTML</span>, 
            <span className="text-yellow-300 font-semibold"> CSS</span>, 
            <span className="text-red-300 font-semibold"> Java</span>, 
            <span className="text-green-300 font-semibold"> SQL</span>, and 
            <span className="text-purple-300 font-semibold"> JavaScript</span>.
          </p>
          <p className="text-white text-center text-lg">
            I enjoy turning ideas into reality and creating 
            <span className="text-pink-200 font-semibold"> user-friendly experiences</span>.
          </p>
        </section>
      </div>
    </>
  )
}

export default About