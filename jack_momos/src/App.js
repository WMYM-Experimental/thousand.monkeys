import { useState } from "react";
import "./App.css";

function App() {
  const [inputUp, setInputUp] = useState("");
  const [inputBottom, setInputBottom] = useState("");

  const changeInputUp = (event) => {
    setInputUp(event.target.value);
  };
  const changeInputBottom = (event) => {
    setInputBottom(event.target.value);
  };

  return (
    <div className="App">
      {/* Select mood picker */}
      <select>
        <option value="angry"> Angry </option>
        <option value="hungry"> Hungry </option>
        <option value="sad"> Sad </option>
        <option value="happy"> Happy </option>
        <option value="lazy"> Lazy </option>
      </select>
      <br />

      {/* input text up/bottom */}
      <input
        onChange={changeInputUp}
        type="text"
        placeholder="Put some text..."
      ></input>
      <br />
      <input
        onChange={changeInputBottom}
        type="text"
        placeholder="Put some text..."
      ></input>
      <br />

      {/* export button to (.jpg, .png) */}
      <button>Export</button>

      {/* text */}
      <div>
        <span>{inputUp}</span>
        <br />
        <span>{inputBottom}</span>
      </div>
    </div>
  );
}

export default App;
