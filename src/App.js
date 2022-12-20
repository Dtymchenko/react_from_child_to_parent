import "./App.css";
import React from "react";
import Child from "./components/Child";

function App() {
  const [data, setData] = React.useState("");
  function fromChild(str) {
    setData(str);
  }
  return (
    <div className="App">
      <div>
        This is div in Parent Component
        <div>{data ? data : "no data"}</div>
        <div>____________________________</div>
      </div>
      <Child fromChild={fromChild} />
    </div>
  );
}

export default App;
