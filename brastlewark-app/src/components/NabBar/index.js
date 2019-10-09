import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom"
import logo from "../../assets/img/logo.png";
import Search from '../Search'
import "./index.sass";
import logic from "../../logic/index";

function NavBar({history, search}) {

  
  return (
    <>
      <header>
        <ul className='navbar'>
          <li className='logo'>
            <a className='navbar-item' onClick={() => history.push("/")}>
              <img className='logo' src={logo} />
            </a>
          </li>
          <li>
            <a className='navbar-item all_players navbar-item--clicked' onClick={() => history.push("/userList")}>
              All Players
            </a>
            </li>
          <li>
            <div className="navbar-item" onClick={() => history.push("/userList")}>
              <Search search={search}/>
            </div>
          </li>
          <li></li>
        </ul>
      </header>
    </>
  );
}

export default withRouter(NavBar)
