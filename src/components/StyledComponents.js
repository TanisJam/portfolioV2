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
  color: var(--light);
  &:hover {
    cursor: pointer;
    color: white;
    text-decoration: underline var(--primary) 3px;
    text-underline-offset: 0.2rem;
  }
`;
//OVERLAY
export const Overrlay = styled.div`
  z-index: 50;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;
//MODAL
export const Modal = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  z-index: 200;
  background-color: var(--white);
  max-width: min(90%, 40rem);
  height: fit-content;
  max-height: 25rem;
  border-radius: 0.5rem;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.25);
  //CONTACT
  form {
    padding: 1rem 0.5rem;
    width: min(100%, 20rem);
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: min(2.5rem, 2vh);
    h2 {
      color: var(--dark);
    }
    .form-group {
      width: 100%;
    }
    input,
    button,
    textarea {
      padding: 0.8rem;
      border: none;
      width: 100%;
      box-shadow: 0px 0px 2px 1px rgb(255, 100, 100, 0.2);
      &:hover {
        box-shadow: 0px 0px 4px 2px rgb(200, 200, 200, 0.5);
      }
      &:focus {
        outline: none;
        box-shadow: 0px 0px 1px 1px rgb(55, 55, 55, 0.5);
      }
    }
    textarea {
      resize: none;
      height: 3.5rem;
    }
    button {
      background-color: var(--primary);
      color: white;
      font-weight: 800;
      font-size: 1rem;
      padding: 0.5rem 1.2rem;
      margin-right: auto;
      border: none;
      &:hover {
        box-shadow: none;
        cursor: pointer;
        filter: saturate(2);
      }
    }
    .error {
      color: red;
      font-size: 0.8rem;
    }
  }
`;

//HERO
export const Hero = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5rem;
  align-items: center;
  justify-content: center;
  padding: 5rem 1rem;

  max-width: 60rem;
  margin: 2rem auto;
`;
export const HeroImage = styled.img`
  height: 13rem;
  background-color: var(--dark);
  width: auto;
  border-radius: 100%;
  box-shadow: 0px 0px 2px 1px black;
`;
export const HeroContent = styled.div`
  width: clamp(5rem, 90vw, 20rem);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @keyframes bg-move {
    0% {
      background-position: 500% 0;
    }
    50% {
      background-position: 0 0;
    }
    100% {
      background-position: 500% 0;
    }
  }
  .name {
    background-image: linear-gradient(
      60deg,
      rgba(33, 33, 33, 1) 0%,
      rgba(255, 100, 100, 1) 25%,
      rgba(102, 34, 204, 1) 75%,
      rgba(33, 33, 33, 1) 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    background-size: 500% auto;
    background-position: 0 100%;
  }
  .name:hover {
    -webkit-text-fill-color: transparent;
    animation: bg-move 10s ease-in-out infinite;
  }
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
  /* background-color: var(--white); */
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  .blur{
    position: absolute;
    background-color: rgba(255, 255, 255, 0.1);
    height: 100%;
    width: 100%;
    z-index: -1;
    filter: blur(2px);
    max-width: 60rem;
  }
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
