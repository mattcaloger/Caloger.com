import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Terminal from './Components/Terminal/Terminal';
import StylizedSlant from './Components/StylizedSlant/StylizedSlant';
import Content from './Components/Layout/Content';
import AboutBlurb from './Components/AboutBlurb/AboutBlurb';
import { motion } from 'framer-motion';
import AppRouter from './Components/AppRouter/AppRouter';
import Footer from './Components/Footer/Footer';

const variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1},
}

const container = {
  hidden: {opacity: 0},
  show: {
      opacity: 1,
      transition: {
          delayChildren: 0.1,
              staggerChildren: 0.1
          }
      }
}

function App() {
  return (
    <div className="App"> 
      <StylizedSlant/>
      <Content as={motion.div} variants={container} initial="hidden" animate="show">
      
        <AppRouter />

          
      </Content>
      
    </div>
  );
}

export default App;
