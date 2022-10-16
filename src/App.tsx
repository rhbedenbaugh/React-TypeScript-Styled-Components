import React, { useState } from 'react';
import './App.css';
import { StyledChangeColorButton } from './Button';
import { StyledColorBlock } from './Circle'

function App(): JSX.Element {
  const colors: string[] = ['red', 'brown', 'lightgreen', 'yellow', 'green', 'orange', 'purple', 'blue'];

  const [areaColor, setAreaColor] = useState('white');

  function changeToRandomColor() {
    setAreaColor(colors[Math.floor(Math.random() * colors.length)]);
  }

  return (
    <>
      <StyledColorBlock fill={areaColor}>{areaColor}</StyledColorBlock>
      <StyledChangeColorButton onClick={changeToRandomColor}>change color</StyledChangeColorButton>
    </>
  );
}

export default App;
