import { Col } from "react-bootstrap";

export const ProjectCard = ({ linksite, linkgit, title, description, imgUrl, demo }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
        <h5>{title}</h5>
        <button className='btn primary-btn one'><a href={linksite}>{demo}</a></button>
        <button className='btn primary-btn'><a href={linkgit}>{description}</a></button>
          
        </div>
      </div>
    </Col>
  )
}