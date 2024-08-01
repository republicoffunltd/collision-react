

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GameStart from "./componants/GameStart.js";
import GamePlay from "./componants/GamePlay.js";
import GameOver from "./componants/GameOver.js";
import SignIn from './componants/SignIn.js';

import "./styles/style.css";

function App() {
  return(
  <div className="App">
    <Routes>
      <Route path="/" element={<GameStart />} />
      <Route path="/play" element={<GamePlay />} />
      <Route path="/over" element={<GameOver />} />
      <Route path="/signin" element={<SignIn />} />

    </Routes>

  </div>
)};

export default App;
