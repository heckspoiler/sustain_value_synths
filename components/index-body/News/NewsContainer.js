import styles from "./NewsContainer.module.css";
import NewsItem from "./NewsItem";
import { useEffect, useState } from "react";

const NewsContainer = ({ products }) => {
  return (
    <section className={styles["news-container"]}>
      <NewsItem products={products} />
    </section>
  );
};

export default NewsContainer;
