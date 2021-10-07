import React from "react";
import { SecctionWork, Secction, Technology } from "./StyledComponents";

export default function Work() {
  const technologys = [
    "JavaScript",
    "CSS",
    "HTML",
    "Node",
    "Express",
    "JQuery",
    "ReactJS",
    "Bootstrap",
    "Less",
    "Tailwindcss",
    "Git",
    "Linux",
    "Webpack",
  ];
  return (
    <Secction id="work">
      <SecctionWork>
        <h3>My work</h3>
        <p>
          A part of my professional career was dedicated to IT technical
          support, but in recent years I am changing to software development.
          These are some of the technologies that I have used:{" "}
        </p>
        <div className="technologys">
          {technologys.map((t) => (
            <Technology key={t} >{t}</Technology>
          ))}
        </div>
      </SecctionWork>
    </Secction>
  );
}
