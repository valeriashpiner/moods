import styled, { keyframes, createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    width: 100%;
  }
  body {
    height: 100%;
    width: 100%;
    font-family: 'Thasadith';
    margin: 0;
  }
  ul {
    padding: 0;
  }
`

export const FisrtGradient = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  background: #a1c4fd;
  background: linear-gradient(0deg, #c2e9fb 30%, #a1c4fd 100%);
  opacity: 1;
`
const bgFade1 = keyframes`
  0% {
    opacity: 0;
  }
  17% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  67% {
    opacity: 0;
  }
`;

export const SecondGradient = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  background: #c2e9fb;
  background: linear-gradient(180deg, #c2e9fb 30%, #faaca8 100%);
  opacity: 0;
  animation: ${bgFade1} 32s 6s infinite;
`

const bgFade2 = keyframes`
  0% {
    opacity: 0;
  }
  34% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  67% {
    opacity: 0;
  }
  84% {
    opacity: 0;
  }
`;

export const ThirdGradient = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  background: #faaca8;
  background: linear-gradient(180deg, #faaca8 30%, #ddd6f3 100%);
  opacity: 0;
  animation: ${bgFade2} 32s 6s infinite;
`

export const Footer = styled.footer`
  display: flex;
  height: 10vh;
  justify-content: center;
  align-items: flex-end;
`;

export const Sign = styled.span`
  font-size: 16px;
  color: #FFFFFF;
`;