
import { useEffect, useState } from 'react';
import {useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// const hitCount =0;

const CollisionDetection = ({cube1Ref, cube2Ref, onHitCountChange }) => {

    const [isColliding, setIsColliding] = useState(false);
    const [hitCount, setHitCount] = useState(0);
    
  
    useFrame(() => {
      if (cube1Ref.current && cube2Ref.current) {
        checkCollisions(cube1Ref.current, cube2Ref.current);
      }
    });
  
    const checkCollisions = (cube1, cube2) => {
      const cube1BB = new THREE.Box3().setFromObject(cube1);
      const cube2BB = new THREE.Box3().setFromObject(cube2);
  
      if (cube2BB.intersectsBox(cube1BB)) {
        if (!isColliding) {
          cube1.material.color.set(0xff0000);
          // setHitCount (prevCount => prevCount + 1);
          //*** */
          setHitCount((prevCount) => {
            const newCount = prevCount + 1;
            if (typeof onHitCountChange === 'function') {
              onHitCountChange(newCount); // Update the parent component's state if the function is provided
            }
            return newCount;
          });
          setIsColliding(true);
        }
      } else {
        if (isColliding) {
          console.log('cube1 and cube2 SEPARATED');
        }
        cube1.material.color.set(0xf00ff0);
        setIsColliding(false);
      }
    };
  
    useEffect(() => {
      localStorage.setItem('score', hitCount.toString());
    }, [hitCount]);
    console.log(hitCount);
  
    return hitCount;
  };
  export default CollisionDetection;


 