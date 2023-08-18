import commerce from "../lib/commerce";
import ProductList from "../components/ProductList";

export async function getStaticProps() {
  const { data: products } = await commerce.products.list();

  return {
    props: {
      products,
    },
  };
}

export default function Products({ products }) {
  return (
    <div className="mt-36">
      <h2 className="mt-20">For sale right now!</h2>
      <ProductList products={products} />
    </div>
  );
}
