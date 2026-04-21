import React, { useState } from "react";
import "./styles.css";

function PasswordValidation() {
  const [password, setPassword] = useState("");

  return (
    <div>
      <h3>Password Validation</h3>
      <input
        type="password"
        placeholder="Enter password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <p>{password.length >= 6 ? "✅ Valid" : "❌ Too short"}</p>
    </div>
  );
}

export default PasswordValidation;