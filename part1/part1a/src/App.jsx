import { useState } from "react";

const Button = ({handleClick, text}) => <button onClick={handleClick} >{text}</button>

const App = () => {
  // adds state to the component and renders it initialized with the value of zero
  const [value, setValue] = useState(10)
  // event handlers
 const setToValue = (newValue) => () =>  setValue(newValue)
  
  
  return (
    <div>
      {value}
      <Button handleClick={setToValue(0)} text="reset" />
      <Button handleClick={setToValue(100)} text="hundred" />
      <Button handleClick={setToValue(0)} text="increment" />
    </div>
  )
}


export default App
