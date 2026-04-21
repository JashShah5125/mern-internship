import React, { useState } from "react";
import "./styles.css";

function Toast() {
  const [show, setShow] = useState(false);

  return (
    <div className="box">
      <h3>Toast Notification</h3>
      <button onClick={() => setShow(true)}>Show Toast</button>

      {show && <p className="toast">✅ Success!</p>}
    </div>
  );
}

export default Toast;