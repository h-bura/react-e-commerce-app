import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  const userData = localStorage.getItem("user");
  const user = userData ? JSON.parse(userData) : "";
  const loggedin = localStorage.getItem("loggedin") === "true";
  const state = useSelector((state) => state.handleCart);
  const handleLogout = () => {
    localStorage.removeItem("loggedin");
    navigate("/login");
    window.location.reload();
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            COLLECTIONS
          </NavLink>

          <div className=" navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
              {loggedin ? (
                <button
                  type="button"
                  onClick={handleLogout}
                  className="btn btn-outline-dark"
                >
                  <i className="fa fa-sign-in me-1 "></i>
                  Logout
                </button>
              ) : (
                <NavLink to="/login" className="btn btn-outline-dark">
                  <i className="fa fa-sign-in me-1 "></i>
                  Login
                </NavLink>
              )}
              {user.name && loggedin ? (
                <NavLink to="/profile" className="btn btn-outline-dark ms-2">
                  <i className="fa fa-user-plus me-1 "></i>
                  {user.name}
                </NavLink>
              ) : (
                <NavLink to="/register" className="btn btn-outline-dark ms-2">
                  <i className="fa fa-user-plus me-1 "></i>
                  Register
                </NavLink>
              )}

              <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart me-1 "></i>Cart (
                {state.length})
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
