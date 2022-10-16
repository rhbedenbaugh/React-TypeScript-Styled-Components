import styled, { keyframes } from 'styled-components';

const pulseAnimation = keyframes`
from {
  transform: rotate(0deg);
  }
to {
  transform: rotate(360deg);
  }
0% { font-size: 5px; width: 25px; height: 25px; }
33% { font-size: 10px;  width: 50px; height: 50px; }
66% { font-size: 15px;  width:  75px;  height: 75px; }
100% { font-size: 20px; height: 100px; width: 100px;  }
`

export const StyledColorBlock = styled.div < { fill: string } >`
width: 100px;
height: 100px;
border-radius: 50px;
outline: solid 3px black;
margin: 20px;
display: flex;
justify-content: center;
align-items: center;
font-size: 20px;
background: ${prop => prop.fill};
animation: ${pulseAnimation};
animation-duration: 1s;
`
