import React from "react";
import { StyledProject, Line } from "./StyledComponents";

export default function Project({project}) {
  return (
    <>
    <StyledProject>
      <img src={`./assets/${project.imgName}`} alt="imagen" />
      <div className="content">
        <h3>{project.title}</h3>
        <p>
          {project.description}
        </p>
      </div>
    </StyledProject>
    <Line/>
    </>
  );
}
