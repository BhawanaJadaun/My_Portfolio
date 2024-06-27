import React from "react";
import "./about.css";
import { Typewriter } from "react-simple-typewriter";
import html from "../../assets/icons8-html-48.png";
import java from "../../assets/icons8-java-48.png";
import css from "../../assets/icons8-css-48.png";
import javascript from "../../assets/icons8-javascript-48.png";
import react from "../../assets/react.svg";
import Tailwand from "../../assets/icons8-tailwind-css-48.png";
import node from "../../assets/icons8-nodejs-48.png";
import mongodb from "../../assets/icons8-mongodb-a-cross-platform-document-oriented-database-program-24.png";
import { Link } from "react-router-dom";


const About = () => {
  return (
    <>
      <div className="about" id="about">
        <div className="about-left">
          <p className="greeting">Nice To Meet You</p>
          <h2 className="name">Bhawana Jadaun</h2>
          <h1 className="heading">
            <Typewriter
              words={["Web developer & designer"]}
              loop={0} // 0 means infinite loop
              cursor
              cursorStyle="|"
              typeSpeed={100} // Slower typing speed
              deleteSpeed={80} // Slower deleting speed
              delaySpeed={1500} // Delay before typing starts
            />
          </h1>
          <div className="aboutp-btn">
            <Link to ="/portfolio">
              <button className="project-btn">Got a Project</button>
            </Link>
          </div>
        </div>
        <div className="about-right">
          <p className="intro">
            Hello there! My name is <span>Bhawana Jadaun</span>. I am a{" "}
            <span>web designer & developer,</span> and I'm very passionate and
            dedicated to my work. Innovative <span>MERN Stack Developer</span>{" "}
            with a passion for creating dynamic and responsive web applications.
            Adept in both frontend and backend development, with hands-on
            experience in{" "}
            <span>
              HTML5, CSS3, JavaScript, React.js, Node.js, and MongoDB, Rest API.
            </span>{" "}
            Skilled in building and optimizing web applications, and
            continuously seeking to expand knowledge in emerging web
            technologies.
          </p>
        </div>
      </div>
      <div className="Skill">
        <div className="skill-heading">
          <h2>~ SKILLS</h2>
          <h1>
            Tech <span>Stacks</span> I use
          </h1>
        </div>
        <div className="Skill-timeline">
          <div className="skill-container left-container">
            <img src={html} />
            <div className="text-box">
              <h2>HTML5</h2>
              <p>
                HyperText Markup Language is the standard markup language for
                documents designed to be displayed in a web browser. It defines
                the content and structure of web content
              </p>
              <span className="left-container-arrow"></span>
            </div>
          </div>
          <div className="skill-container right-container">
            <img src={css} />
            <div className="text-box">
              <h2>CSS3</h2>
              <p>
                Cascading Style Sheets is a style sheet language used for
                specifying the presentation and styling of a document written in
                a markup language such as HTML or XML. CSS is a cornerstone
                technology of the World Wide Web, alongside HTML and JavaScript
              </p>
              <span className="right-container-arrow"></span>
            </div>
          </div>
          <div className="skill-container left-container">
            <img src={javascript} />
            <div className="text-box">
              <h2>JavaScript</h2>
              <p>
                JavaScript, often abbreviated as JS, is a programming language
                and core technology of the Web, alongside HTML and CSS. 99% of
                websites use JavaScript on the client side for webpage behavior.
                Web browsers have a dedicated JavaScript engine that executes
                the client code.
              </p>
              <span className="left-container-arrow"></span>
            </div>
          </div>
          <div className="skill-container right-container">
            <img src={react} />
            <div className="text-box">
              <h2>React</h2>
              <p>
                React is a free and open-source front-end JavaScript library for
                building user interfaces based on components. It is maintained
                by Meta and a community of individual developers and companies.
                React can be used to develop single-page, mobile, or
                server-rendered applications with frameworks like Next.js
              </p>
              <span className="right-container-arrow"></span>
            </div>
          </div>
          <div className="skill-container left-container">
            <img src={java} />
            <div className="text-box">
              <h2>Java</h2>
              <p>
                Java is a high-level, class-based, object-oriented programming
                language that is designed to have as few implementation
                dependencies as possible.
              </p>
              <span className="left-container-arrow"></span>
            </div>
          </div>
          <div className="skill-container right-container">
            <img src={Tailwand} />
            <div className="text-box">
              <h2>TAILWINDCSS</h2>
              <p>
                Tailwind CSS is an open-source CSS framework. The main feature
                of this library is that, unlike other CSS frameworks like
                Bootstrap, it does not provide a series of predefined classes
                for elements such as buttons or table
              </p>
              <span className="right-container-arrow"></span>
            </div>
          </div>
          <div className="skill-container left-container">
            <img src={node} />
            <div className="text-box">
              <h2>Node</h2>
              <p>
                Node.js is a cross-platform, open-source JavaScript runtime
                environment that can run on Windows, Linux, Unix, macOS, and
                more. Node.js runs on the V8 JavaScript engine, and executes
                JavaScript code outside a web browse
              </p>
              <span className="left-container-arrow"></span>
            </div>
          </div>
          <div className="skill-container right-container">
            <img src={mongodb} />
            <div className="text-box">
              <h2>MongoDB</h2>
              <p>
                MongoDB is a source-available, cross-platform, document-oriented
                database program. Classified as a NoSQL database product,
                MongoDB utilizes JSON-like documents with optional schemas.
                MongoDB is developed by MongoDB Inc. and current versions are
                licensed under the Server Side
              </p>
              <span className="right-container-arrow"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
