import React from "react";
import "./style.css";

export function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Muhammed Ekinci</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a className="nav-link" href="/about">About Me</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link border-left" href="/portfolio">Portfolio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link border-left" href="/contact">Contact</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link border-left" href="/contact">Resume</a>
                </li>
            </ul>
        </div>
    </nav>
    );
}

export default NavBar;