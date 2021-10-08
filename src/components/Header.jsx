import React from "react";
import imgProfile from "../assets/imgProfile.png";
import { Hero, HeroContent, HeroImage, BtnPrimary } from "./StyledComponents";

export default function Header() {
  return (
    <div>
      <Hero>
        <HeroImage src={imgProfile} />
        <HeroContent>
          <h1>
            Hi, I am <span className="name">Mauricio</span>, Front-end Developer
          </h1>
          <p>
            Passionate by technology I enjoy to be a self taught. Learning new
            things to keep improving is a powerful engine. This is applicable
            for everything, but it is what I like the most about the IT world.
          </p>
          <BtnPrimary href="/resume/CV_ Mauricio_Romero.pdf" download>
            Download Resume
          </BtnPrimary>
        </HeroContent>
      </Hero>
    </div>
  );
}
