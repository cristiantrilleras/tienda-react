import React from 'react';
import CartItem from './CartItem';

function Cart({ cart, removeFromCart,updateQuantity, setCart }) {
  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const checkout = () => {
    alert("Gracias por tu compra. Tu pedido se ha realizado con éxito.");
    setCart([]); // Vacía el carrito
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.map((item) => (
        <CartItem
          key={crypto.randomUUID}
          title={item.title}
          price={item.price}
          quantity={item.quantity}
          updateQuantity={updateQuantity}
          removeFromCart={() => removeFromCart(item)}
        />
      ))}
      <div className="total">Total: ${getTotal().toFixed(2)}</div>
      <button onClick={checkout}>Checkout</button>
    </div>
  );
}


export default Cart;
