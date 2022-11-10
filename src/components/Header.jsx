import React from "react";
import imgProfile from "../assets/imgProfile.png";
import { ReactComponent as GitHubLogo } from "../assets/github.svg";
import { ReactComponent as EmailLogo } from "../assets/email.svg";
import { ReactComponent as LinkedInLogo } from "../assets/linkedin.svg";
import { Hero, HeroContent, HeroImage, BtnPrimary } from "./StyledComponents";

export default function Header() {
  return (
    <Hero>
      <HeroImage src={imgProfile} />
      <HeroContent>
        <h1>
          Hi, I am <span className="name">Mauricio</span>, Front-end Developer
        </h1>
        <p>
          Passionate by technology I enjoy to be a self taught. Learning new
          things to keep improving is a powerful engine. This is applicable for
          everything, but it is what I like the most about the IT world.
        </p>
        <div className="contact">
          <a
            href="https://github.com/TanisJam"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubLogo />
          </a>
          <a
            href="mailto:mauricionromero@hotmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EmailLogo />
          </a>
          <a
            href="http://linkedin.com/in/mauricionromero"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInLogo />
          </a>
        </div>
        <BtnPrimary href="/resume/CV_ Mauricio_Romero.pdf" download>
          Download Resume
        </BtnPrimary>
      </HeroContent>
    </Hero>
  );
}
