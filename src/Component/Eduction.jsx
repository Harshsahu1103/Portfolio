// import React from 'react'

// function Eduction() {
//     return (
//       <>
//      <div id="education" class="bg-pink-200 py-10">
//     <h1 class="text-4xl font-bold text-center text-gray-800 mb-8">Education</h1>

//     <div class="education-item1 max-w-4xl mx-auto p-6 bg-black rounded-lg shadow-lg mb-6">
//         <div class="eleft">
//             {/* <!-- <img src="./college.jpeg" alt=""> --> */}
//         </div>
//         <div class="eright">
//             <h2 class="text-2xl font-semibold text-white">Shri Ram Institute of Science and Technology Jabalpur</h2>
//             <p class="text-white">University of Rajiv Gandhi Proudyogiki Vishwavidyalaya</p>
//             <p class="text-white">Graduated in June 2024</p>
//             <p class="text-white">CGPA: 8.13</p>
//         </div>
//     </div>

//     <div class="education-item2 max-w-4xl mx-auto p-6 bg-black rounded-lg shadow-lg mb-6">
//         <div class="eleft">
//             {/* <!-- <img src="./12thschool.jpeg" alt=""> --> */}
//         </div>
//         <div class="eright">
//             <h2 class="text-2xl font-semibold text-white">DR.K L Papneja Adarsh Higher Secondary School Kareli</h2>
//             <p class="text-white">MP Board</p>
//             <p class="text-white">PassOut 2020</p>
//             <p class="text-white">Percentage: 80.2</p>
//         </div>
//     </div>

//     <div class="education-item3 max-w-4xl mx-auto p-6 bg-black rounded-lg shadow-lg mb-6">
//         <div class="eleft">
//             {/* <!-- <img src="./10thschool.jpg" alt=""> --> */}
//         </div>
//         <div class="eright">
//             <h2 class="text-2xl font-semibold text-white">Govt. Higher Secondary School Kareli</h2>
//             <p class="text-white">MP Board</p>
//             <p class="text-white">PassOut 2018</p>
//             <p class="text-white">Percentage: 77.8</p>
//         </div>
//     </div>
// </div>


//       </>
//     )
// }

// export default Eduction
import React from 'react'

function Eduction() {
    return (
      <>
        <div id="education" className="bg-gradient-to-br from-pink-200 via-purple-100 to-blue-100 py-14 min-h-screen">
          <h1 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 mb-12 drop-shadow-lg tracking-wide">
            Education
          </h1>

          <div className="max-w-4xl mx-auto flex flex-col gap-8">
            {/* College */}
            <div className="flex flex-col md:flex-row items-center bg-black/80 rounded-3xl shadow-2xl border-l-8 border-pink-400 p-8 hover:scale-[1.02] transition-transform duration-300 group">
              <div className="md:w-1/4 flex justify-center mb-4 md:mb-0">
                {/* <img src="./college.jpeg" alt="" className="w-24 h-24 rounded-full object-cover border-4 border-pink-300 shadow-lg" /> */}
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                  B.Tech
                </div>
              </div>
              <div className="md:w-3/4 md:pl-8">
                <h2 className="text-2xl font-bold text-pink-300 group-hover:text-white transition-colors duration-200">
                  Shri Ram Institute of Science and Technology Jabalpur
                </h2>
                <p className="text-white/80">University of Rajiv Gandhi Proudyogiki Vishwavidyalaya</p>
                <p className="text-white/80">Graduated in <span className="font-semibold text-pink-200">June 2024</span></p>
                <p className="text-white/80">CGPA: <span className="font-semibold text-pink-200">8.13</span></p>
              </div>
            </div>

            {/* 12th School */}
            <div className="flex flex-col md:flex-row items-center bg-black/80 rounded-3xl shadow-2xl border-l-8 border-blue-400 p-8 hover:scale-[1.02] transition-transform duration-300 group">
              <div className="md:w-1/4 flex justify-center mb-4 md:mb-0">
                {/* <img src="./12thschool.jpeg" alt="" className="w-24 h-24 rounded-full object-cover border-4 border-blue-300 shadow-lg" /> */}
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                  12
                </div>
              </div>
              <div className="md:w-3/4 md:pl-8">
                <h2 className="text-2xl font-bold text-blue-300 group-hover:text-white transition-colors duration-200">
                  DR.K L Papneja Adarsh Higher Secondary School Kareli
                </h2>
                <p className="text-white/80">MP Board</p>
                <p className="text-white/80">PassOut <span className="font-semibold text-blue-200">2020</span></p>
                <p className="text-white/80">Percentage: <span className="font-semibold text-blue-200">80.2</span></p>
              </div>
            </div>

            {/* 10th School */}
            <div className="flex flex-col md:flex-row items-center bg-black/80 rounded-3xl shadow-2xl border-l-8 border-purple-400 p-8 hover:scale-[1.02] transition-transform duration-300 group">
              <div className="md:w-1/4 flex justify-center mb-4 md:mb-0">
                {/* <img src="./10thschool.jpg" alt="" className="w-24 h-24 rounded-full object-cover border-4 border-purple-300 shadow-lg" /> */}
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                  10
                </div>
              </div>
              <div className="md:w-3/4 md:pl-8">
                <h2 className="text-2xl font-bold text-purple-300 group-hover:text-white transition-colors duration-200">
                  Govt. Higher Secondary School Kareli
                </h2>
                <p className="text-white/80">MP Board</p>
                <p className="text-white/80">PassOut <span className="font-semibold text-purple-200">2018</span></p>
                <p className="text-white/80">Percentage: <span className="font-semibold text-purple-200">77.8</span></p>
              </div>
            </div>
          </div>
        </div>
      </>
    )
}

export default Eduction