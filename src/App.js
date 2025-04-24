import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Skills from './components/Skills';
import MyPrpject from './components/MyProject';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <section id="home">
        <Home/>
      </section>
      <section id="skills">
        <Skills/>
      </section>
      <section id="projects">
        <MyPrpject/>
      </section>
      <section id="contact">
        <Contact/>
      </section>
    </div>
  );
}

export default App;