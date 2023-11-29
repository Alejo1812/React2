import React, { useState } from 'react';

function Cart() {
  const [cart, setCart] = useState(0);

  const addToCart = () => {
    setCart(cart + 1);
  };

  const removeFromCart = () => {
    if (cart > 0) {
      setCart(cart - 1);
    }
  };

  return (
    <div>
      <h2>Carrito: {cart}</h2>
      <button onClick={addToCart}>Agregar al carrito</button>
      <button onClick={removeFromCart}>Quitar del carrito</button>
    </div>
  );
}

export default Cart;
