import React, { useState } from "react";
import "./styles.css";

function LikeStock() {
  const [liked, setLiked] = useState(false);

  return (
    <div className="box">
      <h3>Like / Stock</h3>
      <button onClick={() => setLiked(!liked)}>
        {liked ? "❤️ Liked" : "🤍 Like"}
      </button>

      <button disabled>Out of Stock</button>
    </div>
  );
}

export default LikeStock;