import { useContext } from 'react';
import ReactDOM from 'react-dom';

import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';

function Cart({ onClose }) {
  const cartCtx = useContext(CartContext);

  const total = cartCtx.cartItems.reduce(
    (prevVal, item) => prevVal + item.price,
    0
  );

  return ReactDOM.createPortal(
    <>
      <div className={classes.backdrop} onClick={onClose} />
      <aside className={classes.cart}>
        <h2>Your Cart</h2>
        <ul>
          {cartCtx.cartItems.map((item) => (
            <li key={item.id}>
              {item.title} (${item.price})
            </li>
          ))}
        </ul>
        <p className={classes.total}>Total: ${total}</p>
        <div className={classes.actions}>
          <button onClick={onClose}>Close</button>
          <button onClick={onClose}>Buy</button>
        </div>
      </aside>
    </>,
    document.getElementById('modal')
  );
}

export default Cart;
