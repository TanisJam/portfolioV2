import React from "react";
import { StyledNav, StyledNavLink } from "./StyledComponents";

export default function Nav({ showContact }) {
  return (
    <StyledNav>
      <StyledNavLink href="http:#work">Works</StyledNavLink>
      <StyledNavLink onClick={() => showContact()}>Contact</StyledNavLink>
    </StyledNav>
  );
}
