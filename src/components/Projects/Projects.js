import React, {useEffect,useState}from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import axios from "axios";
import img from "../../Assets/aou.png"



function Projects() {
  
const [projects, setProjects] = useState([]);

useEffect(() => {
  const fetchProjects = async () => {
    try {
      const response = await axios.get('https://api.github.com/users/minervain/repos');
      setProjects(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  fetchProjects();
}, []);

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
      {projects.map((project) => (
        <Col md={4} className="project-card" key={project.id}>
          <ProjectCard
            imgPath={img}
            isBlog={false}
            title={project.name}
            description={project.description}
            ghLink={project.html_url}
            demoLink={project.html_url}
          />
        </Col>
      ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
