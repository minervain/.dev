import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Son yapılan <strong className="purple">Projelerim </strong>
        </h1>
        <p style={{ color: "white" }}>
        İşte son zamanlarda üzerinde çalıştığım birkaç proje.  
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Register Page"
              description="Üniversite hocamızın vize ödevi olarak verdiği Register Sayfası"
              ghLink="https://github.com/minervain"
              demoLink="https://github.com/minervain"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Hava Durumu Uygulaması"
              description="React ile hazırladığım Apiden gelen verilerle hazırladığım Hava durumu uygulaması"
              ghLink="https://github.com/minervain"
              demoLink="https://github.com/minervain"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="React.js ile çevrimiçi kod ve işaretleme düzenleyici derlemesi. Web sitesinin anında görünümü ile html, css ve js kodunu destekleyen Çevrimiçi Düzenleyici"
              ghLink="https://github.com/minervain"
              demoLink="https://github.com/minervain"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Restorant Sitesi"
              description="Pure js ve çeşitli kütüphanelerle hazırladığım Restorant Sitesi"
              ghLink="https://github.com/minervain"
              demoLink="https://github.com/minervain"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Mayın Tarlası"
              description="Java ile hazırlanan metin tabanlı mayın tarlası oyunu"
              ghLink="https://github.com/minervain"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Para Harcama Mağazası"
              description="Prototürk youtube kanalından gördüğüm para harcama mağazasının klonu"
              ghLink="https://github.com/minervain"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
