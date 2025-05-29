// import React from 'react'

// function Contact() {
//     return (
//         <>
//        <section id="contact" class="bg-black p-8 rounded-lg shadow-lg max-w-4xl mx-auto mt-10">
//     <h2 id="head" class="text-3xl font-semibold text-white mb-6">Contact Me</h2>
//     <p class="text-lg text-white mb-4">
//         Email: <a href="mailto:harshksahu11032002@gmail.com" class="text-blue-500 hover:underline">harshksahu11032002@gmail.com</a>
//     </p>
//     <p class="text-lg text-white">
//         Follow me on social media: 
//         <a href="https://github.com/Harshsahu1103" class="text-blue-500 hover:underline">GitHub</a> | 
//         <a href="https://www.linkedin.com/in/harsh-sahu-a97bb8230" class="text-blue-500 hover:underline">LinkedIn</a>
//     </p>
// </section>

//         </>
//     )
// }

// export default Contact

import React from 'react'

function Contact() {
    return (
        <>
            <div className="min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-blue-200 via-pink-100 to-purple-200 py-12">
                <section
                    id="contact"
                    className="bg-black/80 p-10 rounded-3xl shadow-2xl max-w-2xl w-full mx-4 border-2 border-blue-400 backdrop-blur-md"
                >
                    <h2
                        id="head"
                        className="text-4xl font-extrabold text-blue-400 mb-6 text-center drop-shadow-lg tracking-wide"
                    >
                        Contact Me
                    </h2>
                    <p className="text-lg text-white mb-6 text-center">
                        Email:{' '}
                        <a
                            href="mailto:harshksahu11032002@gmail.com"
                            className="text-pink-400 font-semibold hover:underline hover:text-pink-300 transition-colors duration-200"
                        >
                            harshksahu11032002@gmail.com
                        </a>
                    </p>
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-lg text-white mb-2">Follow me on social media:</span>
                        <div className="flex gap-6">
                            <a
                                href="https://github.com/Harshsahu1103"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-blue-400 hover:text-white transition-colors duration-200 text-xl font-bold"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99.01 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.58.23 2.75.11 3.04.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.08.79 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/>
                                </svg>
                                GitHub
                            </a>
                            <a
                                href="https://www.linkedin.com/in/harsh-sahu-a97bb8230"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-blue-400 hover:text-white transition-colors duration-200 text-xl font-bold"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v4.74z"/>
                                </svg>
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Contact