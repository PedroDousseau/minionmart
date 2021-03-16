import './App.css';
import MyNavbar from './components/MyNavbar/MyNavbar';
import Footer from './components/Footer/Footer';
import Routes from "./Routes";


function App() {
  return (
    <div className="container-fluid App">
      <MyNavbar/>
      <Routes />
      <Footer/>
    </div>
  );
}

export default App;
