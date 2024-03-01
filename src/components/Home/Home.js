import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Type from "./Type";

function Home() {
  return (
    <section>
      <div className="container" >
        <Container fluid className="home-section" id="home">

          <Particle />
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">

                <h1 style={{ paddingBottom: 10 }} className="heading">
                  - Hаyаttа hep mutlu olursаm, hаyаlini kurаcаk neyim kаlır?
                  {" "}
                  <span className="wave" role="img" aria-labelledby="wave">

                  </span>
                </h1>
                <br></br>
                <br></br>
                <h1 className="heading-name">

                  <strong className="main-name"> ALİ OSMAN UÇAR</strong>
                </h1>




                <div style={{ padding: 50, textAlign: "left" }}>
                  <Type />
                </div>
              </Col>


            </Row>
          </Container>

        </Container>
      </div>
    </section>
  );
}

export default Home;
