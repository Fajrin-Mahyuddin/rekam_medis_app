import React, { useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState("coba");
  const a = () => {
    setState("Baco");
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>This hasbeen changed by Fajrin mahyuddin</p>
        <p>{state}</p>
        <button onClick={a}>Click me</button>
      </header>
    </div>
  );
}

export default App;
