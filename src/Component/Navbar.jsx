// import React from 'react'


// function Navbar() {
//     return (
//         <>
//             <div id='navbar' className='bg-pink-200 flex mb-20 fixed top-0 left-0 right-0'>

//                 <div className=" w-1/2  ">
//                     <h4 className=" text-2xl font-semibold text-gray-800 dark:text-white ">Portfolio</h4>
//                 </div>
               


//                 <div className='w-1/2'>
//                         <div className="bg-pink-200 max-w-screen-x1 flex items-center justify-between fixed">
//                             <ul className="flex space-x-11 ml-14">
//                                 <li><a href="#home" className="text-gray-800 dark:text-white hover:text-blue-500">Home</a></li>
//                                 <li><a href="#about" className="text-gray-800 dark:text-white hover:text-blue-500">About</a></li>
//                                 <li><a href="#education" className="text-gray-800 dark:text-white hover:text-blue-500">Education</a></li>
//                                 <li><a href="#skills" className="text-gray-800 dark:text-white hover:text-blue-500">Skills</a></li>
//                                 <li><a href="#projects" className="text-gray-800 dark:text-white hover:text-blue-500">Projects</a></li>
//                                 <li><a href="#contact" className="text-gray-800 dark:text-white hover:text-blue-500">Contact</a></li>
//                             </ul>
//                         </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Navbar;
import React from 'react'

function Navbar() {
    return (
        <>
            <nav
                id="navbar"
                className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 shadow-lg py-3 px-6 flex items-center justify-between"
            >
                <div className="flex items-center">
                    <h4 className="text-3xl font-extrabold text-white tracking-widest drop-shadow-lg select-none">
                        Portfolio
                    </h4>
                </div>
                <ul className="flex space-x-8 md:space-x-12">
                    <li>
                        <a
                            href="#home"
                            className="text-white font-semibold text-lg hover:text-yellow-300 transition-colors duration-200 px-2 py-1 rounded hover:bg-white/10"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            className="text-white font-semibold text-lg hover:text-yellow-300 transition-colors duration-200 px-2 py-1 rounded hover:bg-white/10"
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#education"
                            className="text-white font-semibold text-lg hover:text-yellow-300 transition-colors duration-200 px-2 py-1 rounded hover:bg-white/10"
                        >
                            Education
                        </a>
                    </li>
                    <li>
                        <a
                            href="#skills"
                            className="text-white font-semibold text-lg hover:text-yellow-300 transition-colors duration-200 px-2 py-1 rounded hover:bg-white/10"
                        >
                            Skills
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            className="text-white font-semibold text-lg hover:text-yellow-300 transition-colors duration-200 px-2 py-1 rounded hover:bg-white/10"
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className="text-white font-semibold text-lg hover:text-yellow-300 transition-colors duration-200 px-2 py-1 rounded hover:bg-white/10"
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
            {/* Spacer to prevent content from hiding behind navbar */}
            <div className="h-20"></div>
        </>
    )
}

export default Navbar;
