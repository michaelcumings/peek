import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../components/style/style.css"

// Button which will direct user to the Login page.
function Footer() {
  return (
           <div className="footer">
            <p align="center">         
            <div className="text-center center-block">
            Connect with the Developers:
            <a href="https://www.linkedin.com/in/sharvarisangle/" target="_blank" > Sharvari Sangle, </a>
            <a href="" target="_blank" > Michael, </a>
            <a href="" target="_blank" > Sadiya, </a>
            <a href="" target="_blank" > Nick, </a>
            <a href="" target="_blank" > Jerremy </a>
            <br />
               
        </div>
             Most content © Team PEEK. All rights reserved. Work samples © their owners. Social media icons downloaded from Social media pages.</p>
            </div>
           
  );
};

export default Footer;