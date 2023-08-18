import commerce from "../../lib/commerce";
import styles from "./permalink.module.css";
import { useCartDispatch } from "../../context/cart";

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
  function removePTags(str) {
    return str.replace(/<\/?p>/g, "");
  }

  const { setCart } = useCartDispatch();
  const addToCart = async () => {
    try {
      const { cart } = await commerce.cart.add(product.id, 1);
      setCart(cart);
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
          <button onClick={addToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
