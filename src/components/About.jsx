import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
// import image from '../assets/basith.jpg'

const About = () => {
  const threeContainer = useRef(null);

  useEffect(() => {
    let scene, camera, renderer, balls, ballColors;
    let container = threeContainer.current;
    let mouse = new THREE.Vector2();

    const init = () => {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 5;

      // Create the renderer with alpha: true to make the background transparent
      renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0); // Set background transparency
      container.appendChild(renderer.domElement);

      balls = [];
      ballColors = [0xff0000, 0x00ff00, 0x0000ff, 0xffff00, 0xff00ff, 0x00ffff];

      // Create bouncing balls with random positions and colors
      for (let i = 0; i < 6; i++) {
        const ballGeometry = new THREE.SphereGeometry(0.2, 16, 16);
        const ballMaterial = new THREE.MeshBasicMaterial({ color: ballColors[i] });
        const ball = new THREE.Mesh(ballGeometry, ballMaterial);
        ball.position.set((Math.random() - 0.5) * 5, (Math.random() - 0.5) * 5, (Math.random() - 0.5) * 5);
        ball.velocity = new THREE.Vector3((Math.random() - 0.5) * 0.05, (Math.random() - 0.5) * 0.05, (Math.random() - 0.5) * 0.05);
        scene.add(ball);
        balls.push(ball);
      }

      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('click', handleMouseClick);

      animate();
    };

    const handleMouseMove = (event) => {
      // Update the mouse position based on the container's size
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const handleMouseClick = (event) => {
      // Create a new object at the clicked position
      const ballGeometry = new THREE.SphereGeometry(0.2, 16, 16);
      const ballMaterial = new THREE.MeshBasicMaterial({ color: ballColors[Math.floor(Math.random() * ballColors.length)] });
      const ball = new THREE.Mesh(ballGeometry, ballMaterial);
      ball.position.set(mouse.x * 3, mouse.y * 3, (Math.random() - 0.5) * 5);
      ball.velocity = new THREE.Vector3((Math.random() - 0.5) * 0.05, (Math.random() - 0.5) * 0.05, (Math.random() - 0.5) * 0.05);
      scene.add(ball);
      balls.push(ball);
    };

    const animate = () => {
      requestAnimationFrame(animate);

      // Move the bouncing balls
      balls.forEach((ball) => {
        ball.position.add(ball.velocity);

        // Bounce the balls off the walls
        if (ball.position.x < -2.5 || ball.position.x > 2.5) {
          ball.velocity.x *= -1;
        }
        if (ball.position.y < -2.5 || ball.position.y > 2.5) {
          ball.velocity.y *= -1;
        }
        if (ball.position.z < -2.5 || ball.position.z > 2.5) {
          ball.velocity.z *= -1;
        }
      });

      // Add an animation to the balls when the mouse moves
      balls.forEach((ball) => {
        ball.velocity.add(new THREE.Vector3(mouse.x * 0.01, mouse.y * 0.01, 0));
      });

      renderer.render(scene, camera);
    };

    init();

    // Clean up
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('click', handleMouseClick);
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="bg-black min-h-screen pt-12 md:pt-20 overflow-x-hidden" id="about">
      <div className="flex flex-col md:flex-row items-center justify-center md:space-x-16">
        <div className="w-full md:w-1/2" ref={threeContainer}>
          {/* Bouncing balls will be rendered here */}
        </div>
        <div className="w-full md:w-1/2 px-4 md:px-8 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6  text-red-600 font-serif">About Me</h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-4 font-bold font-mono  text-green-600">
            Hello! I am Basith, a passionate Full Stack Web Developer based in Tamil Nadu, India.
            I hold a Bachelor's Degree in Computer Applications (BCA) and a Master's Degree in Computer Applications (MCA).
          </p>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 font-semibold text-green-600">
            I have a strong knowledge of React, Node.js, and Python. Add some additional Trending Technolgies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
