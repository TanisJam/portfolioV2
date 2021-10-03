import styled from "styled-components";

export const StyledNav = styled.nav`
  margin: 1rem auto;
  width: clamp(5rem, 80vw, 800px);
  display: flex;
  justify-content: flex-end;
`;

export const StyledNavLink = styled.button`
  border: none;
  background-color: transparent;
  font-weight: 800;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  color: var(--dark);
  &:hover {
    cursor: pointer;
    color: black;
    text-decoration: underline var(--primary) 3px;
    text-underline-offset: 0.2rem;
  }
`;

export const Hero = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5rem;
  align-items: center;
  justify-content: center;
  padding: 5rem 1rem;
`;

export const HeroImage = styled.img`
  height: 13rem;
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
    cursor: pointer;
    filter: saturate(2);
  }
`;

export const Secction = styled.div`
  background-color: var(--white);
`;

export const SecctionWork = styled.div`
  margin: auto;
  width: clamp(5rem, 80vw, 800px);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
  padding: 2rem 1rem;
  .technologys {
    cursor: default;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const Technology = styled.span`
  color: white;
  background-color: var(--secondary);
  border-radius: 1rem;
  font-size: 0.9rem;
  padding: 0.2rem 0.6rem;
  margin: 0.5rem;
`;

export const StyledProjects = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin: auto;
  width: clamp(5rem, 80vw, 800px);
  padding: 2rem 1rem;
`;
export const StyledProject = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  img {
    max-width: 15rem;
    height: 100%;
    width: auto;
    border-radius: 0.5rem;
  }
  .content {
    width: clamp(5rem, 60vw, 25rem);
  }
`;
export const Line = styled.span`
  width: clamp(5rem, 80vw, 800px);
  height: 2px;
  background-color: var(--white);
  filter: opacity(.5);
`;
