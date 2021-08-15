import './App.css';
import Routes from "./Routes";
import React, { useState } from 'react';

function App() {

  const [color, setColor] = useState("#333333");


  return (
    <div className="App">
      <div className="header" style={{backgroundColor: color}}>
        <h1>USEFUL SCIENCE</h1>
      </div>
      <div class="nav">
        <ul>
        <li><a href="/" className="new">New</a></li>
        <li><a onClick={(e) => setColor(window.getComputedStyle(e.target, null).getPropertyValue("background-color"))} className="search">Search</a></li>
        <li><a href="/test" onClick={(e) => setColor(window.getComputedStyle(e.target, null).getPropertyValue("background-color"))} className="nutrition">Nutrition</a></li>
        <li><a href="/test" onClick={(e) => setColor(window.getComputedStyle(e.target, null).getPropertyValue("background-color"))} className="education">Education</a></li>
        <li><a href="/test" onClick={(e) => setColor(window.getComputedStyle(e.target, null).getPropertyValue("background-color"))} className="fitness">Fitness</a></li>
        <li><a href="/test" onClick={(e) => setColor(window.getComputedStyle(e.target, null).getPropertyValue("background-color"))} className="happiness">Happiness</a></li>
        <li><a href="/test" onClick={(e) => setColor(window.getComputedStyle(e.target, null).getPropertyValue("background-color"))} className="health">Health</a></li>
        <li><a href="/test" onClick={(e) => setColor(window.getComputedStyle(e.target, null).getPropertyValue("background-color"))} className="environment">Environment</a></li>
        <li><a href="/test" onClick={(e) => setColor(window.getComputedStyle(e.target, null).getPropertyValue("background-color"))} className="parenting">Parenting</a></li>
        <li><a href="/test" onClick={(e) => setColor(window.getComputedStyle(e.target, null).getPropertyValue("background-color"))} className="persuasion">Persuasion</a></li>
        <li><a href="/test" onClick={(e) => setColor(window.getComputedStyle(e.target, null).getPropertyValue("background-color"))} className="productivity">Productivity</a></li>
        <li><a href="/test" onClick={(e) => setColor(window.getComputedStyle(e.target, null).getPropertyValue("background-color"))} className="sleep">Sleep</a></li>

        </ul>
      </div>
    <Routes />
    </div >
  );
}

export default App;
