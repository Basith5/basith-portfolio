// import React from 'react';
// import * as THREE from 'three';

// const Projects = () => {
//   const projectRefs = React.useRef([]);
//   const [isMounted, setIsMounted] = React.useState(false);

//   React.useEffect(() => {
//     setIsMounted(true);
//     const scenes = projectRefs.current.map((ref) => {
//       const scene = new THREE.Scene();
//       const camera = new THREE.PerspectiveCamera(
//         75,
//         ref.clientWidth / ref.clientHeight,
//         0.1,
//         1000
//       );
//       const renderer = new THREE.WebGLRenderer({ antialias: true });
//       renderer.setSize(ref.clientWidth, ref.clientHeight);
//       ref.appendChild(renderer.domElement);

//       const geometry = new THREE.BoxGeometry();
//       const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//       const cube = new THREE.Mesh(geometry, material);
//       scene.add(cube);

//       camera.position.z = 5;

//       const animate = () => {
//         if (!isMounted) return;
//         requestAnimationFrame(animate);

//         // Add your animation logic here

//         renderer.render(scene, camera);
//       };

//       animate();

//       return scene;
//     });

//     return () => {
//       setIsMounted(false);
//       scenes.forEach((scene) => {
//         scene.dispose();
//       });
//     };
//   }, [isMounted]);

//   return (
//     <div className="relative overflow-hidden">
//       <div className="flex justify-center items-center h-screen bg-black">
//         {projectRefs.current.map((ref, index) => (
//           <div key={index} ref={(el) => (projectRefs.current[index] = el)} className="w-96 h-96 mx-4" />
//         ))}
//       </div>
//       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
//         <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-red-600 mb-6">Projects</h1>
//         <div className="flex justify-center items-center space-x-8">
//           <div className="border border-gray-400 rounded-lg p-5 w-96">
//             <h2 className="text-xl font-semibold mb-2 text-green-500">JOB PORTAL</h2>
//             <p className="text-gray-600 mb-4">The Job Portal is an advanced online platform that aims to bridge the gap between job seekers and employers,
//              making the process of finding a job and identifying the right candidates for a job in companies efficient and effective. 
//              This user-friendly web application provides a seamless experience for both job seekers and employers, 
//             offering a wide range of features and functionalities.</p>
//             <a
//               href="https://github.com/your-github-repo-url-for-project-1"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600"
//             >
//               View
//             </a>
//           </div>
//           <div className="border border-gray-400 rounded-lg p-5 w-96">
//             <h2 className="text-xl font-semibold mb-2 text-green-500">E-Library</h2>
//             <p className="text-gray-600 mb-4">The E-Library is a digital platform designed to provide a modern and convenient way to access a vast collection of books, 
//             articles, research papers, and educational resources. This innovative virtual library is accessible to users from any location,
//              offering a seamless reading and learning experience through various digital devices.</p>
//             <a
//               href="https://github.com/your-github-repo-url-for-project-2"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600"
//             >
//               View
//             </a>
//           </div>
//           <div className="border border-gray-400 rounded-lg p-5 w-96">
//             <h2 className="text-xl font-semibold mb-2 text-green-500">Attendance Management</h2>
//             <p className="text-gray-600 mb-4">The Attendance Management System is a sophisticated and automated solution designed to streamline and optimize the process of tracking and managing attendance for educational institutions and organizations.
//             This system offers a comprehensive set of features to ensure accurate, efficient,
//              and transparent attendance management.</p>
//             <a
//               href="https://github.com/your-github-repo-url-for-project-3"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600"
//             >
//               View
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;

// import React from 'react';

// const Project = () => {
//   const projectData = [
//     {
//       title: 'JOB PORTAL',
//       description: 'The Job Portal is an advanced online platform that aims to bridge the gap between job seekers and employers, making the process of finding a job and identifying the right candidates for a job in companies efficient and effective. This user-friendly web application provides a seamless experience for both job seekers and employers, offering a wide range of features and functionalities.',
//       githubLink: 'https://github.com/your-github-repo-url-for-project-1'
//     },
//     {
//       title: 'E-Library',
//       description: 'The E-Library is a digital platform designed to provide a modern and convenient way to access a vast collection of books, articles, research papers, and educational resources. This innovative virtual library is accessible to users from any location, offering a seamless reading and learning experience through various digital devices.',
//       githubLink: 'https://github.com/your-github-repo-url-for-project-2'
//     },
//     {
//       title: 'Attendance Management',
//       description: 'The Attendance Management System is a sophisticated and automated solution designed to streamline and optimize the process of tracking and managing attendance for educational institutions and organizations. This system offers a comprehensive set of features to ensure accurate, efficient, and transparent attendance management.',
//       githubLink: 'https://github.com/your-github-repo-url-for-project-3'
//     },
//     // Add more project data here
//   ];

//   return (
//     <div className="relative overflow-hidden">
//       <div className="flex justify-center items-center h-screen bg-black flex-wrap">
//         {projectData.map((project, index) => (
//           <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-4">
//             <div className="border border-gray-400 rounded-lg p-5 h-full">
//               <h2 className="text-xl font-semibold mb-2 text-green-500">{project.title}</h2>
//               <p className="text-gray-600 mb-4">{project.description}</p>
//               <a
//                 href={project.githubLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600"
//               >
//                 View
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Project;

import React from 'react';

const Project = () => {
  const projectData = [
    {
      title: 'JOB PORTAL',
      description: 'The Job Portal is an advanced online platform that aims to bridge the gap between job seekers and employers, making the process of finding a job and identifying the right candidates for a job in companies efficient and effective. This user-friendly web application provides a seamless experience for both job seekers and employers, offering a wide range of features and functionalities.',
      githubLink: 'https://github.com/Basith5/jobportal'
    },
    {
      title: 'E-Library',
      description: 'The E-Library is a digital platform designed to provide a modern and convenient way to access a vast collection of books, articles, research papers, and educational resources. This innovative virtual library is accessible to users from any location, offering a seamless reading and learning experience through various digital devices.',
      githubLink: 'https://github.com/Basith5/elibrary'
    },
    {
      title: 'Attendance Management',
      description: 'The Attendance Management System is a sophisticated and automated solution designed to streamline and optimize the process of tracking and managing attendance for educational institutions and organizations. This system offers a comprehensive set of features to ensure accurate, efficient, and transparent attendance management.',
      githubLink: 'https://github.com/Basith5/elibrary'
    },
    {
      title: 'Hotel Booking',
      description: 'The Hotel Booking System is an intuitive and user-friendly platform that allows travelers to find and book their ideal hotels effortlessly. Whether you are planning a relaxing getaway, a business trip, or a family vacation, our system provides a wide selection of hotels to suit your needs and budget. With our easy-to-use search and booking process, you can secure your accommodation in just a few clicks.',
      githubLink: 'https://github.com/Basith5/jobportal'
    },    
    {
      title: 'College Website',
      description: 'The College Website is a modern and informative platform that serves as the digital gateway to our prestigious educational institution. This website provides a comprehensive overview of our college, showcasing our facilities, faculty, academic programs, and extracurricular activities. Prospective students can explore the admission process and gain insights into the vibrant campus life. Current students, parents, and faculty members can access important announcements, resources, and events through the website. With a user-friendly interface and responsive design, the College Website ensures seamless navigation and accessibility from various devices.',
      githubLink: 'https://github.com/Basith5/python-django-college'
    },
    {
      title: 'Warehouse Management System',
      description: 'The Warehouse Management System is a robust and efficient software designed to streamline and optimize the process of managing inventory and operations within a warehouse or distribution center. This system provides a comprehensive set of features to track inventory levels, manage stock movements, and automate order fulfillment processes. It includes real-time monitoring of stock levels, allowing warehouse managers to make data-driven decisions to ensure optimal stock levels and minimize stockouts. The system also supports barcode scanning and integration with barcode readers to expedite inventory tracking. With its user-friendly interface and reporting capabilities, the Warehouse Management System empowers businesses to enhance productivity, reduce operational costs, and improve overall efficiency in warehouse operations.',
      githubLink: 'https://github.com/Basith5/python-django-college'
    }    
    // Add more project data here
  ];

  return (
    <div className="relative overflow-hidden bg-black" id="project">
      <div className="flex justify-center items-center flex-wrap">
        {projectData.map((project, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="border border-gray-400 rounded-lg p-5 h-full">
              <h2 className="text-xl font-semibold mb-2 text-green-500">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                View
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;

