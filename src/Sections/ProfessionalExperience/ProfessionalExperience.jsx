import { faHandPointRight } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";
import "./ProfessionalExperience.scss";

import AOS from "aos";
AOS.init({
  once: true,
});

const ProfessionalExperience = () => {
  return (
    <section className="Experience section_padding" data-aos={"fade-up"}>
      <h2 className="main_heading">Professional Experience</h2>
      <Container>
        <article className="qual_cont">
          <p>
            <span>Nov 2023 - present</span>
            <FontAwesomeIcon icon={faHandPointRight} />{" "}
            <span className="Experience_company">ITAD VIP:</span> working on
            many projects like
          </p>
          <div className="qual_cont_info">
            <p>
              <FontAwesomeIcon icon={faHandPointRight} />
              <p>
                <span className="Experience_company">Pickappo</span> (website
                and Dashboard){" "}
              </p>
            </p>
            <p>
              <FontAwesomeIcon icon={faHandPointRight} />
              <span className="Experience_company">Mandobk</span>
            </p>
            <p>
              <FontAwesomeIcon icon={faHandPointRight} />
              <span className="Experience_company">Ncare</span>
            </p>
            <p>
              <FontAwesomeIcon icon={faHandPointRight} />
              <p>
                with many <span className="Experience_company">tools</span>{" "}
                like: React.js, Next.js, Typescript, Tailwind
              </p>
            </p>
          </div>
        </article>
        <article className="qual_cont mt-4">
          <p>
            <span>April 2023 - Nov 2023</span>
            <FontAwesomeIcon icon={faHandPointRight} />{" "}
            <span className="Experience_company">Smart Link:</span> working on
            many projects like
          </p>
          <div className="qual_cont_info">
            <p>
              <FontAwesomeIcon icon={faHandPointRight} />
              <p>
                <span className="Experience_company">Scene Cinema</span>{" "}
                (website and Dashboard){" "}
              </p>
            </p>
            <p>
              <FontAwesomeIcon icon={faHandPointRight} />
              <span className="Experience_company">Project NXT</span>
            </p>
            <p>
              <FontAwesomeIcon icon={faHandPointRight} />
              <p>
                with many <span className="Experience_company">tools</span>{" "}
                like: React.js, Next.js, Typescript, Tailwind
              </p>
            </p>
          </div>
        </article>
      </Container>
    </section>
  );
};

export default ProfessionalExperience;
