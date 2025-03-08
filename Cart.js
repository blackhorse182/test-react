import React, { useContext } from 'react';
import { CartContext } from './CartContext';

function Cart() {
  const { cart } = useContext(CartContext);
  return (
    <div className="cart">
      <h3>Cart</h3>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <p key={item.id}>{item.name} - ${item.price}</p>
        ))
      )}
    </div>
  );
}

export default Cart;