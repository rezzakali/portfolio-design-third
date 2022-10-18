import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Technologies from './components/pages/Technologies';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Home />
        <br />
        <br />
        <br />
        <br />
        <About />
        <br />
        <br />
        <Projects />
        <br />
        <br />
        <Technologies />
        <br />
        <br />
        <Contact />
      </div>
    </div>
  );
}

export default App;
