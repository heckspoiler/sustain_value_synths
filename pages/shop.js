import commerce from "../lib/commerce";
import ProductList from "../components/ProductList";
import { motion as m } from "framer-motion";

export async function getStaticProps() {
  const { data: products } = await commerce.products.list();

  return {
    props: {
      products,
    },
  };
}

export default function Products({ products }) {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        opacity: { delay: 0.4, duration: 0.8 },
      },
    },
  };
  return (
    <m.div
      className="mt-36 w-100 pb-56"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <h2 className="mt-20 ml-12">For sale right now!</h2>
      <ProductList products={products} />
    </m.div>
  );
}
