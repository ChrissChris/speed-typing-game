import React, { useState, useEffect } from "react";

function App() {
  const [text, setText] = useState("");
  return (
    <div className="App">
      <h1>How fast do you type?</h1>
      <textarea></textarea>

      <button>Start</button>
      <h4>Time Remaining:</h4>
    </div>
  );
}

export default App;
