
import React from 'react';
//import '../styles/AboutMe.css';
import Picture from "../images/family.jpg";
import { Container, Row, Col, Image } from "react-bootstrap";


function AboutMe() {

    return (
        <div>
            <Container className="about-me">
                <Row>
                    <Col sm={12} md={4}>
                        <Image id="my-pic" className="img-fluid" src={Picture}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutMe;