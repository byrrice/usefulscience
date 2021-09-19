import './App.css';
import Routes from "./Routes";
import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

function App() {
  const [color, changeColor] = useState("#333333");
  const [stored, storeColor] = useState("#333333");
  return (
    <div className="App">
      <div className="header" style={{ backgroundColor: color }}>
        <h1>USEFUL SCIENCE</h1>
      </div>
      <Router>
        <div class="nav">
          <nav>
            <ul>
              <li><Link onMouseEnter={() => { storeColor(color); changeColor("#333333") }} onMouseLeave={() => changeColor(stored)} to="/usefulscience/" onClick={(e) => {storeColor(color); changeColor(window.getComputedStyle(e.target, null).getPropertyValue("background-color"))}} className="new">New</Link></li>
              <li><Link onMouseEnter={() => { storeColor(color); changeColor("#999999") }} onMouseLeave={() => changeColor(stored)} to="/search" onClick={(e) => {storeColor(color); changeColor(window.getComputedStyle(e.target, null).getPropertyValue("background-color"))}} className="search">Search</Link></li>
              <li><Link onMouseEnter={() => { storeColor(color); changeColor("#e54b4b") }} onMouseLeave={() => changeColor(stored)} onClick={(e) => {storeColor(color); changeColor(window.getComputedStyle(e.target, null).getPropertyValue("background-color"))}} className="nutrition">Nutrition</Link></li>
              <li><Link onMouseEnter={() => { storeColor(color); changeColor("#e5c64b") }} onMouseLeave={() => changeColor(stored)} onClick={(e) => {storeColor(color); changeColor(window.getComputedStyle(e.target, null).getPropertyValue("background-color"))}} className="education">Education</Link></li>
              <li><Link onMouseEnter={() => { storeColor(color); changeColor("#887faa") }} onMouseLeave={() => changeColor(stored)} onClick={(e) => {storeColor(color); changeColor(window.getComputedStyle(e.target, null).getPropertyValue("background-color"))}} className="fitness">Fitness</Link></li>
              <li><Link onMouseEnter={() => { storeColor(color); changeColor("#4178c6") }} onMouseLeave={() => changeColor(stored)} onClick={(e) => {storeColor(color); changeColor(window.getComputedStyle(e.target, null).getPropertyValue("background-color"))}} className="happiness">Happiness</Link></li>
              <li><Link onMouseEnter={() => { storeColor(color); changeColor("#eb7b98") }} onMouseLeave={() => changeColor(stored)} onClick={(e) => {storeColor(color); changeColor(window.getComputedStyle(e.target, null).getPropertyValue("background-color"))}} className="health">Health</Link></li>
              <li><Link onMouseEnter={() => { storeColor(color); changeColor("#7fbf3f") }} onMouseLeave={() => changeColor(stored)} onClick={(e) => {storeColor(color); changeColor(window.getComputedStyle(e.target, null).getPropertyValue("background-color"))}} className="environment">Environment</Link></li>
              <li><Link onMouseEnter={() => { storeColor(color); changeColor("#84aedf") }} onMouseLeave={() => changeColor(stored)} onClick={(e) => {storeColor(color); changeColor(window.getComputedStyle(e.target, null).getPropertyValue("background-color"))}} className="parenting">Parenting</Link></li>
              <li><Link onMouseEnter={() => { storeColor(color); changeColor("#e5894b") }} onMouseLeave={() => changeColor(stored)} onClick={(e) => {storeColor(color); changeColor(window.getComputedStyle(e.target, null).getPropertyValue("background-color"))}} className="persuasion">Persuasion</Link></li>
              <li><Link onMouseEnter={() => { storeColor(color); changeColor("#41c6bc") }} onMouseLeave={() => changeColor(stored)} onClick={(e) => {storeColor(color); changeColor(window.getComputedStyle(e.target, null).getPropertyValue("background-color"))}} className="productivity">Productivity</Link></li>
              <li><Link onMouseEnter={() => { storeColor(color); changeColor("#9a41c6") }} onMouseLeave={() => changeColor(stored)} onClick={(e) => {storeColor(color); changeColor(window.getComputedStyle(e.target, null).getPropertyValue("background-color"))}} className="sleep">Sleep</Link></li>
            </ul>
          </nav>
          <Routes />
        </div>
        <footer id="footer">
          <div class="content">
            <nav class="menu"><ul><li class="first leaf"><a href="/about">About</a></li>
              <li class="leaf"><a href="/top">Top Posts</a></li>
              <li class="leaf"><a href="/podcast">Podcast</a></li>
              <li class="leaf"><a href="https://us7.campaign-archive.com/home/?u=441f6625903c34bb07ba0b401&amp;id=bc75661385" target="_blank">Newsletter Archive</a></li>
              <li class="leaf"><a href="/usefulscience/submit">Submit</a></li>
              <li class="leaf"><a href="/rss.xml" class="rss-link">RSS</a></li>
              <li class="leaf"><a href="/usefulscience/contact">Contact</a></li>
              <li class="last leaf"><a href="https://usefulsci.threadless.com/">Store</a></li>
            </ul></nav>
          </div>
        </footer>
      </Router>
    </div>
  );
}

export default App;
