import React from "react";

export default () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <h1 className="is-size-4 has-text-light">Cumulus</h1>
          </a>
          <span className="navbar-burger burger" data-target="navbarMenu">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenu" className="navbar-menu">
          <div className="navbar-end">
            <div className="tabs is-right">
              <ul>
                <li className="is-active">
                  <a>Map</a>
                </li>
                <li>
                  <a href="#">Archive</a>
                </li>
                <li>
                  <a href="#">Docs</a>
                </li>
                <li>
                  <a href="">Help</a>
                </li>
              </ul>
              <span className="navbar-item">
                <button className="button is-white">
                  <span title="Login">Login</span>
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
