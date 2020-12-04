
import React from 'react';
import '../styles/Home.css';
import { NavLink } from 'react-router-dom'


function Home() {

    return (
        <div className="jumbotron">
                <h1 className="display-4">Hello My Name Is Muhammed </h1>
                <h2 className="about-me">Welcome To My Portfolio </h2>
                <br></br>
                <NavLink className="btn btn-outline-secondary btn-lg text-center" to="/about">My Portfolio</NavLink>
        </div>
    )
};

export default Home;