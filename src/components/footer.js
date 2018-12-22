// Dependencies
import React from 'react';
// ,{ Component }
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../components/style/style.css"

// Button which will direct user to the Login page.
function Footer() {
  return (
    <div className="footer">
      <p align="center">         
        <div className="text-center center-block">
          <p>
            Connect with the developers: <a href="https://www.linkedin.com/in/sharvarisangle/" target="_blank" rel="noopener noreferrer">Sharvari Sangle </a>, <a href="https://github.com/michaelcumings" target="_blank" rel="noopener noreferrer"> Michael Cumings</a>, <a href="https://github.com/SadiyaJiru" target="_blank" rel="noopener noreferrer"> Sadiya Jiru</a>, <a href="https://github.com/nicksedillos" target="_blank" rel="noopener noreferrer"> Nick Sedillos</a>, & <a href="https://github.com/kingjeremy2211" target="_blank" rel="noopener noreferrer"> Jeremy King</a>.
          </p>
        </div>
        <p>
          Most content © Team PEEK. All rights reserved. Work samples © their owners. Social media icons downloaded from Social media pages.
        </p>
      </p>
    </div>   
  );
};

export default Footer;