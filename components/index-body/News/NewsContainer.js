import styles from "./NewsContainer.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";

const NewsContainer = ({ products }) => {
  if (!products) return null;

  return (
    <li className={styles["news-container"]}>
      {products.map((product) => (
        <ul key={product.permalink} className={styles.newsItem}>
          <Link href={`/products/${product.permalink}`}>
            <img src={product.image.url} alt={product.name} />
          </Link>
          <h3>{product.name}</h3>
          <p>{product.price.formatted_with_symbol}</p>
          <Link href={`/products/${product.permalink}`}>
            <button>Info</button>
          </Link>
        </ul>
      ))}
    </li>
  );
};

export default NewsContainer;
