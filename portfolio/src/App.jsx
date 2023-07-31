import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Contact from './components/Contact';
import Project from './components/Project';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home /> 
      <About />
      <Service />
      <Project />
      <Contact />
    </div>
  );
}

export default App;

