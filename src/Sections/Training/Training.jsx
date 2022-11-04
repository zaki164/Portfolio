import { faHandPointRight } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from 'react-bootstrap';
import './Training.css';

import AOS from 'aos';
AOS.init({
  once: true,
});

const Training = () => {
  return (
    <section className='Training section_padding' data-aos={"fade-up"}>
      <h2 className='main_heading'>Training</h2>
      <Container>
        <article className="qual_cont">
          <p><span>September 2021</span><FontAwesomeIcon icon={faHandPointRight} /> <span className='training_company'>Information Technology Institute (ITI):</span> Learned about web applications development front-end and back-end with php.</p>
        </article>
      </Container>
    </section>
  )
}
export default Training