import { useState } from "react";

const App = () => {
  // adds state to the component and renders it initialized with the value of zero
  const [value, setValue] = useState(0)
  // event handlers
 const setToValue = (newValue) => () =>  setValue(newValue)
  
  
  return (
    <div>
      {value}
      <button onClick={setToValue(0)} >zero</button>
      <button onClick={setToValue(100)} >hundred</button>
      <button onClick={setToValue(value + 1)} >increment button</button>
    </div>
  )
}


export default App
