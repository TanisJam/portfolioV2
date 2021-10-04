import React from "react";
import { StyledProject, Line } from "./StyledComponents";

export default function Project({ project }) {
  function showLinks() {
    console.log("Tocado");
    alert("tocado");
  }
  return (
    <>
      <StyledProject>
        <div className="image-links">
          <img
            src={`./assets/${project.imgName}`}
            alt="imagen"
            onFocus={showLinks}
          />
          <div className="links">
            <a href="https://www.google.com.ar/" target="_blank" rel="noreferrer">Live</a>
            <a href="https://www.google.com.ar/" target="_blank" rel="noreferrer">Source</a>
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
