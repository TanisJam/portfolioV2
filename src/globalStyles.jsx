import { createGlobalStyle } from "styled-components";
import Heebo from "./fonts/Heebo.ttf";

export default createGlobalStyle`
  @font-face {
      font-family: Heebo;
      src: url(${Heebo}) format('truetype');
    }
  * { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;      
    }
  :root {
    --primary: #ff6464;
    --secondary: #6622CC;
    --dark: #212121;
    --light: #C3D2D5;
    --white: #EDF7FA;
  }
  body { 
    font-family: 'Heebo';
    background-color: var(--light);
  }
`;
