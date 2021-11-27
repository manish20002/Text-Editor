import './App.css';
import React from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-image">
      <Navbar title="Text Editor" aboutText="About Me" />
      <div className="container my-0  text-center">
        <TextForm heading="Enter Your Text For analying" />
        <About />
      </div>
    </div>
  );

}

export default App;