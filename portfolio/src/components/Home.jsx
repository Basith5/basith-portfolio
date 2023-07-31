import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const Home = () => {
  const threeContainer = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    let scene, camera, renderer, geometry, material, mesh, objects;
    let container = threeContainer.current;

    const init = () => {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 5;

      // Create the renderer with alpha: true to make the background transparent
      renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0); // Set background transparency
      container.appendChild(renderer.domElement);

      objects = [];

      // Create moving small objects (spheres) in the background
      for (let i = 0; i < 100; i++) {
        geometry = new THREE.SphereGeometry(0.05, 8, 8);
        material = new THREE.MeshBasicMaterial({ color: new THREE.Color(`hsl(${Math.random() * 360}, 100%, 50%)`) });
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10
        );
        scene.add(mesh);
        objects.push(mesh);
      }

      // Detect mouse clicks on the 3D objects
      container.addEventListener('click', handleMouseClick);

      animate();
    };

    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate and move the small objects (spheres) in the background
      objects.forEach((obj, index) => {
        obj.rotation.x += 0.01;
        obj.rotation.y += 0.01;
        obj.position.x += (Math.random() - 0.5) * 0.05;
        obj.position.y += (Math.random() - 0.5) * 0.05;

        // Move objects along z-axis with changing colors
        obj.position.z += 0.1;
        if (obj.position.z > 10) {
          obj.position.z = -10;
          obj.material.color.set(new THREE.Color(`hsl(${Math.random() * 360}, 100%, 50%)`));
        }
      });

      renderer.render(scene, camera);
    };

    const handleMouseClick = (event) => {
      // Raycasting to check if any object is clicked
      const raycaster = new THREE.Raycaster();
      const mouse = new THREE.Vector2();

      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);

      const intersects = raycaster.intersectObjects(scene.children);

      if (intersects.length > 0) {
        // Animate the clicked object by changing its scale
        const clickedObj = intersects[0].object;
        clickedObj.scale.set(2, 2, 2);

        // Reset the scale after a brief delay
        setTimeout(() => {
          clickedObj.scale.set(1, 1, 1);
        }, 500);
      } else {
        // Handle the click on the webpage, start the "A.ABDUL BASITH" text animation
        setIsAnimating(true);
        setTimeout(() => {
          setIsAnimating(false);
        }, 1000);
      }
    };

    init();

    // Clean up
    return () => {
      container.removeEventListener('click', handleMouseClick);
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="relative overflow-x-hidden" id="home">
      <div className="flex justify-center items-center h-screen bg-black text-white" ref={threeContainer}>
        {/* Empty container for the 3D animation */}
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-green-500 mb-6">Hi Guys, I'm</h1>
        <h2 className="text-4xl sm:text-6xl md:text-8xl font-semibold text-white mb-4 fonty">
          <span className={isAnimating ? 'animated-text' : ''}>
            <span className='text-red-700'>ABDUL</span>BASITH
          </span>
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-green-500 font-mono">I'm Full Stack Web Developer || 3D modeller</p>
      </div>
    </div>
  );
};

export default Home;