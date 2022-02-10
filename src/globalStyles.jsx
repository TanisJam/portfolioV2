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
    position: relative;
    font-family: 'Heebo';
    height: 100%;
    color: white;

    background: linear-gradient(81deg, #4286f4 23%, #373B44 100%);
    -webkit-animation: fadeIn 1 1s ease-out;
    -moz-animation: fadeIn 1 1s ease-out;
    -o-animation: fadeIn 1 1s ease-out;
    animation: fadeIn 1 1s ease-out;
  }
  .light {
    position: absolute;
    width: 0px;
    height: 8px;
    opacity: .5;
    background-color: white;
    box-shadow: rgba(255, 255, 255, 0.5) 0px 0px 20px 5px;
    opacity: 0;
    top: 100%;
    bottom: 0px;
    left: 0px;
    right: 0px;
    margin: auto;
    z-index: -1;
}

.x1{
  animation: floatUp 20s infinite linear;

  transform: scale(1.0);
}

.x2{
  animation: floatUp 35s infinite linear;
  transform: scale(1.6);
  left: 15%;
}

.x3{
  animation: floatUp 12s infinite linear;
  transform: scale(.5);
  left: -15%;
}

.x4{
  animation: floatUp 23s infinite linear;
  transform: scale(1.2);
  left: -34%;
}

.x5{
  animation: floatUp 40s infinite linear;
  transform: scale(2.2);
  left: -57%;
}

.x6{
  animation: floatUp 15s infinite linear;
  transform: scale(.8);
  left: -81%;
}

.x7{
  animation: floatUp 26s infinite linear;
  transform: scale(3.2);
  left: 37%;
}

.x8{
  animation: floatUp 24s infinite linear;
  transform: scale(1.7);
  left: 62%;
}

.x9{
  animation: floatUp 20s infinite linear;
  transform: scale(0.9);
  left: 85%;
}

@keyframes floatUp{
  0%{top: 100%; opacity: 0;}
  25%{opacity: 1;}
  50%{top: 0%; opacity: .8;}
  75%{opacity: 1;}
  100%{top: -100%; opacity: 0;}
}
`;
