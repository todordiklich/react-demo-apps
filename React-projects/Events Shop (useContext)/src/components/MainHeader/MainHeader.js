import { useState, useContext } from 'react';

import Cart from '../Cart/Cart';
import classes from './MainHeader.module.css';
import CartContext from '../../store/cart-context';

function MainHeader() {
  const [modalIsOpen, setModalIsOpen] = useState();
  const cartCtx = useContext(CartContext);

  function openCartModalHandler() {
    setModalIsOpen(true);
  }

  function closeCartModalHandler() {
    setModalIsOpen(false);
  }

  const numCartItems = cartCtx.cartItems.length;

  return (
    <>
      <header className={classes.header}>
        <h1>StateEvents Shop</h1>
        <button onClick={openCartModalHandler}>Cart ({numCartItems})</button>
      </header>
      {modalIsOpen && <Cart onClose={closeCartModalHandler} />}
    </>
  );
}

export default MainHeader;
