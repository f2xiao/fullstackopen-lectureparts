import { useState } from "react";


const History = ({allClicks}) => {
  if(allClicks.length == 0){
    return (
      <p>the app is used by pressing the buttons</p>
    )
  }
  return (
    <p>button press history: {allClicks.join('')}</p>
  )
}


const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick} >{text}</button>
  )
}

const App = () => {
  // adds state to the component and renders it initialized with the value of zero
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  // event handlers
  const handleLeft = () => { 
    const updatedLeft = left + 1;
    setLeft(updatedLeft);
    setAll(allClicks.concat('L')) 
  }
  const handleRight = () => { 
    const updatedRight = right + 1;
    setRight(updatedRight);
    setAll(allClicks.concat('R')) 
  }
  
  
  return (
    <div>
      {left}
      <Button handleClick={handleLeft} text='left' />
      <Button handleClick={handleRight} text='right' />
      {right}
      <History allClicks={allClicks}/>
    </div>
  )
}


export default App
