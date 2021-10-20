import React, { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import Slide from "../Slide/Slide";
import logo from "../../images/logo.png";
import { UserContext } from "../../App";

const Navigation = ({ slide, color }) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const signOut = () => {
    setLoggedInUser({});
  };

  return (
    <>
      <Navbar expand="lg" className={color}>
        <Link className="navbar-brand mx-2 text-light" to="/">
          <img src={logo} alt="logo" className="w-75" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <NavLink className="nav-link mx-2 text-light" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link mx-2 text-light" to="/doctors">
              Doctors
            </NavLink>
            <NavLink className="nav-link mx-2 text-light" to="/services">
              Services
            </NavLink>
            <NavLink className="nav-link mx-2 text-light" to="/contact-us">
              Contact Us
            </NavLink>
            {loggedInUser.name ? (
              <button className="btn mx-1 bg-warning text-center rounded">
                {loggedInUser.name}
              </button>
            ) : (
              ""
            )}
            {!loggedInUser.name ? (
              <Link
                className="nav-link mx-2 bg-dark text-light text-center rounded px-5"
                to="/login"
              >
                Login
              </Link>
            ) : (
              <button
                className="btn mx-1 bg-danger text-light text-center rounded px-3"
                onClick={signOut}
              >
                SignOut
              </button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {slide && <Slide />}
    </>
  );
};

export default Navigation;
