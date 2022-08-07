import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";
import { BsLinkedin, BsGithub, BsWhatsapp, BsFillEnvelopeFill } from "react-icons/bs";



export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} className="text-center text-sm-end">
          <p>Titi.adesola@gmail.com</p>
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/titilope-adesola-2bb854220/" target="_blank"><BsLinkedin/></a>
                <a href="mailto:titi.adesola@gmail.com" target="_blank"><BsFillEnvelopeFill/> </a>
                <a href="https://github.com/teeteeee/"  target="_blank"><BsGithub /></a>
                </div>
            <p>&copy; 2022 Titilope Adesola. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}