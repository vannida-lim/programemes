import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <h1 className="header">Programemes</h1>
      <div className="ui sticky"> 
        <div className="ui top attached inverted teal menu">
          <NavLink className="item" to="/"> Home </NavLink>
          <div className="right menu">
            <NavLink className="item" to="/submit"> Submit a Meme </NavLink>
            <NavLink className="item" to="/profile"> Profile </NavLink>
            <NavLink className="item" to="/login"> Login </NavLink>
            <NavLink className="item" to="/signup"> Signup </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;