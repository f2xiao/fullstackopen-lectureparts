import { useState } from "react";

const Button = ({OnClick, text}) => <button onClick={OnClick} > {text} </button> 

const Display = ({counter}) => <p>{counter}</p>

const App = () => {
  // adds state to the component and renders it initialized with the value of zero
  const [counter, setCounter] = useState(0);

  // event handlers
  const increaseByOne = () => setCounter(counter + 1); 
  const decreaseByOne = () => setCounter(counter - 1); 
  const resetToZero = () => setCounter(0); 
  
  return (
    <div>
      <Display counter={counter} />
      <Button OnClick={increaseByOne} text={'plus'} />
      <Button OnClick={decreaseByOne} text={'minus'} />
      <Button OnClick={resetToZero} text={'zero'} />
    </div>
  )
}


export default App
