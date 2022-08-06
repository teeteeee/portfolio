import meter1 from "../../assets/img/meter1.svg";
import meter2 from "../../assets/img/meter2.svg";
import meter3 from "../../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../../assets/img/arrow1.svg";
import arrow2 from "../../assets/img/arrow2.svg";
import colorSharp from "../../assets/img/color-sharp.png"
import {BsPatchCheckFill} from 'react-icons/bs'

export const Experience = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2 className="skills">My Skills</h2>
                        <div className="container experience_container">
                            <div className="experience_frontend">
                                <h3>Frontend Development</h3>
                                <div className="experience_content">
                                    <article className="experience_details">
                                        <BsPatchCheckFill className="experience_details-icon"/>
                                        <div>
                                        <h4>HTML</h4>
                                        <small className="text-light">Experienced</small>                                    
                                        </div>
                                    </article>
                                    <article className="experience_details">
                                        <BsPatchCheckFill className="experience_details-icon" />
                                        <div>
                                            <h4>CSS</h4>
                                            <small className="text-light">Experienced</small>
                                        </div>                                        
                                    </article>
                                    <article className="experience_details">
                                        <BsPatchCheckFill className="experience_details-icon" />
                                        <div>
                                        <h4>React</h4>
                                        <small className="text-light">Experienced</small>
                                        </div>
                                        
                                    </article>
                                    <article className="experience_details">
                                        <BsPatchCheckFill className="experience_details-icon" />
                                        <div>
                                            <h4>Javascript</h4>
                                            <small className="text-light">Experienced</small>
                                        </div>                                        
                                    </article>
                                    <article className="experience_details">
                                        <BsPatchCheckFill className="experience_details-icon" />
                                        <div>
                                        <h4>Bootstrap</h4>
                                        <small className="text-light">Experienced</small>
                                        </div>                                        
                                    </article>                                    
                                    
                                </div>
                            </div>
                            {/*End of FRONTEND*/}
                            <div className="experience_backend">
                            <h3>Backend Development</h3>
                                <div className="experience_content">
                                <article className="experience_details">
                                        <BsPatchCheckFill className="experience_details-icon" />
                                        <div>
                                        <h4>API</h4>
                                        <small className="text-light">Experienced</small>
                                        </div>                                        
                                    </article>
                                    <article className="experience_details">                                        
                                        <BsPatchCheckFill className="experience_details-icon" />
                                        <div>
                                        <h4>PHP</h4>
                                        <small className="text-light">Experienced</small>
                                        </div>
                                        
                                    </article>
                                    <article className="experience_details">
                                        <BsPatchCheckFill className="experience_details-icon" />
                                        <div>
                                        <h4>Laravel</h4>
                                        <small className="text-light">Experienced</small>
                                        </div>
                                        
                                    </article>
                                    <article className="experience_details">
                                        <BsPatchCheckFill className="experience_details-icon" />
                                        <div>
                                        <h4>CodeIgniter</h4>
                                        <small className="text-light">Intermediate</small>
                                        </div>                                       
                                    </article>
                                    <article className="experience_details">
                                        <BsPatchCheckFill className="experience_details-icon" />
                                        <div>
                                        <h4>MYSQL</h4>
                                        <small className="text-light">Experienced</small>
                                        </div>                                        
                                    </article>
                                </div>
                            </div>
                        </div>                       
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}