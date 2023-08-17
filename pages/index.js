import Background from "../components/index-body/Background";
import News from "../components/index-body/News/News";
import commerce from "../lib/commerce";

export default function Home({ products }) {
  console.log(products);
  return (
    <div className="bg-pink-main h-screen pt-20">
      <Background />
      <h1 className="text-7xl text-blue-main w-96 ml-20 text-shadow-lg pt-28 pl-20 text-left z-10 drop-shadow-lg">
        VINTAGE IN <br />
        <span className="shape">SHAPE</span> AND <br />
        <span className="sound">SOUND</span>!
      </h1>
      <News products={products} />
    </div>
  );
}

export async function getServerSideProps() {
  const { data: products } = await commerce.products.list();
  return {
    props: {
      products,
    },
  };
}
