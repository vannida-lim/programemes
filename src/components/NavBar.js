import React from 'react';
import { NavLink } from 'react-router-dom';
// import { Sticky } from 'semantic-ui-react';

const NavBar = () => {
  return (
    <div>
      {/* <Sticky> */}
        <div className="ui top attached inverted blue menu">
          <h1 id="programemes">Programemes</h1>
          <NavLink className="item" to="/"> Home </NavLink>
          <div className="right menu">
            <NavLink className="item" to="/submit"> Submit a Meme </NavLink>
            <NavLink className="item" to="/profile"> Profile </NavLink>
            <NavLink className="item" to="/login"> Login </NavLink>
            <NavLink className="item" to="/signup"> Signup </NavLink>
          </div>
        </div>
      {/* </Sticky> */}
    </div>
  );
}

export default NavBar;