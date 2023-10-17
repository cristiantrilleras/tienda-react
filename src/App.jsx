import React, { useState } from "react";
import "./App.css";
import BookList from "./components/BookList";
import Cart from "./components/Cart";
import { Routes, Route, Link } from 'react-router-dom';


function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (book) => {
    // Verifica si el libro ya está en el carrito
    const existingItem = cart.find((item) => item.title === book.title);
    if (existingItem) {
      // Si ya existe, incrementa la cantidad
      setCart(
        cart.map((item) =>
          item.title === book.title
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // Si no existe, agrégalo al carrito con cantidad 1
      setCart([...cart, { ...book, quantity: 1 }]);
    }
  };

  const removeFromCart = (book) => {
    // Elimina el libro del carrito
    setCart(cart.filter((item) => item.title !== book.title));
  };

  const updateQ = (title, isIncrement) => {
    setCart(
      cart.map((item) =>
        item.title === title
          ? {
            ...item,
            quantity: isIncrement ? item.quantity + 1 : item.quantity - 1,
          }
          : item
      )
    );
  };

  return (

    
    <>

      <div className="App">
        <h1 className="title">Harry Potter Book Store</h1>

        <div className="subCart">
          <h3 className="subtitle">Libros disponibles</h3>
          <button>carrito de compras</button>
        </div>

      </div>
      <Routes>

        <Route path="/" element={<BookList addToCart={addToCart} />} />
        <Route path="/carrito" element={<Cart
          setCart={setCart}
          cart={cart}
          updateQuantity={updateQ}
          removeFromCart={removeFromCart}
        />} 
        />


      </Routes>

    </>
  );
}

export default App;
