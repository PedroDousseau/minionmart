import './MyNavbar.css';
import React from "react";
import {Navbar, Nav} from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import { useAuthContext } from '../../contexts/auth';
import { Auth } from "aws-amplify";

export default function MyNavbar() {

  const { isAuthenticated, setIsAuthenticated } = useAuthContext();

  async function handleLogout() {
    await Auth.signOut();
    setIsAuthenticated(false);
  }  

  return (
    <div className="navbar-bg">
      <Navbar className="container">
        <LinkContainer to="/">
          <Navbar.Brand>A.U.M</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle />

        <Navbar.Collapse className="justify-content-end">

          {isAuthenticated ? (
            <>
            <Nav>
              <LinkContainer to="/cart">
                <Nav.Link>Meu carrinho</Nav.Link>
              </LinkContainer>
            </Nav>
            <Nav>
                <Nav.Link onClick={handleLogout}>Sair</Nav.Link>
            </Nav>
            </>
          ) : (
            <Nav>
              <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
            </Nav>
          )}
        
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}