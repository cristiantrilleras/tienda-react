import React from 'react';
import './Book.css'

function Book({ title, author, price, image, addToCart }) {
  return (
    <div className="book">
      <img src={image} alt={title} className='imagen'/>
      <h2>{title}</h2>
      <p>Author: {author}</p>
      <p>Price: ${price}</p>
      <button onClick={() => addToCart({ title, author, price, image })}>
  Add to Cart
</button>

    </div>
  );
}

export default Book;