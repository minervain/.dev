import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import myImg from '../../Assets/avatar.png'

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong className="purple">./minervain</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col md={4} className="myAvtar">
            <div>
              <img src={myImg} style={{ borderRadius: '50%' }} className="img-fluid" alt="avatar" />
            </div>
          </Col>
        </Row>
        <h1 className="project-heading">
          Öğrendiğim <strong className="purple">Kodlama dilleri </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Kullandığım</strong> Editörler
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
