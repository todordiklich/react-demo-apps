import { createContext, useState } from 'react';

const initialContext = {
  cartItems: [],
  onAddItem: (item) => {},
  onRemoveItem: (itemId) => {},
};

const CartContext = createContext(initialContext);

export function CartContextProvider(props) {
  const [cartItems, setCartItems] = useState([]);

  function addItemHandler(item) {
    setCartItems((prevItems) => [...prevItems, item]);
  }

  function removeItemHandler(itemId) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  }

  return (
    <CartContext.Provider
      value={{
        cartItems: cartItems,
        onAddItem: addItemHandler,
        onRemoveItem: removeItemHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContext;
