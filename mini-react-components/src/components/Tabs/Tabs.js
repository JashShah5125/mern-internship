import React, { useState } from "react";
import "./styles.css";

function Tabs() {
  const [tab, setTab] = useState(1);

  return (
    <div className="box">
      <h3>Tabs</h3>
      <button onClick={() => setTab(1)}>Tab 1</button>
      <button onClick={() => setTab(2)}>Tab 2</button>

      {tab === 1 && <p>Content 1</p>}
      {tab === 2 && <p>Content 2</p>}
    </div>
  );
}

export default Tabs;