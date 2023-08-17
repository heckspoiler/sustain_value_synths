import Link from "next/link";
import Navbar from "./Navbar";
import ShoppingCart from "./ShoppingCart";

const Header = () => {
  return (
    <header className="bg-pink-main h-auto flex items-center justify-between pl-8 pr-8 pt-4 pb-4 z-50 fixed w-full">
      <Link href="/">
        <img src="/logo/logo.svg" alt="Logo" className="h-20 w-20" />
      </Link>
      <Navbar />
      <ShoppingCart />
    </header>
  );
};

export default Header;
