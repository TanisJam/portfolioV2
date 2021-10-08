import React from "react";
import { StyledProject, Line } from "./StyledComponents";

export default function Project({ project }) {
  return (
    <>
      <StyledProject>
        <div className="image-links">
          <img src={`./assets/${project.imgName}`} alt="imagen" />
          <div className={"links"}>
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              Live
            </a>
            <a href={project.source} target="_blank" rel="noopener noreferrer">
              Source
            </a>
          </div>
        </div>
        <div className="content">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      </StyledProject>
      <Line />
    </>
  );
}
