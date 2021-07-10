import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo.png";

export default function Navbar() {
  return (
    <nav className="nav row navbar sticky-top shadow p-2">
      <div className="col-8 col-md-6 d-flex align-items-center">
        <Link to="/" className="logo__con navbar-brand">
          <img src={logo} alt="logo" className="logo"></img>
        </Link>
        
      </div>
      <div className="col-4 col-md-6 d-flex justify-content-end">
        <div>
          <Link to="/books" className="link">
            Books
          </Link>
        </div>
        <div>
          <Link to="/about" className="link">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
