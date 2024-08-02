// src/ThreeScene.js
import React, { useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import CollisionDetection from './CollisionDetection';
import Timer from './Timer';
import OutOfBoundsCheck from './OutOfBounds';
// import HealthManage from './HealthManage.js';
import '../styles/healthbar.css';



const ThreeScene = () => {
  const cube1Ref = useRef();
  const cube2Ref = useRef();
  const ball1Ref = useRef();
  const [hitCount, setHitCount] = useState(0);
  const [health, setHealth] = useState(100);
  const [time, setTime] = useState(30);
  
  
// HealthManage
  const reduceHealth = () => {
    setHealth(prevHealth => Math.max(prevHealth - 5, 0)); // Decrease health by 5, but not below 0
  };

  useEffect(() => {
    localStorage.setItem('health', health);
    setHealth(health);
  }, [health]);

  if (health === 0) {
    console.log('Game Over');
    window.location.href = '/over';
  }

  // Animation loop
  // useFrame(() => {
  //   // Add any animations here
  //   cube1Ref={cube1Ref}; 
  //   cube2Ref={cube2Ref};
  // });// src/App.js

  //KEY CONTROLS ***************************************
  //document is the whole page
  //onkeydown is an event that happens when a key is pressed
  //e is the event 
  //function is what happens when the event happens
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!cube2Ref.current) return;

      switch (e.key) {
        case 'w':
        case 'ArrowUp':
          cube2Ref.current.position.z -= 0.8;
          break;
        case 's':
        case 'ArrowDown':
          cube2Ref.current.position.z += 0.8;
          break;
        case 'a':
        case 'ArrowLeft':
          cube2Ref.current.position.x -= 0.8;
          break;
        case 'd':
        case 'ArrowRight':
          cube2Ref.current.position.x += 0.8;
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  
  return (
    
    <>
          {/* //Timer */}
    <div class="time" id="countdown">Time:{time}</div>
    {/* //Score  */}
    <div class="score" id="score">Score: {hitCount} </div>
    {/* //Health */}
    <div className="health" id="health">Health: {health}</div>
    <div className="health-bar-container">
      <div className="health-bar-background"></div>
      <div className="health-bar-foreground" style={{ width: `${health}%` }}></div>
    </div>
    <button className="button" onClick={reduceHealth}>Health-Stat</button>
    


    <Canvas>
      <ambientLight intensity={1} castShadow/>
      <pointLight position={[10, 10, 10]} />
      <directionalLight position={[0, 10, 0]} intensity={1} castShadow />
      
      <OrbitControls />
      <mesh ref={cube1Ref} position={[2, 0.5, 1]} castShadow receiveShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="red" />
      </mesh>
      <mesh ref={cube2Ref} position={[-2, 0.5, 1]} castShadow receiveShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="yellow" />
      </mesh>
      <mesh ref={ball1Ref} position={[0, 0.75, 3]} castShadow receiveShadow>
        <sphereGeometry args={[0.75, 32, 32]} />
        <meshStandardMaterial color="blue" />
      </mesh>
      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#6ffaa0" />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]} receiveShadow>
        <circleGeometry args={[3, 16]} />
        <meshBasicMaterial color="#606f60" side={THREE.DoubleSide} />
      </mesh>
      <Timer  initialTime={60} getTime={setTime}/>
      <CollisionDetection cube1Ref={cube1Ref} cube2Ref={cube2Ref} onHitCountChange={setHitCount} />;
      <OutOfBoundsCheck cube2Ref={cube2Ref} circleBoundsRef={ball1Ref} circleBoundsRadius={3} />;
      
    </Canvas>

      

    </>
    
  );
};

export default ThreeScene;





