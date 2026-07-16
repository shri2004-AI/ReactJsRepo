import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {


  let [count, setCount] = useState(0);
                  
  const addValue=()=>{
    // count=count+1

    // setCount(count+1)
    // setCount(count+1)
    // setCount(count+1)
    // setCount(count+1)

    setCount(prevCounter => prevCounter +1)
    setCount(prevCounter => prevCounter +1)
    setCount(prevCounter => prevCounter +1)
    setCount(prevCounter => prevCounter +1)
  }
  const removeValue=()=>{
    count=count-1
    setCount(count)
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value : {count}</h2>
      <button
      onClick={addValue}>Add Value:{count}</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value : {count}</button>
    </>
  );
}

export default App;
