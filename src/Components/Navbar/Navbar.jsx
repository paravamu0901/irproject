import React from "react";
import "./Navbar.css";

export default function Navbar(props) {
  return (
    <div className="navbarMain">
      <div onClick={() => props.setNavState(true)} className="navbarComponent">
        Chat
      </div>
      <div onClick={() => props.setNavState(false)} className="navbarComponent">
        Analytics
      </div>
    </div>
  );
}
