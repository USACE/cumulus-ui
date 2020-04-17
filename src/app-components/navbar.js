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
                <li>
                  <a
                    target="_blank"
                    href="https://cwbi-cumulus-42795431.us-east-1.elb.amazonaws.com/admin/"
                  >
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
