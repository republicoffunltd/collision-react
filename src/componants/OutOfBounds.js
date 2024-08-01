
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const OutOfBoundsCheck = ({ cube2Ref, circleBoundsRef, circleBoundsRadius }) => {
  useFrame(() => {
    if (cube2Ref.current && circleBoundsRef.current) {
      checkOutOfBounds(cube2Ref.current, circleBoundsRef.current);
    }
  });

  const checkOutOfBounds = (cube2, circleBounds) => {
    let cube2Pos = new THREE.Vector3();
    cube2.getWorldPosition(cube2Pos);
    const circleBoundsPos = new THREE.Vector3();
    circleBounds.getWorldPosition(circleBoundsPos);

    let distx = Math.abs(cube2Pos.x - circleBoundsPos.x);
    let distz = Math.abs(cube2Pos.z - circleBoundsPos.z);
    let distance = Math.sqrt(distx * distx + distz * distz);

    if (distance > circleBoundsRadius + 0.5) {
      console.log('Out of bounds');
      window.location.href = '/over';
    }
  };

  return null;
};
export default OutOfBoundsCheck;