import React from 'react';
import { BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs";
import Typical from 'react-typical';
import './Profile.css';
import 'animate.css';


export default function profile() {

   

      return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                <span className="tagline">Welcome to my Portfolio</span>           
                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello I'm <span className='highlighted-text'>Titilope Adesola</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                loop={Infinity}
                                steps={[
                                    "Software Engineer",
                                    2000,
                                    "Full Stack Developer",
                                    2000,                                
                                    "Back-End Developer",
                                    2000,
                                ]}                            
                                />
                            </h1>                    
                            <span className='profile-role-tagline'>
                                Knack of building applications with front and back end operations.
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                    <a href='#connect'>
                        <button className='btn primary-btn'>
                            {""}
                            Hire Me{""}
                        </button> 
                        </a>                       
                        <a href='Titi.pdf' download='Titilope Titi.pdf'>
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                    </div>
                    <div className='profile-picture'>
                        <div className='profile-picture-background'></div>
                    </div>                   
                
            </div>
        </div>
      )

  
}
