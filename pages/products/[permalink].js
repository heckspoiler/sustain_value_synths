import commerce from "../../lib/commerce";
import styles from "./permalink.module.css";
import { useCartDispatch } from "../../context/cart";
import { useEffect, useState } from "react";

export async function getStaticProps({ params }) {
  const { permalink } = params;

  const product = await commerce.products.retrieve(permalink, {
    type: "permalink",
  });

  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  const { data: products } = await commerce.products.list();

  return {
    paths: products.map((product) => ({
      params: {
        permalink: product.permalink,
      },
    })),
    fallback: false,
  };
}

export default function Product({ product }) {
  const [buttonLabel, setButtonLabel] = useState("Add to Cart");

  function removePTags(str) {
    return str.replace(/<\/?p>/g, "");
  }

  const handleUpdateCart = (cart) => {
    console.log("Updated cart data:", cart);
    setCart(cart);
  };

  const addToCart = async () => {
    try {
      setButtonLabel("Added!");
      const { cart } = await commerce.cart
        .add(product.id, 1)
        .then(handleUpdateCart);
      setTimeout(() => {
        setButtonLabel("Add to Cart");
      }, 2000);
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  console.log(commerce.cart);

  return (
    <div className={styles.productContainer}>
      <h2>{product.name}</h2>
      <div className={styles.productInformation}>
        <img src={product.image.url} alt={product.name} />
        <div className={styles.productDescription}>
          <p>{removePTags(product.description)}</p>
          <h3>{product.price.formatted_with_symbol}</h3>
          <button onClick={addToCart}>{buttonLabel}</button>
        </div>
      </div>
    </div>
  );
}
