
import React from 'react';
import '../styles/AboutMe.css';
import Picture from "../images/family.jpg";
import { Container, Row, Col, Image } from "react-bootstrap";


function AboutMe() {

    return (
        <div>
            <Container fluid>
                <Row>
                    <Col sm={12} lg={4}> 
                        <div id="profile">
                            <Image id="my-pic" className="avatar avatar-circle" src={Picture}/>
                            <div className="portrait-title">
                                <h2>Muhammed Siraceddin Ekinci</h2>
                                <h3>CS Major Student</h3>
                                <h3>
                                    <a href="https://www.wpunj.edu/" target="_blank" rel="noopener">
                                        <span>William Paterson University</span>
                                    </a>
                                </h3>
                            </div>
                            <ul className="network-icon d-flex auto-mx justify-content-center" aria-hidden="true">
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
                            </ul>
                        </div>
                    </Col>
                    <Col sm={12} lg={8}>
                        <h1 id="header-title">Biography</h1>
                        <br></br>
                        <p>My name is Muhamed Ekinci and I am currently a senior at William Paterson University for Computer Science</p>
                        <br></br>
                        <p></p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutMe;