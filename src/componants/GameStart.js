
import React from "react";
import { Link, NavLink } from "react-router-dom";
// import auth from "./auth";

export default function GameStart() {
  return (
    <div>
          <h1>
          <div class="GO-info-h1" id="GO-info h1">Collisions Detect</div>
          <p class="p">Are you ready to play?</p>
          <Link to="/signin" class="buttonPA" id="buttonPA">Sign in to play</Link>
          {/* <a href="SignIn.js" class="buttonPA" id="buttonPA">Sign in to play</a> */}
          <p class="p">Or</p>
          <NavLink to="/play" class="buttonPA" id="buttonPA">Play as Guest</NavLink>
          {/* <a href="./play" class="buttonPA" id="buttonPA">Play as Guest</a> */}
          
      </h1>
    </div>
  );
}