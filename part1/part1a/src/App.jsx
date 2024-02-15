import { useState } from "react";

const App = () => {
  // adds state to the component and renders it initialized with the value of zero
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
 
  // event handlers
  const handleLeft = () => { setLeft(left + 1) }
  const handleRight = () => { setRight(right + 1) }
  
  return (
    <div>
      {left}
      <button onClick={handleLeft} >left</button>
      <button onClick={handleRight} >right</button>
      {right}
    </div>
  )
}


export default App
