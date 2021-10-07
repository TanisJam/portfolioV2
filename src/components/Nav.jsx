import React from "react";
import { StyledNav, StyledNavLink } from "./StyledComponents";

export default function Nav() {
  return (
    <StyledNav>
      <StyledNavLink href="http:#work" >Works</StyledNavLink>
      <StyledNavLink href="http://www.google.com" target="_blank" rel="noreferrer">Contact</StyledNavLink>
    </StyledNav>
  );
}
