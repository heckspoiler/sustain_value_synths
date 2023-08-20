import { useState } from "react";
import { useRouter } from "next/router";
import { useCartDispatch, useCartState } from "../context/cart";
import styles from "./checkout.module.css";

export default function CheckoutPage() {
  const router = useRouter();

  // use the hooks directly
  const cartDispatch = useCartDispatch();
  const cartState = useCartState();

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
    if (cartDispatch.setCart) {
      cartDispatch.setCart({});
    }

    router.push("/");
  };

  return (
    <section className={styles.checkoutPage}>
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
            />
          </div>
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="address"
            placeholder="Shipping Address"
            value={formData.address}
            onChange={handleInputChange}
          />
          <button type="submit" className={styles.buttonCheckout}>
            Place Order
          </button>
        </form>
      </div>
    </section>
  );
}
