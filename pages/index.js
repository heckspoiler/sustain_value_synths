import Background from "../components/index-body/Background";
import News from "../components/index-body/News/News";
import commerce from "../lib/commerce";
import styles from "../styles/index.module.css";
import { motion as m } from "framer-motion";

export default function Home({ products }) {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  console.log(products);
  return (
    <div className="main-sections bg-pink-main h-screen pt-20 w-screen ">
      <Background />
      <m.h1
        className={styles.mainTitle}
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        VINTAGE IN <br />
        <span className={styles.shape}>SHAPE</span>
        <br /> AND <br />
        <span className={styles.sound}>SOUND</span>!
      </m.h1>
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
