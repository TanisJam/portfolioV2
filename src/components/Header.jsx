import React from "react";
import imgProfile from "../assets/imgProfile.png";
import { Hero, HeroContent, HeroImage, BtnPrimary } from "./StyledComponents";

export default function Header() {
  return (
    <div>
      <Hero>
        <HeroImage src={imgProfile} />
        <HeroContent>
          <h1>Hi, I am Mauricio, Front-end Developer</h1>
          <p>
            Passionate by technology I enjoy to be a self taught. Learning new
            things to keep improving my solutions is a part of my routine.
            Probably my taste for video games guided me to that.
          </p>
          <BtnPrimary href="/resume/CV_ Mauricio_Romero.pdf" download>
            Download Resume
          </BtnPrimary>
        </HeroContent>
      </Hero>
    </div>
  );
}
