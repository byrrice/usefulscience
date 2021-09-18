import './App.css';
import Routes from "./Routes";
import React, { useState } from 'react';

function App() {

  const [color, setColor] = useState("#333333");


  return (
    <div className="App">
      <div className="header" style={{ backgroundColor: color }}>
        <h1>USEFUL SCIENCE</h1>
      </div>
      <div class="nav">
        <ul>
          <li><a onMouseEnter={() => setColor("#333333")} onMouseLeave={() => setColor("#333333")} href="/usefulscience/" className="new">New</a></li>
          <li><a onMouseEnter={() => setColor("#999999")} onMouseLeave={() => setColor("#333333")} href = "/search" onClick={(e) => setColor(window.getComputedStyle(e.target, null).getPropertyValue("background-color"))} className="search">Search</a></li>
          <li><a onMouseEnter={() => setColor("#e54b4b")} onMouseLeave={() => setColor("#333333")} onClick={(e) => setColor(window.getComputedStyle(e.target, null).getPropertyValue("background-color"))} className="nutrition">Nutrition</a></li>
          <li><a onMouseEnter={() => setColor("#e5c64b")} onMouseLeave={() => setColor("#333333")} onClick={(e) => setColor(window.getComputedStyle(e.target, null).getPropertyValue("background-color"))} className="education">Education</a></li>
          <li><a onMouseEnter={() => setColor("#887faa")} onMouseLeave={() => setColor("#333333")} onClick={(e) => setColor(window.getComputedStyle(e.target, null).getPropertyValue("background-color"))} className="fitness">Fitness</a></li>
          <li><a onMouseEnter={() => setColor("#4178c6")} onMouseLeave={() => setColor("#333333")} onClick={(e) => setColor(window.getComputedStyle(e.target, null).getPropertyValue("background-color"))} className="happiness">Happiness</a></li>
          <li><a onMouseEnter={() => setColor("#eb7b98")} onMouseLeave={() => setColor("#333333")} onClick={(e) => setColor(window.getComputedStyle(e.target, null).getPropertyValue("background-color"))} className="health">Health</a></li>
          <li><a onMouseEnter={() => setColor("#7fbf3f")} onMouseLeave={() => setColor("#333333")} onClick={(e) => setColor(window.getComputedStyle(e.target, null).getPropertyValue("background-color"))} className="environment">Environment</a></li>
          <li><a onMouseEnter={() => setColor("#84aedf")} onMouseLeave={() => setColor("#333333")} onClick={(e) => setColor(window.getComputedStyle(e.target, null).getPropertyValue("background-color"))} className="parenting">Parenting</a></li>
          <li><a onMouseEnter={() => setColor("#e5894b")} onMouseLeave={() => setColor("#333333")} onClick={(e) => setColor(window.getComputedStyle(e.target, null).getPropertyValue("background-color"))} className="persuasion">Persuasion</a></li>
          <li><a onMouseEnter={() => setColor("#41c6bc")} onMouseLeave={() => setColor("#333333")} onClick={(e) => setColor(window.getComputedStyle(e.target, null).getPropertyValue("background-color"))} className="productivity">Productivity</a></li>
          <li><a onMouseEnter={() => setColor("#9a41c6")} onMouseLeave={() => setColor("#333333")} onClick={(e) => setColor(window.getComputedStyle(e.target, null).getPropertyValue("background-color"))} className="sleep">Sleep</a></li>

        </ul>
      </div>
      <Routes />
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
    </div >
  );
}

export default App;
