import React, { useState } from "react";
import "./styles.css";

function CharacterCounter() {
  const [text, setText] = useState("");

  return (
    <div>
      <h3>Character Counter</h3>
      <textarea 
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)} 
      />
      <p>Count: {text.length}</p>
    </div>
  );
}

export default CharacterCounter;