// import React, { useState } from 'react';
// import Logo from '../assets/icons8-avengers-48.png';
// import '../App.css'

// const NavBar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen((prevState) => !prevState);
//   };

//   return (
//     <nav className="fixed top-0 left-0 w-full bg-black shadow-lg z-50 border-b border-white border-opacity-20">
//       <div className="container mx-auto px-4 py-3">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center">
//             <img src={Logo} alt="Logo" className="w-10 h-10 mr-2" />
//             <h1 className="text-white font-semibold text-xl glow-animation fonty">ABDUL BASITH</h1>
//           </div>
//           <div className="md:hidden">
//             <button
//               onClick={toggleMenu}
//               className="text-white focus:outline-none focus:ring-2 focus:ring-white"
//               aria-label="Toggle Menu"
//             >
//               {isMenuOpen ? (
//                 <svg
//                   className="w-6 h-6"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   className="w-6 h-6"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h16m-7 6h7"
//                   />
//                 </svg>
//               )}
//             </button>
//           </div>
//           <ul className={`hidden md:flex space-x-5 text-white font-mono md:flex-row ${isMenuOpen ? 'flex' : 'hidden'}`}>
//             <li className="cursor-pointer hover:text-red-500">Home</li>
//             <li className="cursor-pointer hover:text-red-500">About</li>
//             <li className="cursor-pointer hover:text-red-500">Service</li>
//             <li className="cursor-pointer hover:text-red-500">Project</li>
//             <li className="cursor-pointer hover:text-red-500">Contact</li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;

import React, { useState } from 'react';
import { Link } from 'react-scroll';
import Logo from '../assets/icons8-avengers-48.png';
import '../App.css';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black shadow-lg z-50 border-b border-white border-opacity-20">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src={Logo} alt="Logo" className="w-10 h-10 mr-2" />
            <h1 className="text-white font-semibold text-xl glow-animation fonty">ABDUL BASITH</h1>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
          <ul className={`hidden md:flex space-x-5 text-white font-mono md:flex-row ${isMenuOpen ? 'flex' : 'hidden'}`}>
            <li className="cursor-pointer hover:text-red-500">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="cursor-pointer hover:text-red-500">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li className="cursor-pointer hover:text-red-500">
              <Link
                to="service"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setIsMenuOpen(false)}
              >
                Service
              </Link>
            </li>
            <li className="cursor-pointer hover:text-red-500">
              <Link
                to="project"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setIsMenuOpen(false)}
              >
                Project
              </Link>
            </li>
            <li className="cursor-pointer hover:text-red-500">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
