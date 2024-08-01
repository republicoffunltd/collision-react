import React from 'react';
import ThreeScene from "./Scene.js";

export default function GamePlay() {
    // const [clicks, setClicks] = useState(100); // Initial health set to 100
    
    return (
        <div class="playgame">
            <group>
            <h1>Collisions Detect 3JS App</h1>
        </group>          
                <ThreeScene />         
        </div>
)};