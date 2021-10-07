import styled from "styled-components";

//NAV
export const StyledNav = styled.nav`
  margin: 1rem auto;
  width: clamp(5rem, 80vw, 800px);
  display: flex;
  justify-content: flex-end;
`;
export const StyledNavLink = styled.a`
  text-decoration: none;
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

//MODAL
export const Modal = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 4rem;
  margin-left: auto;
  margin-right: auto;
  background-color: #333;
  width: clamp(5rem, 80vw, 800px);
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

//HERO
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
export const BtnPrimary = styled.a`
  text-decoration: none;
  background-color: var(--primary);
  color: white;
  font-weight: 800;
  font-size: 1rem;
  padding: 0.4rem 1.2rem;
  margin-right: auto;
  border: none;
  &:hover {
    cursor: pointer;
    filter: saturate(2);
  }
`;

//MY WORK
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

//PROJECTS
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
  .image-links {
    position: relative;
    img {
      max-width: 15rem;
      height: 11.3rem;
      width: auto;
      border-radius: 0.5rem;
    }
    .links {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      max-width: 15rem;
      height: 11.3rem;
      border-radius: 0.5rem;
      backdrop-filter: blur(0px);
      filter: opacity(00%);
      transition: backdrop-filter 0.1s ease-in-out, filter 0.1s ease;
      &:hover {
        filter: opacity(100%);
        backdrop-filter: blur(5px);
        a {
          display: flex;
        }
      }
      a {
        text-decoration: none;
        color: var(--white);
        background-color: var(--dark);
        padding: 0.5rem 1rem;
        border-radius: 2rem;
        display: none;
        &:hover {
          background-color: var(--primary);
        }
      }
    }
    .disabled {
    }
  }
  .content {
    width: clamp(5rem, 60vw, 25rem);
  }
`;
export const Line = styled.span`
  width: clamp(5rem, 80vw, 800px);
  height: 2px;
  background-color: var(--white);
  filter: opacity(0.5);
`;

//FOOTER
export const StyledFooter = styled.footer`
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  .contact {
    width: 9em;
    display: flex;
    justify-content: space-between;
    svg {
      color: var(--dark);
      height: 2rem;
      width: auto;
      &:hover {
        color: var(--secondary);
      }
    }
  }
  p {
    color: var(--dark);
    width: 12em;
    font-size: 0.9rem;
    font-weight: 500;
    text-align: center;
  }
`;
