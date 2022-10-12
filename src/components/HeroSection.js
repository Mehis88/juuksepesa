import React from "react";
import '../App.css';
import './HeroSection.css';
import imgFile from './images/img-home.jpg';




function HeroSection() {
    return (
        <div className="hero-container">
            <img src={imgFile} alt=""/>
            <h1>Adventure Awaits</h1>
        </div>
    );
}

export default HeroSection;