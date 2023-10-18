import React, { useState } from 'react';
import './Book.css'

function Book({ title, author, price, image, stock, addToCart }) {
  const [quantity, setQuantity] = useState(0);

  const canAddToCart = quantity < stock; // Verifica si aún hay stock disponible

  return (
    <div className="book">
      <img src={image} alt={title} className='imagen'/>
      <h2>{title}</h2>
      <p>Author: {author}</p>
      <p>Price: ${price}</p>
      <p className='stock'>libros disponibles: {stock}</p> 
      <div>
        <button
          onClick={() => {
            if (canAddToCart) {
              setQuantity(quantity + 1);
              addToCart({ title, author, price, image });
            }
          }}
          disabled={!canAddToCart} // Deshabilita el botón si no hay stock
        >
          Add to Cart
        </button>
        <span>Quantity: {quantity}</span>
      </div>
    </div>
  );
}

export default Book;
