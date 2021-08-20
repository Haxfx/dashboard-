import { motion } from "framer-motion";

import { Cards } from "../components/Pages/Index";
import { Menu } from "../components/Menu/Menu";
import Head from "next/head";

// Our custom easing
let easing = [0.6, -0.05, 0.01, 0.99];

// animate: defines animation
// initial: defines initial state of animation or stating point.
// exit: defines animation when component exits

// Custom variant
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Index = (props) => (
  <>
    <Head>
      <title>Stakeboard | Discovery</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="twitter:card" content="app" />
      <meta
        name="twitter:title"
        content="Stakeboard connects delegators with SPO's"
      />
      <meta
        name="twitter:description"
        content="Stakeboard is the go-to trusted platform for SPOs and delegators to connect, stake, communicate, research, educate and collaborate on Cardano."
      />
      <meta name="twitter:image" content="../public/stakeboard-logo.png" />
      <meta name="twitter:site" content="@stakeboard" />
      <meta name="twitter:creator" content="@stakeboard" />
      <meta property="og:url" content="../public/stakeboard-logo.png" />
      <meta
        property="og:title"
        content="Stakeboard connects delegators with SPO's"
      />
      <meta
        property="og:description"
        content="Stakeboard is the go-to trusted platform for SPOs and delegators to connect, stake, communicate, research, educate and collaborate on Cardano."
      />
      <meta property="og:image" content="../public/stakeboard-logo.png" />
    </Head>
    <div className="max-w-screen-2xl m-auto">
      <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-4">
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            className="title"
          >
            <Menu />
          </motion.div>
          <motion.div variants={fadeInUp} className="cards">
            <Cards />
          </motion.div>
        </div>
      </motion.div>
    </div>
  </>
);

//Index.getInitialProps = async function () {
//  return {
//    product: "Data",
//  };
//};

export default Index;
