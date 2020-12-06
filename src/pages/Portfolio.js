import React from 'react';
import { Container, Row, Col, Image, Card, CardImg, CardDeck, Button } from "react-bootstrap";
import data from "../components/Projects/projects";
import "../styles/Portfolio.css";

function Portfolio() {

    return (
        <Container fluid className="portfolio-area" id="portfolio">
            <Row>
                <Col md={12} className="project-heading">
                    <h1 style={{textAlign: "center"}}>Projects</h1>
                </Col>
                <CardDeck>
                    {data.map((project, i) => {
                        return (
                            <Col md={6}>
                                <div key={i} className="cards">
                                    <Card>
                                        <Card.Img className='cardImage' src={project.image} alt={project.alt}></Card.Img>
                                        <div className="card-body">
                                            <Card.Body>
                                                <Card.Title className="cardHeader">{project.name}</Card.Title>
                                                <Card.Text className="project-text">{project.text}</Card.Text>
                                                <Button className="app-btn" variant="outline-primary"  onClick={(e) => {e.preventDefault(); window.location.href=`${project.appUrl}`}}>Deploy The App</Button>
                                                <Button className="github-btn" variant="outline-primary" onClick={(e) => {e.preventDefault(); window.location.href=`${project.githubUrl}`}}>Github Repository</Button>
                                            </Card.Body>
                                        </div>
                                    </Card>
                                </div>
                            </Col>
                        );
                    })}
                </CardDeck>
            </Row>
        </Container>
    );
};

export default Portfolio;