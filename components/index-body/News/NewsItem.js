import styles from "./NewsItem.module.css";

const NewsItem = ({ products }) => {
  return (
    <div className={styles["news-item"]}>
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.image.url} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.price.formatted_with_symbol}</p>
        </div>
      ))}
      <button>Info</button>
    </div>
  );
};

export default NewsItem;
