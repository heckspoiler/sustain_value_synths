import "../styles/globals.css";
import Header from "../components/Header/Header";
import { StrictMode } from "react";

import { CartProvider } from "../context/cart";

function MyApp({ Component, pageProps }) {
  return (
    <StrictMode>
      <CartProvider>
        <Header />
        <Component {...pageProps} />
      </CartProvider>
    </StrictMode>
  );
}

export default MyApp;
