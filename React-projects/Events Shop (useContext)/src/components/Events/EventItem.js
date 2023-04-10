import { useContext } from 'react';

import classes from './EventItem.module.css';
import CartContext from '../../store/cart-context';

function EventItem({ event }) {
  const cartCtx = useContext(CartContext);
  const isInCart = cartCtx.cartItems.some((item) => item.id === event.id);

  let buttonCaption = 'Add to Cart';
  let buttonAction = () => cartCtx.onAddItem(event);

  if (isInCart) {
    buttonCaption = 'Remove from Cart';
    buttonAction = () => cartCtx.onRemoveItem(event.id);
  }

  return (
    <li className={classes.event}>
      <img src={event.image} alt={event.title} />
      <div className={classes.content}>
        <h2>{event.title}</h2>
        <p className={classes.price}>${event.price}</p>
        <p>{event.description}</p>
        <div className={classes.actions}>
          <button onClick={buttonAction}>{buttonCaption}</button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
