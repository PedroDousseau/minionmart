import React, { useState, useEffect } from "react";
import './App.css';
import MyNavbar from './components/MyNavbar/MyNavbar';
import Footer from './components/Footer/Footer';
import Routes from "./Routes";
import { AuthContext } from './contexts/auth';
import { Auth } from "aws-amplify";
import { ShopContext } from './contexts/shop';
import { LoadCart } from './api/cartService';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [products, setProducts] = useState([]);
  const [userCart, setUserCart] = useState(null);

  useEffect(() => {
    loadUserSession();
    LoadCart(setUserCart);
  }, [])

  async function loadUserSession() {
    try {
      await Auth.currentSession();
      setIsAuthenticated(true);
    }
    catch(e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }
  
    setIsAuthenticating(false)
  }

  return (
    !isAuthenticating && 
    
    <div className="container-fluid App">
      <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
        <ShopContext.Provider value={{products, setProducts, userCart, setUserCart}}>
          <MyNavbar/>
          <Routes />
        </ShopContext.Provider>
      </AuthContext.Provider>
      <Footer/>
    </div>
  );
}

export default App;
