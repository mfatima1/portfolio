import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import Banner from './components/Banner';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Banner text="Welcome to my website!" />
    </div>
  );
}

export default App;
