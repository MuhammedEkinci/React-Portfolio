import React from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import data from "../components/Projects/projects";
import "../styles/Portfolio.css";

function Portfolio() {

    return (
        <Container fluid className="portfolio-area" id="portfolio">
            <Row>
                <Col sm={12} lg={4} className="project-heading">
                    <h1 style={{textAlign: "center", marginTop: "1rem"}}>Projects</h1>
                </Col>
                <Col lg={8} sm={12}>
                    {data.map((project, i) => {
                        return (
                            <div className="isotope projects-container row js-layout-row">
                                <div className="col-12 isotope-item">
                                    <div className="media stream-item">
                                        <div className="media-body">
                                            <h3 className="article-title mb-0 mt-0">
                                                <a href={project.appUrl} target="_blank" style={{textDecoration: "none"}}>{project.name}</a>
                                            </h3>
                                            <div className="article-style">
                                                <p>{project.text}</p>
                                            </div>
                                            <div className="btn-links">
                                                <a className="btn btn-outline-primary my-1 mr-1 btn-sm" href={project.githubUrl} target="_blank">
                                                    <i class="fab fa-github mr-1"></i>
                                                    Code
                                                </a>
                                            </div>
                                        </div>
                                        <div className="ml-3 mr-3">
                                            <a href={project.appUrl} target="_blank">
                                                <img src={project.image} alt={project.alt}></img>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        );
                    })}
                </Col>

                {/* <CardDeck>
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
                </CardDeck> */}
            </Row>
        </Container>
    );
};

export default Portfolio;