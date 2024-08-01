import React, { useEffect } from 'react';
// import "./styles/style.css";
import { userSignOut, addScoreToFirestore } from "./auth";


export default function GameOver() {

//pulling the score data from the game page *********
useEffect(() => {
if (window.location.href.includes("/over", {addScoreToFirestore})) {
    
        const result = localStorage.getItem('score');
        const resultElement = document.getElementById('result');
        if (resultElement) {
        resultElement.textContent = `Result: ${result}`;
        }

        const energystat = localStorage.getItem('health');
        const energystatElement = document.getElementById('energystat');
        if(energystatElement) { 
        energystatElement.textContent = `EnergyStat: ${energystat}`;
        }
    }
}, []);

    return (
        <div className="gameover">
           <div className="z2">Collisions Detect Stats </div>
            <h1><div   className="GO-info-h1" id="GO-info">Game Over!!</div></h1>
            <p></p>
            <div className="result" id="result">Result: 0</div>
            <p></p>
            <div className="energystat" id="energystat">EnergyStat: 0</div>
            <p></p>
        <h1>     
            <a href="./play" className="buttonPA" id="buttonPA">Play Again?</a>
            <p></p>
            <a href="./" className="buttonPA" id="buttonPA" onClick={userSignOut}>Sign Out & End Play</a>
        </h1>
        </div>
    )
};
