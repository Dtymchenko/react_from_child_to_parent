import React from "react";

export default function Child({ fromChild }) {
  const [inputValue, setInputValue] = React.useState("");
  const buttonHandler = () => {
    fromChild(inputValue);
    setInputValue("");
  };

  return (
    <div>
      This is div in Child Component. If you type anything in this input below
      and press button - this data will be passed and rendered in Parent
      Component
      <div>
        <input
          type="text"
          value={inputValue}
          placeholder="Enter something"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        ></input>
        <button onClick={buttonHandler}>Click Me!</button>
      </div>
    </div>
  );
}
