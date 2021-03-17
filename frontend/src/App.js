import React, { useState, useEffect } from "react";
import './App.css';
import MyNavbar from './components/MyNavbar/MyNavbar';
import Footer from './components/Footer/Footer';
import Routes from "./Routes";
import { AuthContext } from './contexts/auth';
import { Auth } from "aws-amplify";


function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  useEffect(() => {
    loadUserSession();
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
        <MyNavbar/>
        <Routes />
      </AuthContext.Provider>

      <Footer/>
    </div>
  );
}

export default App;
