

import React, { useState} from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { userSignUp } from "./auth";
import { userSignIn } from "./auth";


export  function SignIn() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const success = await userSignUp(email, password);
      if (success) {
        navigate('/play');
      } else {
        alert('Sign up failed. Please try again.');
      }
    } catch (error) {
      console.error('Sign up error:', error);
      alert('An error occurred during sign up.');
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const success = await userSignIn(email, password);
      if (success) {
        navigate('/play');
      } else {
        alert('Sign in failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Sign in error:', error);
      alert('An error occurred during sign in.');
    }
  };




  return (
    <>
         <div className="signin">
      <div className="GO-info-h1" id="GO-info">Collisions Detect</div>
      <div id="authForm"></div>
      <h2 className="p">Sign Up or Sign In</h2>
      <input 
        type="email" 
        placeholder="email" 
        id="userEmail" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
      />
      <input 
        type="password" 
        placeholder="password" 
        id="userPassword" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)}
      />
      <p></p>
      <button className="buttonPA" id="buttonPA" onClick={handleSignUp}>Sign Up</button>
      <p></p>
      <button className="buttonPA" id="buttonPA" onClick={handleSignIn}>Sign In</button>
      
      <div className="body">
        <h3 className="p">This is top secret information that you can only see if</h3>
        <h1 className="p">AUTHENTICATED</h1>
        <Link to="/" className="buttonPA" id="buttonPA">Sign Out</Link>
      </div>  
    </div>  

    </>
  )
}
export default SignIn;




