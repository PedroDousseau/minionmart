import './MyNavbar.css';
import React from "react";
import {Navbar, Nav} from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

export default function MyNavbar() {
  return (
    <div className="navbar-bg">
      <Navbar className="container">
        <LinkContainer to="/">
          <Navbar.Brand>A.U.M</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle />

        <Navbar.Collapse className="justify-content-end">
        <Nav>
          <LinkContainer to="/login">
            <Nav.Link>Login</Nav.Link>
          </LinkContainer>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}