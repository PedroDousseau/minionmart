import './MyNavbar.css';
import React from "react";
import {Navbar, Nav} from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import { useAuthContext } from '../../contexts/auth';
import { Auth } from "aws-amplify";
import { useShopContext } from '../../contexts/shop';
import { ClearCart } from '../../api/cartService';
import { ClearOrders } from '../../api/ordersService';

export default function MyNavbar() {

  const { isAuthenticated, setIsAuthenticated } = useAuthContext();
  const { userCart, setUserCart, setUserOrders } = useShopContext();

  const totalItems = userCart.reduce((acc, cur) => {
    return (acc + cur.amount)
  }, 0)

  async function handleLogout() {
    await Auth.signOut();
    ClearCart(setUserCart);
    ClearOrders(setUserOrders);
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
                <Nav.Link>Meu carrinho ({totalItems})</Nav.Link>
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