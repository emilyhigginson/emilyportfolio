import React from 'react'
import './style.css'
import Navbar from './Navbar';
import About from './About';
import Blog from './Blog';
import Projects from './Projects';

function App() {
  return (
    <div >
    <Navbar/>
    <About/>
    <Projects/>
    <Blog/>
        
    </div>
  );
}

export default App;
