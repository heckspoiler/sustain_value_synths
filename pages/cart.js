import { useCartDispatch, useCartState } from "../context/cart";
import styles from "./cart.module.css";
import { useEffect } from "react";
import commerce from "../lib/commerce";

function CartItem({ id, name, quantity, line_total, image }) {
  const { setCart } = useCartDispatch();

  useEffect(() => {
    console.log("CartItem re-rendered due to quantity change:", quantity);
  }, [quantity]);

  const handleUpdateCart = (cart) => {
    console.log("Updated cart data:", cart);
    setCart(cart);
  };

  const removeItem = () => commerce.cart.remove(id).then(handleUpdateCart);

  const decrementQuantity = () => {
    if (quantity > 1) {
      commerce.cart
        .update(id, { quantity: quantity - 1 })
        .then(handleUpdateCart);
    } else {
      removeItem();
    }
  };

  const incrementQuantity = () => {
    console.log("incrementQuantity Button Clicked");
    commerce.cart.update(id, { quantity: quantity + 1 }).then(handleUpdateCart);
  };

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

  if (isEmpty)
    return (
      <section className={styles.cartPage}>
        <div className={styles.cartContainer}>
          <h2 className="mt-20 ml-12">Cart</h2>
          <div className={styles.cartSub}>
            <h2>Your Cart is empty!</h2>
          </div>
        </div>
      </section>
    );

  return (
    <section className={styles.cartPage}>
      <div className={styles.cartContainer}>
        <h2 className="mt-20 ml-12">Cart</h2>
        <div className={styles.cartSub}>
          {line_items.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}

          <p className={styles.total}>
            <strong>Sub total:</strong> {subtotal.formatted_with_symbol}
          </p>
          <div>
            <button>Proceed to Checkout!</button>
          </div>
        </div>
      </div>
    </section>
  );
}
