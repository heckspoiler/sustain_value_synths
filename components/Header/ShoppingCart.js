import Link from "next/link";

const ShoppingCart = () => {
  return (
    <Link href="/cart">
      <img
        src="/icons/shopping-cart.svg"
        alt="Shopping Cart"
        className="h-8 w-8 transition-transform transform hover:scale-110 hover:cursor-pointer"
      />
    </Link>
  );
};

export default ShoppingCart;
