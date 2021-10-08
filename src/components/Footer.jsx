import React from "react";
import { StyledFooter } from "./StyledComponents";
import { ReactComponent as GitHubLogo } from "../assets/github.svg";
import { ReactComponent as EmailLogo } from "../assets/email.svg";
import { ReactComponent as LinkedInLogo } from "../assets/linkedin.svg";

export default function Footer() {
  return (
    <StyledFooter>
      <div className="contact">
        <a href="https://github.com/TanisJam" target="_blank" rel="noopener noreferrer">
          <GitHubLogo />
        </a>
        <a href="mailto:mauricionromero@hotmail.com" target="_blank" rel="noopener noreferrer">
          <EmailLogo />
        </a>
        <a href="http://linkedin.com/in/mauricionromero" target="_blank" rel="noopener noreferrer">
          <LinkedInLogo />
        </a>
      </div>
      <p>Mauricio Romero © 2021</p>
    </StyledFooter>
  );
}
