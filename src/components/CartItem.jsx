import React from 'react';
import "./CartItem.css"

function CartItem({ title, price, quantity, removeFromCart, updateQuantity }) {
  return (
    <div className="cart-item">
  
      <p>{title}</p>
      <p className='price'>costo unidad ${price}</p>

      <div className='remove'>
        <div>
      <button onClick={removeFromCart}>Remove</button>
      </div>
      <div>
      <button className='increment' onClick={() => updateQuantity(title, true)}>+</button>
      <span>{quantity}</span>
      <button className='increment' onClick={() => updateQuantity(title, false)}>-</button>
      </div>
      </div>
    <hr />
    </div>
  );
}

export default CartItem;
