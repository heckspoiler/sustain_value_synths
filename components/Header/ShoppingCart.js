import Link from "next/link";
import { useState, useEffect } from "react";
import commerce from "../../lib/commerce";

const ShoppingCart = () => {
  const [cart, setCart] = useState({ total_items: 0 });

  const fetchCart = async () => {
    try {
      const cartData = await commerce.cart.retrieve();
      setCart(cartData);
    } catch (error) {
      console.log("error fetching cart:", error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, [cart]);

  return (
    <Link href="/cart">
      <div className="relative">
        <img
          src="/icons/shopping-cart.svg"
          alt="Shopping Cart"
          className="h-8 w-8 transition-transform transform hover:scale-110 hover:cursor-pointer"
        />
        {cart.total_items > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
            {cart.total_items}
          </span>
        )}
      </div>
    </Link>
  );
};

export default ShoppingCart;
