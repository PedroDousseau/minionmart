import './App.css';
import MyNavbar from './components/navbar/MyNavbar';
import Routes from "./Routes";


function App() {
  return (
    <div className="container-fluid App">
      <MyNavbar/>
      <Routes />
    </div>
  );
}

export default App;
