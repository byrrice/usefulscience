import React from "react";
import "./Home.css";
import { Follow } from 'react-twitter-widgets';
import data from "../data/posts.json";

export default function Home() {
  return (
    <div className="home">
      <div className="lander">
        <div className="external-link">
          <Follow username="usefulsci" options={{ size: "large" }}></Follow>
          <br></br>
          <a class="bmc-btn" target="_blank" href="http://buymeacoffee.com/usefulscience">
          <span class="bmc-btn-text">Buy us a coffee</span></a>
        </div>
        <h1>This is the homepage</h1>
        {data.posts.map(x => console.log(x.post))}
        {data.posts.map(x => 
          <div>{x.post.summary}
            <p>{x.post.categories}</p>
          </div>
        )}
      </div>
    </div>
  );
}