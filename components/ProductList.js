import Link from "next/link";
import { useState } from "react";
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

          <div className={styles.buttonContainer}>
            <Link href={`/products/${product.permalink}`}>
              <button className={styles.infoButton}>Info</button>
            </Link>
            <button className={styles.buyButton}>Buy</button>
          </div>
        </ul>
      ))}
    </li>
  );
}
