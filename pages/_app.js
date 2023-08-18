import "../styles/globals.css";
import Header from "../components/Header/Header";

import { CartProvider } from "../context/cart";

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Header />
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;
