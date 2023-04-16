import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </nav>
      );
    } else {
      return (
            <ul className="nav mx-4">
              <li className="nav-item">
                <Link className="text-light p-2" to="/signup">
                  Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link className="text-light p-2" to="/login">
                  Login
                </Link>
              </li>
            </ul>
      );
    }
  }

  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-primary">
      <h1>
        <Link to="/" className="navbar-brand">
          <span role="img" aria-label="shopping bag">🛍️</span>
          TBB
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;