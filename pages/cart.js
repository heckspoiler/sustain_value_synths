import { useCartDispatch, useCartState } from "../context/cart";
import styles from "./cart.module.css";

import commerce from "../lib/commerce";

function CartItem({ id, name, quantity, line_total, image }) {
  const { setCart } = useCartDispatch();

  const handleUpdateCart = ({ cart }) => setCart(cart);

  const removeItem = () => commerce.cart.remove(id).then(handleUpdateCart);

  const decrementQuantity = () => {
    quantity > 1
      ? commerce.cart
          .update(id, { quantity: quantity - 1 })
          .then(handleUpdateCart)
      : removeItem();
  };

  const incrementQuantity = () =>
    commerce.cart.update(id, { quantity: quantity + 1 }).then(handleUpdateCart);

  return (
    <div className={styles.cartMain}>
      <img src={image.url} alt={name} />
      <div className={styles.info}>
        <h3>{name}</h3>
        <p>Quantity: {quantity}</p>
        <p>{line_total.formatted_with_symbol}</p>
        <div className={styles.buttonContainer}>
          <button onClick={incrementQuantity}>+</button>
          <button onClick={decrementQuantity}>-</button>
          <button onClick={removeItem}>&times;</button>
        </div>
      </div>
    </div>
  );
}

export default function CartPage() {
  const { line_items, subtotal } = useCartState();

  const isEmpty = line_items.length === 0;

  if (isEmpty) return <p>Your cart is empty</p>;

  return (
    <div className={styles.cartContainer}>
      <h2 className="mt-20 ml-12">Cart</h2>
      <div className={styles.cartSub}>
        {line_items.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}

        <p className={styles.total}>
          <strong>Sub total:</strong> {subtotal.formatted_with_symbol}
        </p>
      </div>
    </div>
  );
}
