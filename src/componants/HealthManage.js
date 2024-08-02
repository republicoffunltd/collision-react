import { useState, useEffect } from 'react';
import '../styles/healthbar.css'; // Ensure you have the CSS for styling

const HealthManage = (onHealthChange) => {
  const [health, setHealth] = useState(100); // Initial health set to 100

  const handleClick = () => {
    setHealth(prevHealth => Math.max(prevHealth - 5, 0)); // Decrease health by 5, but not below 0
  };

  useEffect(() => {
    localStorage.setItem('health', health);
    if (typeof onHealthChange === 'function') {
      onHealthChange(health); // Update the parent component's state if the function is provided
    }
  }, [health]);

  return 
  // (
    // <div>
      
    //   <div className="health" id="health">Health: {health}</div>
    //   <button className="button" onClick={handleClick}>Health-Stat</button>
    //   <div className="health-bar" style={{ width: `${health}%` }}></div>
    //   <div className="bar" id="bar"></div>
    // </div>
  // );
};

export default HealthManage;
