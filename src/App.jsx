import React, { useState } from "react";
import "./App.css";
import BookList from "./components/BookList";
import Cart from "./components/Cart";

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
    <div className="App">
      <h1>Harry Potter Book Store</h1>
      <BookList addToCart={addToCart} />
      <Cart
        setCart={setCart}
        cart={cart}
        updateQuantity={updateQ}
        removeFromCart={removeFromCart}
      />
    </div>
  );
}

export default App;
