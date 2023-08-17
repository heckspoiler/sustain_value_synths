import styles from "./NewsContainer.module.css";

const NewsContainer = () => {
  return (
    <section className={styles["news-container"]}>
      <div className={styles["news-item"]}></div>
      <div className={styles["news-item"]}></div>
      <div className={styles["news-item"]}></div>
    </section>
  );
};
