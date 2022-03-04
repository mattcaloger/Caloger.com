import './App.css';
import Content from './Components/Layout/Content';
import AppRouter from './Components/AppRouter/AppRouter';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App"> 
      
      <Content>
      
        <AppRouter />

          <Footer />
      </Content>
    </div>
  );
}

export default App;
