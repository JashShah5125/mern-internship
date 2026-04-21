import React, { useState } from "react";
import "./styles.css";

function DisableSubmit() {
  const [input, setInput] = useState("");

  return (
    <div className="box">
      <h3>Disable Submit</h3>
      <input onChange={(e) => setInput(e.target.value)} />
      <button disabled={!input}>Submit</button>
    </div>
  );
}

export default DisableSubmit;