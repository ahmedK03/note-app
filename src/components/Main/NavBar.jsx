import { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink, useLocation } from "react-router-dom";

const logOut = () => localStorage.clear();

const NavBar = () => {
  const userLocation = useLocation();
  console.log(userLocation.pathname);
  return (
    <Fragment>
      <Navbar bg="dark" expand="lg">
        <Container>
          <NavLink to="/">
            <Navbar.Brand>Notes</Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {userLocation.pathname !== "/home" && (
                <Fragment>
                  <NavLink to="/register" className="nav-link">
                    Register
                  </NavLink>
                  <NavLink className="nav-link" to="/login">
                    Login
                  </NavLink>
                </Fragment>
              )}
              {userLocation.pathname === "/home" && (
                <NavLink onClick={logOut} className="nav-link" to="/register">
                  Logout
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default NavBar;
