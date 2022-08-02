import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import ReactPlayer from 'react-player/lazy'
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";

  function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  const image = project.image;
  const link = project.link;
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <div className="image-container">
      <img src={image} />
      </div>
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      {
        project.name === "Tower Defense Game" ? 
        (<div>
          <ReactPlayer url= {link}/>
        </div>
        ): 
        (<GitHubIcon onClick={()=>{window.location.href=link}}/>)
      }
      
      
    </div>
  );
}

export default ProjectDisplay;
