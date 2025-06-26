import React from 'react';
import './styles/ProjectCard.css';

const ProjectCardComp = (props) => {
  return (
    <>
      <div class="parent">
        <a href={props.link} target='blank'>
        <div class="proj-card">
          <div class="content-box">
            <span class="card-title">{props.name}</span>
            <p class="card-content">
              {props.desc}
            </p>
            <span class="see-more">{props.skills}</span><br/>
            <span class="see-more"><a href={props.host} target="_blank">{props.host? props.host: "Not hosted yet"}</a></span>
          </div>
          <div class="date-box">
            <span class="month"><img src={`/Images/Projects/${props.img}`} alt="" className="proj-img" /></span>
          </div>
        </div>
        </a>
      </div>

    </>
  );
}

export default ProjectCardComp