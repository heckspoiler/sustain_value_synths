import styles from "./NewsItem.module.css";

const NewsItem = ({ products }) => {
  return (
    <div className={styles["news-item"]}>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default NewsItem;
