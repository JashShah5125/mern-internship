import React, { useState } from "react";
import "./styles.css";

function DarkMode() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "box dark" : "box"}>
      <h3>Dark Mode</h3>
      <button onClick={() => setDark(!dark)}>Toggle</button>
    </div>
  );
}

export default DarkMode;