import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import NavLinks from '../data/NavLinks';

export default function NavBar(props) {

    return(
            <Navbar className="border-bottom sticky-top" bg="white" expand="lg">
                <Navbar.Brand href="/"> Leare Song</Navbar.Brand> 
                <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
                <Navbar.Collapse id="navbar-toggle">
                <Nav className="ml-auto">
                    {NavLinks.map((navitem) => <Link className="nav-link" to={navitem.path}>{navitem.title}</Link>)}
                </Nav>
                </Navbar.Collapse>
            </Navbar>
          );

}