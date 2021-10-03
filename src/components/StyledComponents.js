import styled from "styled-components";

export const StyledNav = styled.nav`
  padding: 1rem 20vw;
  display: flex;
  justify-content: flex-end;
  background-color: var(--light);
`;
export const StyledNavLink = styled.button`
  border: none;
  background-color: transparent;
  font-weight: 800;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  color: var(--dark);
  &:hover {
    color: black;
    text-decoration: underline var(--primary) 3px;
    text-underline-offset: .2rem;
  }
`;
export const Hero = styled.div`
  background-color: var(--light);
  display: flex;
  flex-wrap: wrap;
  gap: 5rem;
  align-items: center;
  justify-content: center;
  padding: 5rem 1rem;
`;

export const HeroImage = styled.img`
  height: 11rem;
  background-color: var(--dark);
  width: auto;
  border-radius: 100%;
`;
export const HeroContent = styled.div`
  width: clamp(5rem, 90vw, 20rem);
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const BtnPrimary = styled.button`
  background-color: var(--primary);
  color: white;
  font-weight: 800;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  margin-right: auto;
  border: none;
  &:hover {
    filter: saturate(2);
  }
`;
