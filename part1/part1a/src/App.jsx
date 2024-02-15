import { useState } from "react";

const App = () => {
  // adds state to the component and renders it initialized with the value of zero
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0
  })

 
  // event handlers
  const handleLeft = () => { setClicks(
    {
      left: clicks.left + 1, 
      right: clicks.right
    }
  )}
  const handleRight = () => { setClicks(
    {
      left: clicks.left, 
      right: clicks.right + 1
    }
  )}
  
  return (
    <div>
      {clicks.left}
      <button onClick={handleLeft} >left</button>
      <button onClick={handleRight} >right</button>
      {clicks.right}
    </div>
  )
}


export default App
