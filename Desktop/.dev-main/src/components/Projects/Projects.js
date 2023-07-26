import React, { useEffect, useState } from "react";
import { Container, Row, Col ,Button} from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import axios from "axios";
import img from "../../Assets/aou.png";

function Projects() {
  const itemsPerPage = 6;
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/users/minervain/repos"
        );
        setProjects(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProjects();
  }, []);

  // Sayfa değişikliğini işleme işlevi
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Geçerli sayfa için proje alma işlevi
  const getCurrentPageProjects = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return projects.slice(startIndex, endIndex);
  };

  const totalPages = Math.ceil(projects.length / itemsPerPage);

  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Son yapılan <strong className="purple">Projelerim</strong>
        </h1>
        <p style={{ color: "white" }}>
          İşte son zamanlarda üzerinde çalıştığım birkaç proje.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {getCurrentPageProjects().map((project) => (
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

        {/* Pagination buttons */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          {Array.from({ length: totalPages }, (_, index) => (
            <Button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              style={{
                margin: "5px",
                padding: "5px 10px",
                borderRadius: "5px",
                backgroundColor:
                  currentPage === index + 1 ? "#007bff" : "transparent",
                color: currentPage === index + 1 ? "white" : "#007bff",
                cursor: "pointer",
              }}
            >
              {index + 1}
            </Button>
          ))}
        </div>    
        <Particle />

      </Container>
    </Container>
  );
}

export default Projects;