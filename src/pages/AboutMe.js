
import React from 'react';
import '../styles/AboutMe.css';
import Picture from "../images/MyProfile.JPG";
import { Container, Row, Col, Image } from "react-bootstrap";


function AboutMe() {
    return (
        <section className="home-area" id="about">
            <Container fluid >
                <Row>
                    <Col sm={12} lg={4}> 
                        <div id="profile">
                            <Image id="my-pic" className="avatar avatar-circle" src={Picture}/>
                            <div className="portrait-title">
                                <h2>Muhammed Siraceddin Ekinci</h2>
                                <h3>CS Major Student</h3>
                                <h3>
                                    <a href="https://www.wpunj.edu/" target="_blank" rel="noopener" style={{textDecoration: "none"}}> 
                                        <span>William Paterson University</span>
                                    </a>
                                </h3>
                            </div>
                            <ul className="network-icon d-flex auto-mx justify-content-center" aria-hidden="true" id="social-pages-btn">
                                <li className="list-inline-item icon">
                                    <a href="mailto:siraceddinekinci@gmail.com" rel="noreferrer" target="_blank">
                                        <i class="fas fa-envelope"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item icon">
                                    <a href="https://github.com/MuhammedEkinci" rel="noreferrer" target="_blank">
                                        <i class="fab fa-github"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item icon">
                                    <a href="https://www.linkedin.com/in/muhammed-ekinci-622738194/" rel="noreferrer" target="_blank">
                                        <i class="fab fa-linkedin"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item icon">
                                    <a href="https://www.facebook.com/siraceddin.ekinci" rel="noreferrer" target="_blank">
                                        <i class="fab fa-facebook"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col sm={12} lg={8}>
                        <div id="biography">
                            <h1 id="header-title">Biography</h1>
                            <p>My name is Muhammed Ekinci and I am currently a senior at William Paterson University majoring in Computer Science. I hope to be graduating May of 2022</p>
                            <p>I am a young programmer, eager to always learn new concepts and ideas that will further my programming skills and take my projects to the next level. 
                                My dream is to become a Software Developer/Web Developer and my goal is to become the next Mark Zuckerberg. 
                                I love to make coding projects that are not only fun, but also challenging. Currently working on what is soon to be one of the greatest meme website ever made, MemePost.
                            </p>
                        </div>
                        <Row>
                            <Col md={8}>
                                <div id="education-section">
                                    <h3>Education</h3>
                                    <ul className="ul-edu fa-ul">
                                        <li>
                                            <i class="fas fa-graduation-cap"></i>
                                            <div className="descriptions">
                                                <p className="course">Wayne Valley Highschool, 2017</p>
                                            </div>
                                        </li>
                                        <li>
                                            <i class="fas fa-graduation-cap"></i>
                                            <div className="descriptions">
                                                <p className="course">Current CS Major in WPU, Expected to Graduate 2022</p>
                                                <p className="institution">William Paterson University</p>
                                            </div>
                                        </li>
                                        <li>
                                            <i class="fas fa-graduation-cap"></i>
                                            <div className="descriptions">
                                                <p className="course">Full Stack Web Development Certificate </p>
                                                <p className="institution">Rutgers University</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <section id="skills-class" className="home-section">
                <Container className="container">
                    <Row className="featurette">
                        <Col md={12} className="section-heading">
                            <h1>Skills</h1>
                        </Col>
                        <Col sm={4}>
                            <div className="featurette-icon">
                                <i class="fab fa-js-square"></i>
                            </div>
                            <h3>JavaScript</h3>
                        </Col>
                        <Col sm={4}>
                            <div className="featurette-icon">
                                <i class="fab fa-react"></i>                            
                            </div>
                            <h3>React</h3>
                        </Col>
                        <Col sm={4}>
                            <div className="featurette-icon">
                                <i class="fab fa-html5"></i>                            
                            </div>
                            <h3>HTML5</h3>
                        </Col>
                        <Col sm={4}>
                            <div className="featurette-icon">
                                <i class="fab fa-css3-alt"></i>                            
                            </div>
                            <h3>CSS3</h3>
                        </Col>
                        <Col sm={4}>
                            <div className="featurette-icon">
                                <i class="fab fa-node-js"></i>                            
                            </div>
                            <h3>Node.js</h3>
                        </Col>
                        <Col sm={4}>
                            <div className="featurette-icon">
                                <i class="fas fa-database"></i>                            
                            </div>
                            <h3>Databases</h3>
                            <p>MySQL, MongoDB</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </section>
    );
};

export default AboutMe;