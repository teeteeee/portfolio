import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../../assets/img/projImg1.jpeg";
import projImg2 from "../../assets/img/portfolio.PNG";
import projImg3 from "../../assets/img/project-img3.png";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import 'animate.css';

export const Projectss = () => {

  const projects = [
    {
      linksite: "https://www.payhelpa.com/",
      linkgit: "https://github.com/teeteeee/PayHelpa",
      title: "Admin Panel for PayHelpa",
      demo: "View Demo",
      description: "View Code",
      imgUrl: projImg1,
    },
    {
      linksite: "https://www.payhelpa.com/",
      linkgit: "https://github.com/teeteeee/PayHelpa",
      title: "Portfolio",
      demo: "View Demo",
      description: "View Code",
      imgUrl: projImg2,
    },
    {
      linksite: "https://www.payhelpa.com/",
      linkgit: "https://github.com/teeteeee/PayHelpa",
      title: "Admin Panel for PayHelpa",
      demo: "View Demo",
      description: "View Code",
      imgUrl: projImg1,
    },
    
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>                
                <Tab.Container id="projects-tabs" defaultActiveKey="first">                  
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}