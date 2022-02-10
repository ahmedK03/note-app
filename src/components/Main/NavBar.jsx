import { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import  Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {NavLink} from 'react-router-dom';



const NavBar = () => {


    return (
        <Fragment>
            <Navbar bg="dark" expand="lg">
                    <Container>
                        <NavLink to="/"><Navbar.Brand >Notes App</Navbar.Brand></NavLink>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink to="/register" className="nav-link">
                                Register
                            </NavLink>
                            <NavLink  className="nav-link" to="/login">
                                Login
                            </NavLink>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
            </Navbar>
        </Fragment>
    );
}

export default NavBar;