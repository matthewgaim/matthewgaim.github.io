import './Contact.css';
import github from '../../assets/img/github.png';
import linkedin from '../../assets/img/linkedin.png';
import email from '../../assets/img/email.png';

function Contact() {
  return (
    <div className='pb-4 pt-4'>
      <text class='findMeAt text-4xl font-semibold p-3 text-center font-serif'>Find me here:</text>
      <div class='socials flex flex-wrap justify-center content-center'>
          <a href="https://www.github.com/matthewgaim/" className='contact-link px-8'>
              <img src={github} alt="GitHub" title="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/matthewgaim/" className='contact-link px-8'>
              <img src={linkedin} alt="LinkedIn" title="LinkedIn" />
          </a>
          <a href="mailto:matthewgaim@gmail.com" className='contact-link px-8'>
              <img src={email} alt="Email" title="Email" />
          </a>
      </div>
    </div>
  );
}

export default Contact;
