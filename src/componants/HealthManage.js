import { useState, useEffect } from 'react';
import '../styles/healthbar.css'; // Ensure you have the CSS for styling

const HealthManage = () => {
  const [health, setHealth] = useState(100); // Initial health set to 100

  const handleClick = () => {
    setHealth(prevHealth => Math.max(prevHealth - 5, 0)); // Decrease health by 5, but not below 0
  };

  useEffect(() => {
    localStorage.setItem('health', health);
  }, [health]);

  return (
    <div>
      
      <div className="health" id="health">Health: {health}</div>
      <button className="button" onClick={handleClick}>Health-Stat</button>
      <div className="health-bar" style={{ width: `${health}%` }}></div>
      <div className="bar" id="bar"></div>
    </div>
  );
};

export default HealthManage;
