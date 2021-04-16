import { motion } from "framer-motion";

import { Cards } from "../components/Cards/Cards";
import { Menu } from "../components/Menu/Menu";

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
  <div className="max-w-screen-2xl m-auto">
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-2">
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
);

//Index.getInitialProps = async function () {
//  return {
//    product: "Data",
//  };
//};

export default Index;
