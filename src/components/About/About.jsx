import { SiExpress, SiMongodb } from "react-icons/si";
import "./About.css";
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

const About = () => {
  return (
    <div className="about">
      <h2>About</h2>
      <span className="short-line"></span>
      <p className="about-text">
        As a dedicated and passionate Full Stack Junior Developer, I thrive on
        building innovative and efficient web applications. My expertise spans
        both front-end and back-end technologies, enabling me to deliver
        comprehensive solutions that meet user needs. With a strong foundation
        in HTML, CSS, JavaScript, and experience in frameworks like React 
        , I am adept at creating seamless, responsive, and user-friendly
        interfaces. My commitment to continuous learning and staying updated
        with the latest industry trends ensures that I am always ready to tackle
        new challenges and contribute effectively to dynamic development teams.
      </p>
      <h2>My skills</h2>
      <span className="short-line"></span>
      <div className="skills">
        <div className="skill">
        <FaHtml5 className="skill-icon"/>
        <p>HTML</p>
        </div>
        <div className="skill" >
        <FaCss3Alt className="skill-icon"/>
        <p>CSS</p>
        </div>
        <div className="skill">
        <IoLogoJavascript className="skill-icon"/>
        <p>JavaScript</p>
        </div>
        <div className="skill">
        <FaReact className="skill-icon"/>
        <p>React</p>
        </div>
        <div className="skill">
        <SiExpress className="skill-icon"/>
        <p>express</p>
        </div>
        <div className="skill">
        <SiMongodb className="skill-icon"/>
        <p>MongoDb</p>
        </div>
        
      </div>
    </div>
  );
};

export default About;
