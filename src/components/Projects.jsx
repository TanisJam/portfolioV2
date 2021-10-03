import React from "react";
import { StyledProjects } from "./StyledComponents";
import projectList from "../assets/projects.json";
import Project from "./Project";

export default function Projects() {
  const projects = projectList.projects;
  return (
    <StyledProjects>
      <h3>Some projects</h3>
      {projects.map((p) => {
        return <Project project={p} key={p.title} />;
      })}
    </StyledProjects>
  );
}
