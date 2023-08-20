import { useState, useContext } from "react";
import { useRouter } from "next/router";
import { useCartDispatch, useCartState } from "../context/cart";

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, setCart } = useContext(cartContext);

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
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
  };
}
