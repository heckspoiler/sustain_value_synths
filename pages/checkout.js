import { useState } from "react";
import { useRouter } from "next/router";
import { useCartDispatch, useCartState } from "../context/cart";
import styles from "./checkout.module.css";
import commerce from "../lib/commerce";
import { CartItem } from "./cart";
import Link from "next/link";

export default function CheckoutPage({
  id,
  name,
  quantity,
  line_total,
  image,
}) {
  const router = useRouter();

  const setCart = useCartDispatch();
  const { line_items, subtotal } = useCartState();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");

    // Assuming you have a method in your cartDispatch to clear the cart
    if (setCart.setCart) {
      setCart.setCart({});
    }

    router.push("/");
  };

  return (
    <section className={styles.checkoutPage}>
      <div className={styles.checkoutCartContainer}>
        <div className={styles.cartSub}>
          {line_items.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}

          <p className={styles.totalCheckout}>
            <strong>Total:</strong> {subtotal.formatted_with_symbol} (VAT.
            included)
          </p>
        </div>
      </div>
      <div className={styles.checkoutFormContainer}>
        <form onSubmit={handleSubmit}>
          <h2>Checkout!</h2>
          <div className={styles.inputContainer}>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="email">Mail</label>
            <input
              type="email"
              name="email"
              placeholder="example@email.com"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="Shipping Adress">Adress</label>
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className={styles.buttonCheckout}>
            Place Order
          </button>
        </form>
      </div>
    </section>
  );
}
