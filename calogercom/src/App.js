import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Terminal from './Components/Terminal/Terminal';
import StylizedSlant from './Components/StylizedSlant/StylizedSlant';

function App() {
  return (
    <div className="App">
      <StylizedSlant />
      <NavBar />
      <Terminal />
    </div>
  );
}

export default App;
