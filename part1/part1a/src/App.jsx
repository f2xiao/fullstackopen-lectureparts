import { useState } from "react";

const Button = ({OnClick, text}) => <button onClick={OnClick} > {text} </button> 


const App = () => {
  // adds state to the component and renders it initialized with the value of zero
  const [counter, setCounter] = useState(0);

  // event handlers
  const increaseByOne = () => setCounter(counter + 1); 
  const decreaseByOne = () => setCounter(counter - 1); 
  const resetToZero = () => setCounter(0); 
  
  return (
    <div>
      <p>{counter}</p>
      <Button OnClick={increaseByOne} text={'plus'} />
      <br />
      <Button OnClick={decreaseByOne} text={'minus'} />
      <br />
      <Button OnClick={resetToZero} text={'zero'} />
      <hr />
    </div>
  )
}


export default App
