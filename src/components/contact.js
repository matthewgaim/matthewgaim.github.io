import React from 'react';
import './contact.css';
import github from '../assets/images/github.png';
import linkedin from '../assets/images/linkedin.png';
import resumePhoto from '../assets/images/resume.png';
import email from '../assets/images/email.png';
import resume from '../assets/Resume.pdf';

const contact = (props) => {
    return (
        <div class='container'>
            <text class='findMeAt'>Find me here:</text>
            <div class='socials'>
                <a href="https://www.github.com/matthewgaim/">
                    <img src={github} alt="GitHub" title="GitHub" />
                </a>
                <a href="https://www.linkedin.com/in/matthewgaim/">
                    <img src={linkedin} alt="LinkedIn" title="LinkedIn" />
                </a>
                <a href={resume}>
                    <img src={resumePhoto} alt="Resume" title="Resume" />
                </a>
                <a href="mailto:matthewgaim@gmail.com">
                    <img src={email} alt="Email" title="Email" />
                </a>
            </div>
        </div>
    );
};

export default contact;