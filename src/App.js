import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Bank from './component/Bank';
import Navbar from './component/Navbar'

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Header/>
    <Bank/>
    </div>
  );
}

export default App;
