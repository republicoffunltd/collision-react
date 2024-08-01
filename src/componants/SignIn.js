

import React from "react";
import { Link, NavLink } from "react-router-dom";
import { userSignUp } from "./auth";
import { userSignIn } from "./auth";


export  function SignIn() {
  return (
    <>
    <div className="signin">
            <div class="GO-info-h1" id="GO-info">Collisions Detect</div>
                <div id="authForm"></div>
                <h2 class="p">Sign Up or Sign In</h2>
                <input type="email" placeholder="email" id="userEmail"></input>
                <input type="password" placeholder="password" id="userPassword"></input>
                <p></p>
                {/* <button class="p" id="signUpButton" auth={true}>Sign Up</button> */}
                <Link to="/play" class="buttonPA" id="buttonPA" onClick={userSignUp}>SignUp</Link>
                <p></p>
                {/* <button class="p" id="signInButton">Sign In</button> */}
                <Link to="/play" class="buttonPA" id="buttonPA" onClick={userSignIn}>Sign In</Link>
            
            <div class="body">
                <h3 class="p">This is top secret information that you can only see if</h3>
                <h1 class="p">AUTHENTICATED</h1>
                <Link to="/" class="buttonPA" id="buttonPA">Sign Out</Link>
                {/* <button class="p" id="signOutButton">Sign Out</button> */}
            </div>  
    </div>  
    </>
  )
}
export default SignIn;




