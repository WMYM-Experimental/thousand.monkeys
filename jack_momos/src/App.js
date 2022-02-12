import "./App.css";

function App() {
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
      <input type="text" placeholder="Put some text..."></input>
      <br />
      <input type="text" placeholder="Put some text..."></input>
      <br />

      {/* export button to (.jpg, .png) */}
      <button>Export</button>
    </div>
  );
}

export default App;
