import './App.css';
import { useState } from 'react';

const step = 10;

function Button(props) {
  const handleClick = () => props.onClickFunction(props.increment.x, props.increment.y);
  return (
    <button onClick={handleClick}></button>
  );
}

function Logo(props) {
  const position = {
    top: props.position.y + 'px',
    left: props.position.x + 'px'
  }
  return (
    <div style={position}>
      <img src="logo192.png" className="app-logo" alt="logo" />
    </div>
  );
}

function App() {
  const defaultPoint = {x: 150, y :150};
  const [point, setPosition] = useState(defaultPoint);
  const move = (deltaX, deltaY) => {
    const newX =  point.x + deltaX;
    const newY =  point.y + deltaY;
    if (newX > 300 || newX < 0 ||
        newY > 300 || newY < 0)  return;

    setPosition({x: newX, y: newY});
  }

  return (
    <div className="app">
      <div className="grid-container">
        <div className="grid-item header"></div>
        <div className="grid-item button">
          <Button onClickFunction={move} increment={{x:0, y:-step}}></Button>
        </div>
        <div className="grid-item"></div>  
        <div className="grid-item">
          <Button onClickFunction={move} increment={{x:-step, y:0}}></Button>
        </div>
        <div className="grid-item area">
          <Logo position={point}></Logo>          
        </div>
        <div className="grid-item button">
          <Button onClickFunction={move} increment={{x:step, y:0}}></Button>
        </div>  
        <div className="grid-item footer"></div>
        <div className="grid-item">
          <Button onClickFunction={move} increment={{x:0, y:step}}></Button>
        </div>
        <div className="grid-item"></div>
      </div>
    </div>
  );
}

export default App;
