import Link from "next/link";

import Product from "./Product";
import styles from "./ProductList.module.css";

export default function ProductList({ products }) {
  if (!products) return null;
  return (
    <li className={styles.productsList}>
      {products.map((product) => (
        <ul key={product.permalink} className={styles.productsItem}>
          <Link href={`/products/${product.permalink}`}>
            <img src={product.image.url} alt={product.name} />
          </Link>
          <h3>{product.name}</h3>
          <p>{product.price.formatted_with_symbol}</p>
          <Link href={`/products/${product.permalink}`}>
            <div className={styles.buttonContainer}>
              <button className={styles.infoButton}>Info</button>
              <button className={styles.buyButton}>Buy</button>
            </div>
          </Link>
        </ul>
      ))}
    </li>
  );
}
