import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Terminal from './Components/Terminal/Terminal';
import StylizedSlant from './Components/StylizedSlant/StylizedSlant';
import Content from './Components/Layout/Content';

function App() {
  return (
    <div className="App">
      <StylizedSlant />
      <Content>
        <NavBar />
        <Terminal />
      </Content>
      
    </div>
  );
}

export default App;
