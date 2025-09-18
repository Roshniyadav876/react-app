import React from "react";
import "./Navbar.css";
import dice from '../../assets/dice.png'
function Navbar({playgame}) {
  return (
   <div className="container">
    <img src={dice} alt="dice" />
    <div className="box">
      <h1>DICE GAME</h1>
      <button onClick={playgame}>Play Now</button>
    </div>
   </div>
  );
}

export default Navbar;
