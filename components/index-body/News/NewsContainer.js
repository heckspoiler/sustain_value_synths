import styles from "./NewsContainer.module.css";
import NewsItem from "./NewsItem";

const NewsContainer = () => {
  return (
    <section className={styles["news-container"]}>
      <NewsItem />
      <NewsItem />
      <NewsItem />
    </section>
  );
};

export default NewsContainer;
