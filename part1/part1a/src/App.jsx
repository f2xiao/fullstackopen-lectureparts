import { useState } from "react";



const App = () => {
  // adds state to the component and renders it initialized with the value of zero
  const [counter, setCounter] = useState(0);

  // execute the setTimeout
  setTimeout(
    () => setCounter(counter + 1), // increment the counter state
    1000 // every 1s
  );
  
  return (
    <div>
      {counter}
    </div>
  )
}


export default App
