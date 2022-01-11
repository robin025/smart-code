import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import markdownImg from "../Assets/mk1.png";
import webdImage from "../Assets/wd1.png";
// import { Button } from "@material-ui/core";
import Footer from "./Footer";
import "./Home.css";
function Home() {
  

  return (
    <>
    <Container>
    <h1 class="home__heading" >Smartcode</h1>
    <div className="home">
      <div className="markdown_editor" >
        <img src={markdownImg} alt="Markdown" />
        
        <Button variant="primary"  as={Link} to="/markdown">
              Markdown Editor
            </Button>
      </div>
      <div className="webdev-editor" >
        <img src={webdImage} alt="Web Dev" />
        <Button variant="primary"  as={Link} to="/web">
              Web Editor
        </Button>
        
      </div>
    </div>
        </Container>
    <Footer/>
    </>
  );
}

export default Home;
