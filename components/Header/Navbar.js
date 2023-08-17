import Link from "next/link";

const Navbar = () => {
  return (
    <ul className="flex flex-row gap-28 h-auto items-center justify-center text-black">
      <li className="transition-transform transition-colors transform hover:scale-110 hover:text-blue-main">
        <Link href="/">Home</Link>
      </li>
      <li className="transition-transform transition-colors transform hover:scale-110 hover:text-blue-main">
        <Link href="/shop">Shop</Link>
      </li>
      <li className="transition-transform transition-colors transform hover:scale-110 hover:text-blue-main">
        <Link href="/about">About</Link>
      </li>
    </ul>
  );
};

export default Navbar;
