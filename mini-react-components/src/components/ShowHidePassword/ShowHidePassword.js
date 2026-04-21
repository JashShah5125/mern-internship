import React, { useState } from "react";
import "./styles.css";

function ShowHidePassword() {
  const [show, setShow] = useState(false);

  return (
    <div className="box">
      <h3>Show / Hide Password</h3>
      <input type={show ? "text" : "password"} />
      <button onClick={() => setShow(!show)}>Toggle</button>
    </div>
  );
}

export default ShowHidePassword;