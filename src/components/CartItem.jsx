import React from 'react';

function CartItem({ title, price, quantity, removeFromCart, updateQuantity }) {
  return (
    <div className="cart-item">
      <p>{title}</p>
      <p>${price}</p>
      <button onClick={removeFromCart}>Remove</button>
      <button onClick={() => updateQuantity(title, true)}>+</button>
      <span>{quantity}</span>
      <button onClick={() => updateQuantity(title, false)}>-</button>
    </div>
  );
}

export default CartItem;
