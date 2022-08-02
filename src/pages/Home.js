import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  const mailto = "mailto:hu.haoy.job@gmail.com"
  return (
    <div className="home">
      <div className="about">
        <h2>Haoyang Hu</h2>
        <div className="prompt">
          <p>MS in Computer Software Engineering from Northeastern University.</p>
          <LinkedInIcon onClick={()=>{window.location.href="https://www.linkedin.com/in/haoyang-hu-neu/"}} />
          <EmailIcon onClick={()=>{window.location.href=mailto}}/>
          <GithubIcon onClick={()=>{window.location.href="https://github.com/HaoyangHu"}} />
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, React Native,
              Bootstrap
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS, GraphQL,
              MySQL, MongoDB, DynamoDB 
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C#, C, C++, TypeScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
