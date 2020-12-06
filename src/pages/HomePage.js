
import React from 'react';
import '../styles/Home.css';
import { NavLink } from 'react-router-dom';
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Contact from "./Contact";


function Home() {

    return (
        <div>
            <div className="jumbotron" id="home">
                    <h1 className="display-4">My Name Is Muhammed Ekinci</h1>
                    <h2 className="about-me">Welcome To My Portfolio </h2>
                    <br></br>
                    <NavLink className="btn btn-outline-secondary btn-lg text-center" to="#about">My Portfolio</NavLink>
            </div>
            <AboutMe />
            <Portfolio />
            <Contact />
        </div>

                    
    )
};

export default Home;