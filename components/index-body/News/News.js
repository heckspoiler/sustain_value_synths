import NewsContainer from "./NewsContainer";

const News = ({ products }) => {
  return (
    <section
      className="h-screen bg-yellow-main rounded-t-newsTop pt-28"
      id="news-section"
    >
      <h2 className="ml-20 drop-shadow-lg">News</h2>
      <NewsContainer products={products} />
    </section>
  );
};

export default News;
