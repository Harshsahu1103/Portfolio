// import React from 'react';
// import calvupic from './calculator.png';
// import studentportel from "./sutdent.jpg";
// import tempConverterPic from './temprature.jpg'; 
// import vehicleServicePic from './vehical.jpg'; 

// const Project = () => {
//   return (
//     <>
//       <section id="projects" className="bg-pink-200 py-12">
//         <h2 className="text-4xl font-bold text-center text-black mb-8">My Projects</h2>
        
//         {/* Project 1: Calculator */}
//         <div className="project max-w-4xl mx-auto p-6 bg-black rounded-lg shadow-lg mb-6">
//           <h3 className="text-2xl font-semibold text-white mb-2">Project 1: Calculator</h3>
//           <p className="text-white">
//             A simple yet powerful calculator application that performs basic arithmetic operations 
//             such as addition, subtraction, multiplication, and division. The calculator features 
//             a user-friendly interface, built using HTML, CSS, and JavaScript, making it accessible 
//             on both desktop and mobile devices.
//           </p>
//           <div className="flex justify-center">
//             <img src={calvupic} 
//                  alt="Calculator" 
//                  className="h-50 w-56 object-cover "
//             />  
//           </div>
//         </div>
        
//         {/* Project 2: Student Portal */}
//         <div className="project max-w-4xl mx-auto p-6 bg-black rounded-lg shadow-lg mb-6">
//           <h3 className="text-2xl font-semibold text-white mb-2">Project 2: Student Portal</h3>
//           <p className="text-white">
//             A comprehensive student portal built with Spring Boot for the backend and React for the 
//             frontend. This portal allows students to manage their profiles, and communicate with instructors. 
//             The application incorporates RESTful APIs and is designed with a responsive UI for optimal user 
//             experience across devices.
//           </p>
//           <div className="flex justify-center">
//             <img src={studentportel} 
//                  alt="Student Portal" 
//                  className="h-58 w-56 object-cover "
//             />  
//           </div>
//         </div>
        
//         {/* Project 3: Temperature Converter */}
//         <div className="project max-w-4xl mx-auto p-6 bg-black rounded-lg shadow-lg mb-6">
//           <h3 className="text-2xl font-semibold text-white mb-2">Project 3: Temperature Converter</h3>
//           <p className="text-white">
//             A web application that converts temperatures between Celsius, Fahrenheit, and Kelvin. 
//             The app features an intuitive interface that allows users to input temperature values 
//             and select the desired conversion scale. It is built using React and provides real-time 
//             updates as users input data.
//           </p>
//           <div className="flex justify-center">
//             <img src={tempConverterPic} 
//                  alt="Temperature Converter" 
//                  className="h-58 w-56 object-cover "
//             />  
//           </div>
//         </div>
        
//         {/* Project 4: Vehicle Service System */}
//         <div className="project max-w-4xl mx-auto p-6 bg-black rounded-lg shadow-lg mb-6">
//           <h3 className="text-2xl font-semibold text-white mb-2">Project 4: Vehicle Service System</h3>
//           <p className="text-white">
//             A robust vehicle service system that facilitates scheduling maintenance and repairs for vehicles. 
//             Built with Python, HTML, CSS, and JavaScript, this system allows users to book appointments, 
//             track service history, and receive notifications for upcoming services. The application features a 
//             clean and responsive design, ensuring ease of use on various devices.
//           </p>
//           <div className="flex justify-center">
//             <img src={vehicleServicePic} 
//                  alt="Vehicle Service System" 
//                  className="h-58 w-56 object-cover "
//             />  
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Project;
import React from 'react';
import calvupic from './calculator.png';
import studentportel from "./sutdent.jpg";
import tempConverterPic from './temprature.jpg'; 
import vehicleServicePic from './vehical.jpg'; 

const projects = [
  {
    title: "Calculator",
    desc: "A simple yet powerful calculator application that performs basic arithmetic operations such as addition, subtraction, multiplication, and division. The calculator features a user-friendly interface, built using HTML, CSS, and JavaScript, making it accessible on both desktop and mobile devices.",
    img: calvupic,
    alt: "Calculator",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "#"
  },
  {
    title: "Student Portal",
    desc: "A comprehensive student portal built with Spring Boot for the backend and React for the frontend. This portal allows students to manage their profiles, and communicate with instructors. The application incorporates RESTful APIs and is designed with a responsive UI for optimal user experience across devices.",
    img: studentportel,
    alt: "Student Portal",
    tech: ["Spring Boot", "React", "REST API","javascript","java","HTML","CSS"],
    link: "#"
  },
  {
    title: "Temperature Converter",
    desc: "A web application that converts temperatures between Celsius, Fahrenheit, and Kelvin. The app features an intuitive interface that allows users to input temperature values and select the desired conversion scale. It is built using React and provides real-time updates as users input data.",
    img: tempConverterPic,
    alt: "Temperature Converter",
    tech: ["React", "JavaScript", "CSS"],
    link: "#"
  },
  {
    title: "Vehicle Service System",
    desc: "A robust vehicle service system that facilitates scheduling maintenance and repairs for vehicles. Built with Python, HTML, CSS, and JavaScript, this system allows users to book appointments, track service history, and receive notifications for upcoming services. The application features a clean and responsive design, ensuring ease of use on various devices.",
    img: vehicleServicePic,
    alt: "Vehicle Service System",
    tech: ["Python", "HTML", "CSS", "JavaScript"],
    link: "#"
  }
];

const Project = () => {
  return (
    <>
      <section id="projects" className="bg-gradient-to-br from-pink-200 via-purple-100 to-blue-100 py-16 px-4 min-h-screen">
        <h2 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 mb-12 drop-shadow-lg tracking-wide">
          My Projects
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="group bg-black/80 rounded-3xl shadow-2xl border-t-8 border-pink-400 hover:border-blue-400 transition-all duration-350 p-8 flex flex-col items-center hover:scale-[1.03]"
            >
              <div className="w-full flex justify-center mb-6">
                <img
                  src={proj.img}
                  alt={proj.alt}
                  className="h-44 w-44 object-cover rounded-2xl border-4 border-pink-300 shadow-lg group-hover:scale-105 transition-transform duration-350 bg-white"
                />
              </div>
              <h3 className="text-2xl font-bold text-pink-300 group-hover:text-blue-300 transition-colors duration-200 mb-2 text-center">
                {proj.title}
              </h3>
              <p className="text-white text-center mb-4">{proj.desc}</p>
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                {proj.tech.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="bg-gradient-to-r from-pink-400 to-blue-400 text-white px-3 py-1 rounded-full text-xs font-semibold shadow"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={proj.link}
                className="mt-auto inline-block px-6 py-2 rounded-full bg-gradient-to-r from-blue-400 to-pink-400 text-white font-bold shadow-lg hover:scale-105 hover:bg-gradient-to-l transition-transform duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Project;