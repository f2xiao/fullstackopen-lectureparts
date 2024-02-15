import { useState } from "react";

const App = () => {
  // adds state to the component and renders it initialized with the value of zero
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);
  const [total, setToatl] = useState(left+right)

  // event handlers
  const handleLeft = () => { 
    const updatedLeft = left + 1;
    setLeft(updatedLeft);
    setToatl(updatedLeft + right);
    setAll(allClicks.concat('L')) 
  }
  const handleRight = () => { 
    const updatedRight = right + 1;
    setRight(updatedRight);
    setToatl(left + updatedRight);
    setAll(allClicks.concat('R')) 
  }
  
  
  return (
    <div>
      {left}
      <button onClick={handleLeft} >left</button>
      <button onClick={handleRight} >right</button>
      {right}
      <p>{allClicks.join('')}</p>
      <p>Total clicks: {total}</p>
    </div>
  )
}


export default App
