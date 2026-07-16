import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

import Card from "../components/Card";

function App() {

  let myObj={
    userName:"Harsh",
    age:22
  }
  let myArr=[23,40,27,34,42,87]

  return (
    <div>
      <h1 className="bg-green-400 p-4 m-5 w-50">Tailwind Test</h1>
      <Card name="chaiAurCode" intro="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            tempora ipsum soluta amet corporis accusantium aliquid consectetur
            eaque!" someObj={myObj} someArr={myArr} />
      

    </div>
  );
}

export default App;
