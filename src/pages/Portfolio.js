import React from 'react';
import { Container, Row, Col, Image, Card, CardImg, CardDeck, Button } from "react-bootstrap";
import data from "../components/Projects/projects";
import "../styles/Portfolio.css";

function Portfolio() {

    return (
        <Container fluid >
            <Row>
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
                                                <Card.Text className="devText">{project.text}</Card.Text>
                                                <Button className="btn app" onClick={(e) => {e.preventDefault(); window.location.href=`${project.appUrl}`}}>Deploy The App</Button>
                                                <Button className="btn githubBtn" onClick={(e) => {e.preventDefault(); window.location.href=`${project.githubUrl}`}}>Github Repository</Button>
                                            </Card.Body>
                                        </div>
                                    </Card>
                                </div>
                            </Col>
                        );
                    })}
                </CardDeck>
            
                {/* <div className="cardDeck">
                <Col size="lg-12">
                    <CardDeck>
                        {data.map((dev, i) => {
                            return (
                                <div key={i} className="cards">
                                    <Card.Body>
                                        <CardImg className='cardImage' src={dev.image} alt={dev.alt}></CardImg>
                                        <div className="devCardStuff">
                                        <Card.Title className="cardHeader">{dev.name}</Card.Title>
                                        <Card.Text className="devText">{dev.text}</Card.Text>
                                        <button className="btn app"     onClick={(e) => {e.preventDefault(); window.location.href=`${dev.appUrl}`}}>Deploy The App</button>
                                        <button className="btn githubBtn"     onClick={(e) => {e.preventDefault(); window.location.href=`${dev.githubUrl}`}}>Github Repository</button>
                                        </div>
                                    </Card.Body>
                                </div>
                            )
                        })}
                    </CardDeck>
                </Col>
                </div> */}
            </Row>
        </Container>
    );
};

export default Portfolio;