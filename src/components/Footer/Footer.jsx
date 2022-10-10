
import { faFacebookF, faFacebookMessenger, faGithub, faInstagram, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faM } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';

const Footer = () => (
  <section className='footer'>
    <ul className='social'>
      <li>
        <a href="https://github.com/zaki164" className='Github' target="_blank" rel="noreferrer" aria-label="Github"><FontAwesomeIcon icon={faGithub} />
        </a>
      </li>
      <li>
        <a href='https://www.facebook.com/zaki.mohsen.1' className='Facebook' target="_blank" rel="noreferrer" aria-label="Facebook">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
      </li>
      <li>
        <a href='https://www.linkedin.com/in/zaki-mohsen-764896166/' className='Linkedin' target="_blank" rel="noreferrer" aria-label="Linkedin">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      </li>
      <li>
        <a href='https://www.instagram.com/zakimohsen14_/' className='Instagram' target="_blank" rel="noreferrer" aria-label="Instagram">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </li>
      <li>
        <a href='mailto:zakimohsen14@gmail.com' className='Gmail' target="_blank" rel="noreferrer" aria-label="Gmail">
        <FontAwesomeIcon icon={faM} />
        </a>
      </li>
      <li>
        <a href='https://m.me/zaki.mohsen.1/' className='Messenger' target="_blank" rel="noreferrer" aria-label="Messenger">
        <FontAwesomeIcon icon={faFacebookMessenger} />
        </a>
      </li>
      <li>
        <a href='https://wa.me/+201024336192' className='WhatsApp' target="_blank" rel="noreferrer" aria-label="WhatsApp">
        <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </li>
    </ul>
    <p className='made'>Made By <span>Zaki Mohsen</span></p>
  </section>
);

export default Footer;
