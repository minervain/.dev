import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> KENDİMİ </span> TANITAYIM
            </h1>
            <p className="home-about-body">
            Programlamaya aşık oldum ve en azından bir şeyler öğrendim, sanırım… 🤷‍♂️
              <br />
              <br />
              <i>
                <b className="purple">Javascript , Angular ve React'a </b>ilgim var
              </i>
              <br />
              <br />
             
İlgi alanlarım yeni Web Teknolojileri ve Ürünleri inşa etmek ve ayrıca Blockchain ile ilgili alanlar. &nbsp;
              <i>
                <b className="purple">Web teknoloji ve ürünleri  </b> ve ilgili alanlarımda{" "}
                
              </i>
              <br />
              <br />
              Mümkün olduğunda, ürün geliştirmeye olan tutkumu da uyguluyorum.
              ile <b className="purple">Node.js</b> ve <br></br>
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Kütüphaneleri ile
                </b>
              </i>
              &nbsp; bknz
              <i>
                <b className="purple"> React.js ve Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4}  className="myAvtar">  
            <Tilt>
              <img src={myImg} style={{borderRadius:'50%'}} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Sosyal Medya Hesaplarım</h1>
           
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/minervain"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/minervain0"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/minervain/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/minervain0"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
