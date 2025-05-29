// import React from 'react'

// function Skills() {
//     const skills =["Java","C#","Sql","Javascript","React","Angular","HTML","CSS"]
//     return (
//         <section id="skills" class="bg-gray-50 py-12">
//         <h2 class="text-4xl font-bold text-center text-gray-800 mb-8">My Skills</h2>
        
//         <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
//             {skills.map((skill, index) => {
//                 return (
//                     <div key={index} class="bg-white p-4 rounded-lg shadow-md flex items-center justify-center text-lg text-gray-700 hover:bg-black hover:text-white transition duration-300 ease-in-out">
//                         {skill}
//                     </div>
//                 );
//             })}
//         </div>
//     </section>
    
//     )
// }

// export default Skills
import React from 'react'

function Skills() {
    const skills = [
        "Java", "C#", "SQL", "JavaScript", "React","Springboot", "HTML", "CSS"
    ]
    return (
        <section
            id="skills"
            className="bg-gradient-to-br from-pink-130 via-purple-50 to-blue-100 py-16 px-4 min-h-[60vh]"
        >
            <h2 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 mb-10 drop-shadow-lg tracking-wide">
                My Skills
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="bg-white/80 p-6 rounded-2xl shadow-xl flex flex-col items-center justify-center text-xl font-bold text-gray-700 hover:bg-gradient-to-r hover:from-pink-400 hover:to-blue-400 hover:text-white transition-all duration-300 ease-in-out cursor-pointer group"
                    >
                        <span className="mb-2 group-hover:scale-110 transition-transform duration-300">
                            {/* You can add an icon here if you want */}
                        </span>
                        {skill}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills