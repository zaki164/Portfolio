import { faHandPointRight } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css';

import AOS from 'aos';
AOS.init({
  once: true,
});

const About = () => {
  return (
    <section className='About section_padding'>
      <h2 className='main_heading'>About Me</h2>
      <Container>
        <article className="qual_cont" data-aos={"fade-up"}>
          <p>Hi , I'm a Front-end web developer with <span>1</span>+ years of experience in designing and building responsive web apps.</p>
          <p><span>2022</span><FontAwesomeIcon icon={faHandPointRight} /> Graduated with a very good grade , Bachelor in Computers and Control Systems Engineering, Mansoura University.</p>
        </article>
        <article className="About_Info" data-aos={"fade-up"}>
          <Row>
            <Col xs={12} md={6} className="col_info mb-3">
              <p>Name:</p>
              <p>Zaki Mohsen</p>
            </Col>
            <Col xs={12} md={6} className="col_info mb-3">
              <p>Age:</p>
              <p className='fontalt mt-1'>23</p>
            </Col>
            <Col xs={12} md={6} className="col_info mb-3">
              <p>Country:</p>
              <p>Egypt</p>
            </Col>
            <Col xs={12} md={6} className="col_info mb-3">
              <p>CV:</p>
              <a href="https://drive.google.com/file/d/10ReLm0LHJpqtmNURFZlEK5dVawfrRhWj/view?usp=sharing" className='view custom_button' target="_blank" rel="noreferrer">View</a>
            </Col>
            <Col xs={12} md={6} className="col_info mb-0">
              <p>Phone:</p>
              <p className='fontalt mt-1'>01010386649</p>
            </Col>
            <Col xs={12} md={6} className="col_info mb-0">
              <p>Gmail:</p>
              <p className='gmail'>zakimohsen14@gmail.com</p>
            </Col>
          </Row>
        </article>
        <article className="About_passion" data-aos={"fade-up"}>
          <p>I'm looking forward to building a long-term relationship with my clients. The programming is my Passion , I love to learn something new everyday</p>
          <p><FontAwesomeIcon icon={faHandPointRight} /> And Finally , My favourite Sport is Football</p>
        </article>
      </Container>
    </section>
  )
}

export default About