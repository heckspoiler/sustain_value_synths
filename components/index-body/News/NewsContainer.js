import styles from "./NewsContainer.module.css";
import NewsItem from "./NewsItem";
import { fetchProducts } from "/lib/shopify";
import { useEffect, useState } from "react";

const NewsContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const result = await fetchProducts();
        console.log("Received products:", result);
        setProducts(result);
      } catch (error) {
        console.log("This motherfucker error:", error);
      }
    };

    getProducts();
  }, []);

  return (
    <section className={styles["news-container"]}>
      <NewsItem />
      <NewsItem />
      <NewsItem />
    </section>
  );
};

export default NewsContainer;
