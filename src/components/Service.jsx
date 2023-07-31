import React from 'react';
import pix from '../assets/icons8-avengers-48.png';
import node from '../assets/node.png';
import react from '../assets/react.svg';
import python from '../assets/python-seeklogo.com.svg';
import mysql from '../assets/mysql.png';
import prisma from '../assets/prisma.svg';
import blender from '../assets/blender-1.svg';
import three from '../assets/three-js-seeklogo.com.svg';
import '../App.css';

const Service = () => {
  return (
    <div className="relative overflow-x-hidden" id="service">
      <div className="flex justify-center items-center h-screen bg-black">
        {/* Placeholder for any other content you may want to add */}
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-red-600 mb-6 animate-fade-in">Our Services</h1>
        <div className="w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden border-4 animate-bounce">
          <img src={pix} alt="Avatar" className="w-full h-full object-cover" />
        </div>
        <p className="text-lg sm:text-xl md:text-2xl text-green-500 font-mono mb-4 animate-slide-up">
          My Skillsets Are
        </p>
        <div className="flex flex-wrap justify-center items-center space-x-4">
          <img
            src={react}
            alt="React"
            className="rounded-full bg-blue-600 w-24 h-24 p-5 m-2 transform hover:animate-bounce"
          />
          <img
            src={node}
            alt="Node.js"
            className="rounded-full bg-yellow-600 w-24 h-24 p-5 m-2 transform hover:animate-bounce"
          />
          <img
            src={python}
            alt="Python"
            className="rounded-full bg-green-600 w-24 h-24 p-5 m-2 transform hover:animate-bounce"
          />
          <img
            src={mysql}
            alt="MySQL"
            className="rounded-full bg-blue-800 w-24 h-24 p-5 m-2 transform hover:animate-bounce"
          />
          <img
            src={prisma}
            alt="Prisma"
            className="rounded-full bg-gray-400 w-24 h-24 p-5 m-2 transform hover:animate-bounce"
          />
          <img
            src={blender}
            alt="Blender"
            className="rounded-full bg-orange-800 w-24 h-24 p-5 m-2 transform hover:animate-bounce"
          />
          <img
            src={three}
            alt="three"
            className="rounded-full bg-purple-800 w-24 h-24 p-5 m-2 transform hover:animate-bounce"
          />
        </div>
      </div>
    </div>
  );
};

export default Service;
