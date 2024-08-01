
import { useRef, useEffect, useState } from 'react';

const Timer = ({ initialTime = 30, getTime}) => {
    const [countDown, setCountDown] = useState(initialTime);
    const endTimeRef = useRef(Date.now() + initialTime * 1000);
  
    useEffect(() => {
      const updateTime = () => {
        const remaining = endTimeRef.current - Date.now();
        if (remaining <= 0) {
          setCountDown(0);
          // Handle game over logic here
          return;
        }
        setCountDown(Math.floor((remaining % (1000 * 60)) / 1000));
      };
  
      const timerId = setInterval(updateTime, 1000);
  
      return () => clearInterval(timerId);
    }, []);

    if (countDown === 0) {
        window.location.href = '/over';
        console.log('Game Over');
    }
    if (typeof getTime === 'function') {
      getTime(countDown); // Update the parent component's state if the function is provided
    }

    return countDown;
    
};
export default Timer;