import React, { useState } from "react";
import "./styles.css";

function AddToCart() {
  const [cart, setCart] = useState([]);

  return (
    <div className="box">
      <h3>Add To Cart</h3>
      <button onClick={() => setCart([...cart, "Item"])}>
        Add Item
      </button>
      <p>Items: {cart.length}</p>
    </div>
  );
}

export default AddToCart;