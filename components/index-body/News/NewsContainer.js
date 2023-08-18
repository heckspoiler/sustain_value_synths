import styles from "./NewsContainer.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";

const NewsContainer = ({ products }) => {
  if (!products) return null;

  return (
    <ul className={styles["news-container"]}>
      {products.slice(0, 3).map((product) => (
        <li key={product.permalink} className={styles.newsItem}>
          <Link href={`/products/${product.permalink}`}>
            <img src={product.image.url} alt={product.name} />
          </Link>
          <h3>{product.name}</h3>
          <p>{product.price.formatted_with_symbol}</p>
          <Link href={`/products/${product.permalink}`}>
            <button>Info</button>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NewsContainer;
